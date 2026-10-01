import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/eliminacion-datos', 'pages.deletion')
}

export default async function EliminacionDatosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.deletion')
  const { DATA_DELETION: d } = await getLegal(params.locale)
  
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
    { id: 'como', label: 'Cómo pedirlo' },
    { id: 'plazos', label: 'En cuánto tiempo te respondemos' },
    { id: 'que-borramos', label: 'Qué borramos' },
    { id: 'conservamos', label: 'Qué conservamos y por qué' },
    { id: 'erp', label: 'Si eres cliente o trabajador de una empresa que usa GO Admin ERP' },
    { id: 'queja', label: 'Si no estás de acuerdo con nuestra respuesta' },
    { id: 'ley', label: 'Ley aplicable' },
  ]
  return (
    <LegalLayout 
      eyebrow="Legal" 
      title={d.title} 
      intro={
        <>
          Puedes pedir en cualquier momento que borremos tus datos personales o tu cuenta de GO Admin ERP. Aquí te explicamos cómo hacerlo, qué borramos, qué debemos conservar por ley y en cuánto tiempo te respondemos. Esta página complementa nuestra{' '}
          <Link href="/privacidad" className="font-semibold text-go-deep hover:underline">
            Política de Tratamiento de Datos Personales
          </Link>
          . El responsable es Go Admin S.A.S., NIT 901.479.683-5, con domicilio en Medellín, Colombia.
        </>
      }
      updated={d.version} 
      toc={toc} 
      currentPage="/eliminacion-datos" 
      reference={false}
    >
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      <LegalSection id="como" title={d.howTitle}>
        <p>
          <strong>Desde la aplicación (si tienes usuario en GO Admin ERP).</strong> Entra a app.goadmin.io, abre «Mi perfil» y elige «Eliminar cuenta». Confirma con tu contraseña y pulsa «Eliminar mi cuenta». Así solicitas la eliminación de tu usuario: tu perfil, tus preferencias y tu acceso a las organizaciones.
        </p>
        <p>
          <strong>Por correo.</strong> Escribe a servicio@goadmin.io con el asunto «Eliminación de datos». Usa este canal si no tienes usuario, si quieres que borremos datos que tenemos de ti como prospecto, candidato o contacto, o si eres el representante de una empresa cliente y quieres cerrar la cuenta de toda la empresa.
        </p>
        <p>
          <strong>Otros canales.</strong> También puedes pedirlo por WhatsApp o teléfono al +57 311 319 5711, de lunes a viernes de 8:00 a. m. a 6:00 p. m., o por escrito en la Carrera 87 B # 45 B - 8, Medellín, Antioquia.
        </p>
        <p>
          <strong>Qué incluir:</strong> tu nombre, número de documento, datos de contacto, el correo o teléfono con el que te conocemos y qué quieres que borremos. Si actúas por otra persona, adjunta el documento que lo acredite.
        </p>
        <p>
          <strong>Quién puede pedirlo:</strong> tú, tus causahabientes, tu representante o apoderado, o quien estipule a tu favor (artículo 20 del Decreto 1377 de 2013).
        </p>
        <p>{d.responsible}</p>
      </LegalSection>
      <LegalSection id="plazos" title={d.timelineTitle}>
        <p>{d.timelineIntro}</p>
        <ul className="grid gap-2.5">
          {d.timeline.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">{d.timelineEnd}</p>
      </LegalSection>
      <LegalSection id="que-borramos" title={d.weDeleteTitle}>
        <p>{d.weDeleteIntro}</p>
        <ul className="grid gap-2.5">
          {d.weDelete.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Si eres el representante de una empresa cliente y cierras la cuenta de toda la empresa, devolvemos o suprimimos los datos cargados en GO Admin ERP según los{' '}
          <Link href="/terminos" className="font-semibold text-go-deep hover:underline">
            Términos y Condiciones
          </Link>
          , salvo lo que la ley nos obligue a conservar.
        </p>
      </LegalSection>
      <LegalSection id="conservamos" title={d.retentionTitle}>
        <p>{d.retentionIntro}</p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-ink-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-ink-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Datos</th>
                <th className="px-4 py-3 font-medium">Cuánto tiempo los conservamos</th>
              </tr>
            </thead>
            <tbody>
              {d.retention.map((r, idx) => (
                <tr key={idx} className="border-t border-ink-line align-top">
                  <td className="px-4 py-3 font-semibold text-ink">{r.type}</td>
                  <td className="px-4 py-3">{r.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Si no pides la eliminación, estos son los plazos máximos que aplicamos de todos modos: prospectos que no se convierten en clientes, hasta 24 meses desde el último contacto; audio de las llamadas, hasta 90 días; transcripciones y resúmenes, hasta 180 días; candidatos no seleccionados, hasta 12 meses desde el cierre del proceso. El resto de plazos está en la sección 14 de la{' '}
          <Link href="/privacidad" className="font-semibold text-go-deep hover:underline">
            Política de Tratamiento de Datos Personales
          </Link>
          .
        </p>
      </LegalSection>
      <LegalSection id="erp" title={d.erpTitle}>
        <p>{d.erp}</p>
      </LegalSection>
      <LegalSection id="queja" title={d.complaintTitle}>
        <p>{d.complaint}</p>
      </LegalSection>
      <LegalSection id="ley" title={d.lawTitle}>
        <p>{d.law}</p>
      </LegalSection>
    </LegalLayout>
  )
}
