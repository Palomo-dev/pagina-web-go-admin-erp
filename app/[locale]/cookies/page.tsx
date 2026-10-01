import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { CookieSettingsButton } from '@/components/site/cookie-consent'
import { Tag } from '@/components/site/primitives'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/cookies', 'pages.cookies')
}

export default async function CookiesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.cookies')
  const { COOKIES: c } = await getLegal(params.locale)
  
  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''
  
  const toc = [
    { id: 'que-son', label: 'Qué son las cookies' },
    { id: 'antes', label: 'Antes de que elijas, solo cargamos lo necesario' },
    { id: 'tipos', label: 'Categorías' },
    { id: 'lista', label: 'Cookies que usamos' },
    { id: 'erp', label: 'Dentro de GO Admin ERP' },
    { id: 'gestionar', label: 'Cómo cambiar tus preferencias' },
    { id: 'ley', label: 'Ley aplicable' },
    { id: 'contacto', label: 'Preguntas' },
  ]
  return (
    <LegalLayout 
      eyebrow="Legal" 
      title={c.title} 
      intro={
        <>
          Esta página explica qué cookies usa goadmin.io, para qué sirve cada una, cuánto duran y cómo cambiar tu elección. Complementa la sección 8 de nuestra{' '}
          <Link href="/privacidad" className="font-semibold text-go-deep hover:underline">
            Política de Tratamiento de Datos Personales
          </Link>
          . El responsable es Go Admin S.A.S., NIT 901.479.683-5, con domicilio en Medellín, Colombia.
        </>
      }
      updated={c.version} 
      toc={toc} 
      currentPage="/cookies" 
      reference={false}
    >
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      <LegalSection id="que-son" title="Qué son las cookies">
        <p>{c.what}</p>
      </LegalSection>
      <LegalSection id="antes" title="Antes de que elijas, solo cargamos lo necesario">
        <p>{c.beforeChoose}</p>
      </LegalSection>
      <LegalSection id="tipos" title="Categorías">
        <ul className="grid gap-2 leading-relaxed">
          {c.categories.map((k) => (
            <li key={k.id} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>
                <strong>{k.title}.</strong> {k.text}
              </span>
            </li>
          ))}
        </ul>
      </LegalSection>
      <LegalSection id="lista" title="Cookies que usamos">
        <div className="overflow-x-auto rounded-2xl border border-ink-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-ink-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Proveedor</th>
                <th className="px-4 py-3 font-medium">Finalidad</th>
                <th className="px-4 py-3 font-medium">Duración</th>
                <th className="px-4 py-3 font-medium">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {c.table.map((row, idx) => (
                <tr key={idx} className="border-t border-ink-line align-top">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-ink">{row.name}</td>
                  <td className="px-4 py-3">{row.provider}</td>
                  <td className="px-4 py-3">{row.purpose}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3">{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          La duración de las cookies de terceros es la que informa cada proveedor y puede cambiar. Cuando cambiemos las cookies que usamos, actualizaremos esta tabla. Si aceptas la medición y la publicidad, también podemos enviar a Meta y a Google, desde nuestros servidores, eventos como «formulario enviado» o «registro completado», con tu correo y teléfono convertidos en códigos irreversibles (hash SHA-256). Si no lo aceptas, no enviamos nada sobre ti. El detalle está en la sección 8.3 de la{' '}
          <Link href="/privacidad" className="font-semibold text-go-deep hover:underline">
            Política de Tratamiento de Datos Personales
          </Link>
          .
        </p>
      </LegalSection>
      <LegalSection id="erp" title="Dentro de GO Admin ERP">
        <p>{c.app}</p>
      </LegalSection>
      <LegalSection id="gestionar" title="Cómo cambiar tus preferencias">
        <div className="grid gap-2.5 leading-relaxed">
          {c.manage.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <CookieSettingsButton className="mt-4 inline-flex h-11 items-center justify-center justify-self-start rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep">
          Preferencias de cookies
        </CookieSettingsButton>
      </LegalSection>
      <LegalSection id="ley" title="Ley aplicable">
        <p>{c.law}</p>
      </LegalSection>
      <LegalSection id="contacto" title="Preguntas">
        <p className="leading-relaxed">
          Si tienes preguntas sobre las cookies o quieres ejercer tus derechos sobre tus datos, escríbenos a servicio@goadmin.io. Te respondemos las consultas en máximo 10 días hábiles y los reclamos en máximo 15 días hábiles, como explica la{' '}
          <Link href="/privacidad" className="font-semibold text-go-deep hover:underline">
            Política de Tratamiento de Datos Personales
          </Link>
          .
        </p>
        <p className="mt-2 text-sm">
          <a href={`mailto:${c.contact.email}`} className="font-semibold text-go-deep hover:underline">
            {c.contact.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
