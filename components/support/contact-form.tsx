'use client'

import { useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useT } from '@/i18n/t'
import { CONTACT } from '@/lib/site'

const field = 'h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-ink placeholder:text-ink-muted transition-colors focus:border-go focus:outline-none focus:ring-4 focus:ring-go/15'

/**
 * Formulario de contacto sin servidor: arma el mensaje y lo abre en WhatsApp o en el correo.
 * Así ningún mensaje se pierde mientras no exista un backend para formularios.
 */
export function ContactForm({ industries }: { industries: string[] }) {
  const t = useT('contactForm')
  const [data, setData] = useState({ name: '', company: '', industry: '', branches: '', message: '' })
  const [error, setError] = useState('')
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value })

  const compose = () =>
    [
      data.company ? t('helloCompany', { name: data.name, company: data.company }) : t('hello', { name: data.name }),
      t('countryLine'),
      data.industry ? t('industryLine', { value: data.industry }) : '',
      data.branches ? t('branchesLine', { value: data.branches }) : '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')

  const send = (channel: 'whatsapp' | 'email') => {
    if (!data.name.trim() || !data.message.trim()) {
      setError(t('required'))
      return
    }
    setError('')
    const text = compose()
    if (channel === 'whatsapp') {
      window.open(`${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t('subject'))}&body=${encodeURIComponent(text)}`
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
          {t('name')}
          <input className={field} value={data.name} onChange={set('name')} placeholder={t('namePh')} autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          {t('company')}
          <input className={field} value={data.company} onChange={set('company')} placeholder={t('companyPh')} autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          {t('industry')}
          <select className={field} value={data.industry} onChange={set('industry')}>
            <option value="">{t('select')}</option>
            {industries.map((i) => (
              <option key={i}>{i}</option>
            ))}
            <option>{t('other')}</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          {t('branches')}
          <select className={field} value={data.branches} onChange={set('branches')}>
            <option value="">{t('select')}</option>
            <option>{t('b1')}</option>
            <option>{t('b2')}</option>
            <option>{t('b3')}</option>
            <option>{t('b4')}</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        {t('message')}
        <textarea className={`${field} h-32 resize-none py-3`} value={data.message} onChange={set('message')} placeholder={t('messagePh')} required />
      </label>
      {error ? (
        <p role="alert" className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-go-action px-5 font-semibold text-white shadow-action transition-colors hover:bg-go-deep">
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          {t('whatsapp')}
        </button>
        <button type="button" onClick={() => send('email')} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 font-semibold text-ink transition-colors hover:border-go hover:text-go-deep">
          <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          {t('email')}
        </button>
      </div>
      <p className="text-xs text-ink-muted">
        {t('consent')}{' '}
        <Link href="/privacidad" className="font-medium text-go-deep underline underline-offset-2">
          {t('privacy')}
        </Link>
        .
      </p>
    </form>
  )
}
