"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface UseFullPageScrollOptions {
  sectionCount: number
  scrollContainerRef: React.RefObject<HTMLDivElement>
}

/**
 * Hook que implementa scroll tipo fullPage.js:
 * - Intercepta wheel, touch y keyboard
 * - Un scroll = cambio a la siguiente/anterior sección
 * - Permite scroll interno en elementos con [data-internal-scroll]
 *   solo cambia de sección cuando el scroll interno llega al límite
 */
export function useFullPageScroll({ sectionCount, scrollContainerRef }: UseFullPageScrollOptions) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isAnimatingRef = useRef(false)
  const touchStartYRef = useRef(0)
  const touchEndYRef = useRef(0)
  const activeIndexRef = useRef(0)
  // Track si el touch actual empezó dentro de un scrollable
  const touchInScrollableRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const scrollToSection = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current
      if (!container || index < 0 || index >= sectionCount) return
      if (isAnimatingRef.current) return

      isAnimatingRef.current = true
      setActiveIndex(index)
      activeIndexRef.current = index

      const targetTop = index * container.clientHeight
      container.scrollTo({ top: targetTop, behavior: "smooth" })

      setTimeout(() => {
        isAnimatingRef.current = false
      }, 800)
    },
    [scrollContainerRef, sectionCount]
  )

  const canScrollInternal = (el: HTMLElement, direction: "down" | "up"): boolean => {
    const { scrollTop, scrollHeight, clientHeight } = el
    const canScrollDown = scrollTop + clientHeight < scrollHeight - 2
    const canScrollUp = scrollTop > 2
    return direction === "down" ? canScrollDown : canScrollUp
  }

  const findScrollableParent = (target: EventTarget | null): HTMLElement | null => {
    let el = target as HTMLElement | null
    while (el && el !== scrollContainerRef.current) {
      if (el.dataset && el.dataset.internalScroll === "true") return el
      el = el.parentElement
    }
    return null
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // ===== WHEEL (desktop) =====
    const handleWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) {
        e.preventDefault()
        return
      }

      if (Math.abs(e.deltaY) < 15) return

      const scrollable = findScrollableParent(e.target)
      if (scrollable) {
        const direction = e.deltaY > 0 ? "down" : "up"
        if (canScrollInternal(scrollable, direction)) {
          return // dejar que el scroll interno pase
        }
      }

      e.preventDefault()
      if (e.deltaY > 0) {
        scrollToSection(activeIndexRef.current + 1)
      } else {
        scrollToSection(activeIndexRef.current - 1)
      }
    }

    // ===== TOUCH (móvil) =====
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY
      touchEndYRef.current = e.touches[0].clientY
      // Record si el touch empezó dentro de un scrollable
      touchInScrollableRef.current = findScrollableParent(e.target)
    }

    const handleTouchMove = (e: TouchEvent) => {
      touchEndYRef.current = e.touches[0].clientY

      if (isAnimatingRef.current) {
        e.preventDefault()
        return
      }

      const scrollable = touchInScrollableRef.current
      if (scrollable) {
        const direction = touchStartYRef.current > touchEndYRef.current ? "down" : "up"
        if (canScrollInternal(scrollable, direction)) {
          // Dejar que el navegador haga scroll interno nativo
          return
        }
        // Llegó al límite del scroll interno → bloquear para preparar cambio de sección
        e.preventDefault()
        return
      }

      // No hay scroll interno → bloquear scroll normal
      e.preventDefault()
    }

    const handleTouchEnd = () => {
      if (isAnimatingRef.current) return

      const delta = touchStartYRef.current - touchEndYRef.current
      if (Math.abs(delta) < 40) return

      const scrollable = touchInScrollableRef.current
      if (scrollable) {
        // Solo cambiar de sección si el scroll interno llegó al límite
        const direction = delta > 0 ? "down" : "up"
        if (canScrollInternal(scrollable, direction)) {
          // Aún puede scrollear internamente → no cambiar de sección
          return
        }
      }

      // Cambiar de sección
      if (delta > 0) {
        scrollToSection(activeIndexRef.current + 1)
      } else {
        scrollToSection(activeIndexRef.current - 1)
      }
    }

    // ===== KEYBOARD =====
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault()
          scrollToSection(activeIndexRef.current + 1)
          break
        case "ArrowUp":
        case "PageUp":
          e.preventDefault()
          scrollToSection(activeIndexRef.current - 1)
          break
        case "Home":
          e.preventDefault()
          scrollToSection(0)
          break
        case "End":
          e.preventDefault()
          scrollToSection(sectionCount - 1)
          break
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    container.addEventListener("touchend", handleTouchEnd, { passive: true })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [scrollToSection, scrollContainerRef, sectionCount])

  return { activeIndex, scrollToSection }
}
