# Convierte las plantillas *.tpl.svg en componentes React (components/illustrations/art.tsx).
# Colores: ACCENT, LEAF, BLUSH, #FFFFFF (papel) y #0F172A (línea) pasan a la paleta del tono.
import re, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
NAMES = {'traveler': 'Traveler', 'traveler-sitting': 'TravelerSitting', 'rocket': 'Rocket', 'planet': 'Planet', 'moon': 'Moon', 'star': 'Star'}
CLASS = {'scarf-tail': {'traveler': 'go-scarf', 'traveler-sitting': 'go-scarf-left'}, 'sprout': 'go-sprout', 'flame': 'go-flame'}
def camel(a): return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), a)
out = ["// Archivo generado por design/illustrations-src/to_tsx.py — no editar a mano.",
       "// Ilustraciones originales del viajero GO (inspiradas en El Principito, dibujo propio).",
       "import type { SVGProps } from 'react'",
       "import { palette, type Tone } from './palette'",
       "",
       "type ArtProps = SVGProps<SVGSVGElement> & { tone?: Tone; title?: string; animated?: boolean }",
       ""]
for key, comp in NAMES.items():
    s = open(key + '.tpl.svg').read()
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    vb = re.search(r'viewBox="([^"]+)"', s).group(1)
    inner = re.sub(r'^.*?<svg[^>]*>', '', s, flags=re.S).rsplit('</svg>', 1)[0]
    # ids -> className hooks
    def idrep(m):
        i = m.group(1)
        c = CLASS.get(i)
        if isinstance(c, dict): c = c.get(key)
        return f'className={{animated ? "{c}" : undefined}}' if c else ''
    inner = re.sub(r'id="([^"]+)"', idrep, inner)
    inner = re.sub(r'\s([a-z]+(?:-[a-z]+)+)=', lambda m: ' ' + camel(m.group(1)) + '=', inner)
    for tok, prop in [('ACCENT', 'accent'), ('LEAF', 'leaf'), ('BLUSH', 'blush'), ('#FFFFFF', 'paper'), ('#0F172A', 'line')]:
        inner = inner.replace(f'"{tok}"', '{c.' + prop + '}')
    inner = re.sub(r'\n\s*\n', '\n', inner).strip()
    inner = '\n'.join('      ' + l.strip() for l in inner.split('\n') if l.strip())
    out.append(f"export function {comp}({{ tone = 'light', title, animated = true, ...props }}: ArtProps) {{")
    out.append("  const c = palette[tone]")
    out.append("  return (")
    out.append(f'    <svg viewBox="{vb}" fill="none" strokeLinecap="round" strokeLinejoin="round" role={{title ? "img" : undefined}} aria-hidden={{title ? undefined : true}} {{...props}}>')
    out.append("      {title ? <title>{title}</title> : null}")
    out.append(inner)
    out.append("    </svg>")
    out.append("  )")
    out.append("}")
    out.append("")
open('../../components/illustrations/art.tsx', 'w').write('\n'.join(out))
print('ok')
