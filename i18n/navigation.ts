import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/** Enlaces y navegación que conservan el mercado actual (idioma + país). */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
