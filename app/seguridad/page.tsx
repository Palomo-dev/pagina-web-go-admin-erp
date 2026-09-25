import type { Metadata } from 'next'
import { CtaBand, FaqSection, FeatureGrid, Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import type { IconName } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Seguridad',
  description: 'Roles y permisos por sede, aislamiento de datos entre organizaciones, auditoría de cambios, autenticación y respaldos en GO Admin.',
}

// Solo prácticas que el producto implementa (RLS, auditorías, roles por alcance, doble factor).
// Certificaciones o cifras de disponibilidad se publican únicamente con soporte verificable.
const CONTROLS: { title: string; text: string; icon: IconName }[] = [
  { title: 'Cada organización, aislada', text: 'Las reglas de acceso de la base de datos impiden que una organización vea información de otra.', icon: 'lock' },
  { title: 'Roles y permisos', text: 'Permisos por módulo, página y sede. Una persona puede tener roles distintos en cada sucursal.', icon: 'users' },
  { title: 'Auditoría de cambios', text: 'Registro de quién cambió qué en finanzas, productos, roles y operaciones.', icon: 'history' },
  { title: 'Acceso seguro', text: 'Inicio de sesión con verificación en dos pasos y sesiones por dispositivo.', icon: 'key' },
  { title: 'Conexión cifrada', text: 'La información viaja cifrada entre tu navegador y GO Admin.', icon: 'shield' },
  { title: 'Respaldos', text: 'Copias de seguridad de la base de datos para recuperar la información.', icon: 'database' },
]

export default function SeguridadPage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/seguridad" />
      <main id="contenido">
        <PageHero eyebrow="Seguridad" title="Tu información, en buenas manos." subtitle="Cómo protegemos los datos de tu negocio y cómo decides quién ve qué." />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <FeatureGrid items={CONTROLS} />
        </Section>
        <FaqSection
          tone="white"
          items={[
            { q: '¿Quién puede ver la información de mi negocio?', a: 'Solo los usuarios de tu organización, según los permisos de su rol. El equipo de soporte accede únicamente cuando lo solicitas para resolver un caso.' },
            { q: '¿Puedo descargar mi información?', a: 'Sí. Los reportes se exportan a Excel y PDF, y puedes solicitar la entrega de tus datos.' },
            { q: '¿Cómo solicito eliminar mis datos?', a: 'Sigue el proceso descrito en la página de eliminación de datos.' },
          ]}
        />
        <CtaBand title="¿Tienes una pregunta de seguridad?" text="Escríbenos y te respondemos con el detalle técnico que necesites." cta="Contactar" href="/contacto" />
      </main>
      <SiteFooter />
    </>
  )
}
