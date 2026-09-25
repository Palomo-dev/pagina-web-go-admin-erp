# Guía de traducción del sitio GO Admin

Idiomas: español (fuente), inglés (`en`), portugués de Brasil (`pt`) y francés (`fr`), los mismos
del ERP. El país del mercado cambia los datos fiscales; el idioma cambia el texto.

## Reglas

1. **Misma estructura.** Mismas claves, mismo orden y misma cantidad de elementos en cada lista
   que el español. No agregues ni quites elementos.
2. **Variables intactas.** Todo lo que está entre llaves se copia igual: `{theAuthority}`,
   `{authority}`, `{taxes}`, `{taxId}`, `{invoicing}`, `{einvoice}`, `{docId}`, `{chart}`,
   `{country}`, `{inCountry}`, `{einvoiceNote}`, `{gateways}`, `{name}`, `{n}`, `{price}`…
   Los valores ya llegan en el idioma correcto (p. ej. `{inCountry}` = "in Mexico" / "au Mexique").
3. **ICU `select`.** En `{status, select, integrated {…} other {…}}` traduce solo el texto dentro
   de cada rama; no cambies `status`, `select`, `integrated`, `other`, `planCurrency`, `COP`,
   `ePayroll`, `yes`.
4. **Voz de marca.** Directa, cercana y precisa. Sin emojis. Sin cifras de resultados.
   - en: "you", frases cortas.
   - pt: português do Brasil, "você".
   - fr: français, vouvoiement ("vous").
5. **No inventes promesas.** No afirmes soporte en un idioma distinto del español, ni
   certificaciones, ni integraciones con autoridades fiscales fuera de lo que ya dice el texto.
   Donde el español dice "soporte en español" o "hablan tu idioma", usa una frase neutra
   (p. ej. "support by WhatsApp and email").
6. **Nombres propios.** GO Admin, DIAN, WhatsApp Business, Booking.com, nombres de pasarelas,
   ciudades y nombres de personas no se traducen. Los productos del ejemplo (bandeja paisa, pan de
   bono…) se cambian por equivalentes comprensibles en el idioma (p. ej. "Cheese bread x 6").
7. **Textos legales.** Traducción fiel, sin agregar ni quitar obligaciones; la versión en español
   es la que rige y el sitio lo indica.
