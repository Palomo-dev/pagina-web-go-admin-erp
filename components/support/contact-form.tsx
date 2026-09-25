'use client'

import { useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { CONTACT, INDUSTRIES } from '@/lib/site'

const field = 'h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-ink placeholder:text-ink-muted transition-colors focus:border-go focus:outline-none focus:ring-4 focus:ring-go/15'

/**
 * Formulario de contacto sin servidor: arma el mensaje y lo abre en WhatsApp o en el correo.
 * Así ningún mensaje se pierde mientras no exista un backend para formularios.
 */
export function ContactForm() {
  const [data, setData] = useState({ name: '', company: '', industry: '', branches: '', message: '' })
  const [error, setError] = useState('')
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value })

  const compose = () =>
    [
      `Hola, soy ${data.name}${data.company ? ` de ${data.company}` : ''}.`,
      data.industry ? `Industria: ${data.industry}.` : '',
      data.branches ? `Sedes: ${data.branches}.` : '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')

  const send = (channel: 'whatsapp' | 'email') => {
    if (!data.name.trim() || !data.message.trim()) {
      setError('Escribe tu nombre y cuéntanos en qué te ayudamos.')
      return
    }
    setError('')
    const text = compose()
    if (channel === 'whatsapp') {
      window.open(`${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Quiero conocer GO Admin')}&body=${encodeURIComponent(text)}`
    }
  }

  return (
    <form
      className="grid gap-5 rounded-3xl border border-ink-line bg-white p-6 shadow-lg sm:p-8"
      onSubmit={(e) => {
        e.preventDefault()
        send('whatsapp')
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Nombre
          <input className={field} value={data.name} onChange={set('name')} placeholder="Tu nombre" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Negocio
          <input className={field} value={data.company} onChange={set('company')} placeholder="Nombre de tu negocio" autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Industria
          <select className={field} value={data.industry} onChange={set('industry')}>
            <option value="">Selecciona</option>
            {INDUSTRIES.map((i) => (
              <option key={i.href}>{i.name}</option>
            ))}
            <option>Otra</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          ¿Cuántas sedes tienes?
          <select className={field} value={data.branches} onChange={set('branches')}>
            <option value="">Selecciona</option>
            <option>1</option>
            <option>2 a 5</option>
            <option>6 a 15</option>
            <option>Más de 15</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        ¿En qué te ayudamos?
        <textarea className={`${field} h-32 resize-none py-3`} value={data.message} onChange={set('message')} placeholder="Cuéntanos cómo trabajas hoy y qué te gustaría ordenar." required />
      </label>
      {error ? (
        <p role="alert" className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-go-action px-5 font-semibold text-white shadow-action transition-colors hover:bg-go-deep">
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          Enviar por WhatsApp
        </button>
        <button type="button" onClick={() => send('email')} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 font-semibold text-ink transition-colors hover:border-go hover:text-go-deep">
          <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          Enviar por correo
        </button>
      </div>
      <p className="text-xs text-ink-muted">
        Al enviar, abrimos tu WhatsApp o tu correo con el mensaje listo. Tratamos tus datos según nuestra{' '}
        <a href="/privacidad" className="font-medium text-go-deep underline underline-offset-2">
          política de privacidad
        </a>
        .
      </p>
    </form>
  )
}
