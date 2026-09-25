import type { Config } from 'tailwindcss'

// Tokens del sistema de diseño del sitio (Figma: "GO Admin — Sitio web" › 01 Sistema).
// Los nombres siguen las variables de Figma: brand/*, text/*, bg/*, night/*.
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2.5rem', lg: '2rem' },
      screens: { '2xl': '1264px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Marca (Manual v2.0)
        go: {
          DEFAULT: '#4361EE', // Azul GO · identidad
          action: '#3651D4', // Azul acción · botón principal
          deep: '#2A3EA8', // Azul profundo · enlaces
          tint: '#EEF1FE', // Tinte GO · superficies
          wash: '#F8FAFF', // Fondo suave
          25: '#F8FAFF',
          50: '#EEF1FE',
          100: '#DCE2FC',
          200: '#B9C5F9',
          300: '#8FA3F5',
          400: '#6A82F1',
          500: '#4361EE',
          600: '#3651D4',
          700: '#2A3EA8',
          800: '#1F2E7D',
          900: '#151F54',
        },
        // Las páginas heredadas usan la escala `blue` de Tailwind: se reemplaza por la escala GO.
        blue: {
          50: '#EEF1FE',
          100: '#DCE2FC',
          200: '#B9C5F9',
          300: '#8FA3F5',
          400: '#6A82F1',
          500: '#4361EE',
          600: '#3651D4',
          700: '#2A3EA8',
          800: '#1F2E7D',
          900: '#151F54',
          950: '#0E1640',
        },
        ink: {
          DEFAULT: '#0F172A', // Tinta · titulares
          body: '#475569', // Pizarra · lectura
          muted: '#64748B',
          line: '#E2E8F0',
        },
        night: {
          900: '#0B1024',
          800: '#121A36',
          700: '#1B2540',
          line: '#E3E8FF',
        },
        // Colores funcionales
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        info: '#0EA5E9',
        // Mapeo shadcn/ui (usado por páginas heredadas)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontSize: {
        // Escala tipográfica (estilos de texto de Figma)
        'display-xl': ['4.5rem', { lineHeight: '1.04', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-l': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-m': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        h2: ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        h3: ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.005em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(15,23,42,0.06)',
        md: '0 4px 12px -2px rgba(15,23,42,0.08), 0 2px 4px -1px rgba(15,23,42,0.04)',
        lg: '0 16px 40px -8px rgba(15,23,42,0.14)',
        float: '0 24px 64px -12px rgba(42,62,168,0.28)',
        action: '0 8px 20px -6px rgba(54,81,212,0.45)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.2,.8,.2,1)',
        'in-out': 'cubic-bezier(.65,0,.35,1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '320ms',
        slow: '480ms',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.24s cubic-bezier(.2,.8,.2,1)',
        'accordion-up': 'accordion-up 0.24s cubic-bezier(.2,.8,.2,1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
