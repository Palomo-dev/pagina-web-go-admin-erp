# Genera las variantes de color de cada ilustración a partir de las plantillas *.tpl.svg
import glob, os
OUT = os.path.join(os.path.dirname(__file__), '../../public/illustrations/')
VARIANTS = {
    '':         {'ACCENT': '#4361EE', 'LEAF': '#EEF1FE', 'BLUSH': '#AFC0FB'},
    '-on-blue': {'ACCENT': '#2A3EA8', 'LEAF': '#EEF1FE', 'BLUSH': '#AFC0FB'},
    '-on-ink':  {'ACCENT': '#4361EE', 'LEAF': '#2A3EA8', 'BLUSH': '#6A82F1', '#FFFFFF': '__PAPER__', '#0F172A': '#E3E8FF', '__PAPER__': '#1B2540'},
}
os.chdir(os.path.dirname(os.path.abspath(__file__)))
for f in glob.glob('*.tpl.svg'):
    base = f.replace('.tpl.svg', '')
    for suf, m in VARIANTS.items():
        s = open(f).read()
        for k, v in m.items():
            s = s.replace(k, v)
        open(OUT + base + suf + '.svg', 'w').write(s)
print('ok')
