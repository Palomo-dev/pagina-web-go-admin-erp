/**
 * GO Admin para Windows (app de escritorio, repositorio go-admin-erp › electron/).
 *
 * Las versiones se publican en GitHub Releases del repositorio público Palomo-dev/go-admin-erp
 * (workflow desktop-release.yml al crear un tag vX.Y.Z). La página de descargas lee esa lista
 * cada hora (lib/data › listDesktopReleases) y usa DESKTOP_RELEASES si GitHub no responde.
 * Las notas son un resumen de los cambios de cada versión; al publicar una nueva, agrega aquí
 * su nota (en español; traducciones en content/{en,pt,fr}/company.ts › DESKTOP_NOTES).
 */
export const DESKTOP_REPO = 'Palomo-dev/go-admin-erp'
export const DESKTOP_RELEASES_URL = `https://github.com/${DESKTOP_REPO}/releases`
/** Enlace estable: siempre descarga la última versión (copia GoAdminERP-Setup.exe de cada release). */
export const DESKTOP_LATEST_URL = `${DESKTOP_RELEASES_URL}/latest/download/GoAdminERP-Setup.exe`

export type DesktopRelease = { version: string; date: string; sizeMb: number; url: string }

/** Instalador de cada versión: desde la 0.2.0 el archivo lleva la versión en el nombre. */
export function desktopAssetUrl(version: string) {
  const [maj, min] = version.split('.').map(Number)
  const file = maj > 0 || min >= 2 ? `GoAdminERP-Setup-${version}.exe` : 'GoAdminERP-Setup.exe'
  return `${DESKTOP_RELEASES_URL}/download/v${version}/${file}`
}

/** Versiones publicadas (respaldo si GitHub no responde). La v0.1.0 solo existió como etiqueta. */
export const DESKTOP_RELEASES: DesktopRelease[] = [
  { version: '0.2.6', date: '2026-09-22', sizeMb: 137 },
  { version: '0.2.5', date: '2026-09-21', sizeMb: 137 },
  { version: '0.2.4', date: '2026-09-21', sizeMb: 137 },
  { version: '0.2.3', date: '2026-09-21', sizeMb: 136 },
  { version: '0.2.2', date: '2026-09-21', sizeMb: 135 },
  { version: '0.2.1', date: '2026-09-16', sizeMb: 131 },
  { version: '0.2.0', date: '2026-09-16', sizeMb: 131 },
  { version: '0.1.2', date: '2026-08-15', sizeMb: 80 },
  { version: '0.1.1', date: '2026-08-03', sizeMb: 80 },
].map((r) => ({ ...r, url: desktopAssetUrl(r.version) }))

/** Qué cambió en cada versión (resumen del historial del repositorio). */
export const DESKTOP_NOTES: Record<string, string> = {
  '0.2.6': 'Pantalla para el cliente en un segundo monitor: muestra lo que vas cobrando, el total y el cambio.',
  '0.2.5': 'La pantalla del cliente recuerda en qué monitor se abre.',
  '0.2.4': 'Varios carritos a la vez y lector de códigos de barras en el POS. Llamadas desde el CRM.',
  '0.2.3': 'Instalador y pantallas con la marca GO Admin. El tema claro u oscuro sigue al de la aplicación.',
  '0.2.2': 'Cobro más seguro sin internet: la venta, el pago y la caja se guardan juntos. Más protección de la aplicación.',
  '0.2.1': 'Consulta de todos los módulos, clientes e imágenes sin internet. Primera versión de la pantalla del cliente.',
  '0.2.0': 'Vende sin internet: catálogo local, ventas en cola que se sincronizan al volver la conexión y ticket impreso sin red.',
  '0.1.2': 'Impresión más estable en impresoras USB y la misma impresora configurada en varias estaciones.',
  '0.1.1': 'Detección de impresoras USB y Bluetooth, y apertura del cajón de dinero al cobrar en efectivo.',
}
