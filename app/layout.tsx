/**
 * El documento (<html>) vive en app/[locale]/layout.tsx para declarar el idioma de cada mercado.
 * Este layout raíz solo existe para que app/not-found.tsx funcione fuera de un mercado.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
