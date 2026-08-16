"use client"

interface ScrollDotsProps {
  sections: { id: string; label: string }[]
  activeIndex: number
  onDotClick: (index: number) => void
  color?: "light" | "dark"
}

export default function ScrollDots({
  sections,
  activeIndex,
  onDotClick,
  color = "dark",
}: ScrollDotsProps) {
  const isLight = color === "light"

  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5">
      {sections.map((section, index) => {
        const isActive = index === activeIndex

        const activeClasses = isLight
          ? "w-3.5 h-3.5 rounded-full bg-white scale-125 shadow-lg"
          : "w-3.5 h-3.5 rounded-full bg-blue-600 scale-125 shadow-lg"

        const inactiveClasses = isLight
          ? "w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/80 transition-all"
          : "w-2.5 h-2.5 rounded-full bg-gray-400/60 hover:bg-gray-600 transition-all"

        return (
          <button
            key={section.id}
            type="button"
            aria-label={section.label}
            onClick={() => onDotClick(index)}
            className={`group relative flex items-center justify-center ${
              isActive ? activeClasses : inactiveClasses
            }`}
          >
            <span className="absolute right-full mr-3 whitespace-nowrap text-xs font-medium bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
