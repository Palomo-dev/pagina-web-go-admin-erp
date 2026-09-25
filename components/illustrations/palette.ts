// Paletas de las ilustraciones según el fondo (Figma › Ilustración/* › Fondo=Claro|Azul|Tinta).
export type Tone = 'light' | 'blue' | 'ink'

export const palette: Record<Tone, { accent: string; leaf: string; blush: string; paper: string; line: string }> = {
  // Sobre blanco o fondo suave
  light: { accent: '#4361EE', leaf: '#EEF1FE', blush: '#AFC0FB', paper: '#FFFFFF', line: '#0F172A' },
  // Sobre el cielo Azul GO: el acento baja a Azul profundo para no desaparecer
  blue: { accent: '#2A3EA8', leaf: '#EEF1FE', blush: '#AFC0FB', paper: '#FFFFFF', line: '#0F172A' },
  // Sobre la noche: línea clara y relleno oscuro
  ink: { accent: '#4361EE', leaf: '#2A3EA8', blush: '#6A82F1', paper: '#1B2540', line: '#E3E8FF' },
}
