# ROVELBOTS — AGENTS.md

> Contexto permanente para agentes IA y desarrolladores en este repositorio.

## 1. Identidad corporativa

**ROVELBOTS** es una marca de **ingeniería de software y desarrollo de sistemas a medida** (enfoque 100% software empresarial).

- **Misión:** digitalizar operaciones empresariales mediante sistemas backend robustos, portales web corporativos y soluciones digitales escalables.
- **Propuesta de valor:** del requerimiento al despliegue — análisis funcional, arquitectura, desarrollo, build de producción y mantenimiento.
- **Tono visual:** moderno, ejecutivo, limpio y de alta tecnología. Fondos oscuros elegantes (`#060907`, `#0b0f0c`), acentos verde lima profesional (`lime-300 #bef264`).

### Lo que SÍ hacemos

1. Sistemas de software a medida (gestión, inventarios, clientes, reportes).
2. Arquitectura backend y APIs REST (Node.js, Java Spring Boot, JWT, roles).
3. Portales web corporativos / institucionales y paneles administrables (Vue 3).
4. Modelado de bases de datos relacionales (PostgreSQL / MySQL).
5. Despliegue y mantenimiento (build estático, Docker, Hostinger / VPS).

### Lo que NO hacemos en este sitio

No robótica educativa, no hardware libre, no producción de video. Todo el
contenido del sitio debe hablar de software, backend, portales y negocio.

## 2. Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | Vue 3 (Composition API `<script setup>`), Vite 8 |
| Estilos | Tailwind CSS v4 (plugin `@tailwindcss/vite`, `@import "tailwindcss"` en `src/style.css`, tokens en `@theme`) |
| Lenguaje | JavaScript ES Modules (`type: module`) |
| Backend ref. | Node.js (Express/Fastify), Java Spring Boot, PostgreSQL/MySQL |
| Despliegue | Estático: `npm run build` → `dist/` → subir a Hostinger `public_html` |

## 3. Estructura del proyecto

```
RovelbotsWeb/
├── index.html            # lang="es", título SEO ROVELBOTS
├── vite.config.js        # plugins vue + tailwindcss, base './', outDir dist
├── package.json          # scripts dev / build / preview
├── AGENTS.md             # este archivo
├── public/
│   ├── favicon.svg         # favicon chip de marca (verde + navy)
│   └── rovelbot.png        # logo oficial (origen; se empaqueta desde src/assets)
└── src/
    ├── main.js           # createApp(App).mount('#app')
    ├── style.css         # Tailwind v4 + tema oscuro lima
    ├── App.vue           # ensambla secciones
    ├── assets/
    │   └── rovelbot.png  # logo empaquetado por Vite (import en Navbar/Hero/Footer)
    └── components/  # estructura propia (NO el molde agencia): Diagnóstico → Servicios → Casos → Ingeniero → Proceso
        ├── Navbar.vue    # nav + barra confianza + CTA. Links: ¿Te pasa?/Servicios/Casos/El ingeniero
        ├── Hero.vue      # propuesta + 3 promesas + tarjeta + mini-métrica → Casos + muro + firma del ingeniero
        ├── Sintomas.vue  # DIAGNÓSTICO interactivo: checklist de dolores con veredicto (id: diagnostico)
        ├── Services.vue  # 3 etapas + contratación e internet en 2 líneas
        ├── Portfolio.vue # 3 casos con etiqueta + cita + métrica — ÚNICA prueba con voz de cliente
        ├── Fundador.vue  # CARTA del Ing. Jahzeel Issac Rodas + sello JIR + link jahzeelrodas.com (id: ingeniero)
        ├── Process.vue   # 4 pasos compactos (id: proceso)
        ├── Faq.vue       # acordeón 5 respuestas cortas (id: preguntas)
        ├── Contact.vue   # formulario + qué-pasa-después 1-2-3, atención directa del ingeniero
        └── Footer.vue    # columnas + CTA pequeño + crédito al fundador con enlace
```

## 4. Marca y tema visual — Fusión ejecutiva sólida y clara (2026)

- Logo PNG (`public/rovelbot.png`) DE VUELTA como señal de confianza para empresas no técnicas. **Siempre sobre pastilla blanca** (`bg-white`) en Navbar/Hero/Footer. Importado desde `src/assets/rovelbot.png`; copia en `public/` como `og:image`.
- Fusión de las 5 temáticas en una sola línea seria: trato directo de firma boutique (samurái) + entregas medibles por etapas (F1) + estabilidad comprobada 12/12 y 2+ años (Linux LTS) + alcance escrito y criterios claros (NASA) + limpieza hairline y jerarquía Linear. Nada de tarjetas neón ni gradientes de IA: un solo resplandor sutil + grano finísimo.
- Tokens Tailwind v4 en `src/style.css`: `void/carbon/panel/line` (tinta ejecutiva), `brand/brand-light/brand-dark` (único acento = CTAs + OK), `steel` (texto secundario), `paper/paper-line/ink` (solo sección proceso como documento claro). Utilidades: `grain`, `status-dot`, `tnum`.
- Tipografías: `Inter` para todo, `JetBrains Mono` solo para etiquetas de confianza y cifras.
- REGLA DE COPY (obligatoria): cero tecnicismo sin traducir. Prohibido en texto visible: p95, JWT, deploy, rollback, dist/, SEO sin explicar, MVP sin explicar. Decir en su lugar: "menos de un segundo", "cada persona ve solo lo que le toca", "poner en línea sin detenerte", "apareces en Google", "primera versión útil". Ids: inicio, servicios, proceso, proyectos, preguntas, contacto. Tono: firma seria que habla como colega, beneficios primero, números reales. Prohibido "taller" en texto visible: usar "firma / firma de ingeniería de software".
- REGLA DE IDENTIDAD (obligatoria): Rovelbots NO es una agencia genérica: es la firma del Ing. Jahzeel Issac Rodas. Su nombre aparece enlazado a https://www.jahzeelrodas.com (target _blank) en: Hero (línea bajo CTAs), Fundador (3 menciones: sello, carta, botón), Contacto (quién atiende) y Footer (crédito). Escribir siempre "Ing. Jahzeel Issac Rodas". Firma manuscrita solo con `font-hand` (Caveat) en Fundador.
- REGLA ANTI-REDUNDANCIA (oct-2026): la página se lee en ~2 min. Cada dato vive UNA vez: la prueba con cita solo en Casos (hero lleva solo mini-métrica con enlace), el proceso solo en Proceso (contacto solo el 1-2-3 de qué sigue), contratación e internet en 2 líneas dentro de Servicios (sin sección propia), sin CTA grande en footer (el formulario está justo arriba). Eliminadas: Architecture.vue, Testimonials.vue. Antes de agregar una sección, justificar qué dato nuevo aporta.
- Benchmark vNext (oct-2026, fuentes verificadas por fetch): Thoughtbot (caso destacado con cita + muro de clientes + servicios por etapa + playbook), 10up (hero de trabajo + muro de logos + carrusel de testimonios con cargo + CTA final), DockYard (por qué nosotros + tarjetas con tags + logos Apple/Netflix + recursos), Linear (hero con producto + 3 pilares + changelog + citas con rol/empresa + status). Aplicado: caso destacado en Hero, muro de giros, etapas 1-2-3 + modelos de contratación, testimonios con cargo, FAQ de objeciones, contacto con 1-2-3, CTA final grande en Footer. Citas con nombre son placeholders honestos: pedir referencias directas en llamada.

## 5. Convenciones de código

- Componentes Vue 3 con `<script setup>`, datos mock en `const` dentro del componente.
- Tailwind utilitario; colores corporativos: `bg-void`, `bg-carbon`, `bg-panel`, `border-line`, `text-brand`, `bg-brand`, `hover:bg-brand-light`, `text-navy` (solo sobre claro).
- Secciones con `id` de ancla: `inicio, servicios, arquitectura, proceso, proyectos, contacto`.
- Español comercial, orientado a beneficios empresariales (no jerga maker).
- No agregar dependencias sin justificación; preferir CSS/Tailwind nativo.
- Prohibido reintroducir contenidos de robótica/hardware/video.

## 5. Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo local (http://localhost:5173)
npm run build      # build producción → dist/
npm run preview    # previsualizar dist localmente
```

Despliegue Hostinger: subir el **contenido de `dist/`** a `public_html/`
(por `base: './'` las rutas de assets son relativas y funcionan en raíz o subcarpeta).

## 6. Roadmap sugerido

- [x] Conectar `Contact.vue` a recepción real: FormSubmit AJAX → `contacto@rovelbots.com` (asunto con nombre/empresa, plantilla tabla, `_replyto` al correo del visitante, trampa `_honey` anti-spam, mensaje de error con `mailto:` de respaldo).
- [ ] Página de detalle por servicio + casos de éxito con métricas.
- [ ] Blog técnico / SEO corporativo.
- [ ] i18n ES/EN, modo claro ejecutivo opcional.
