<script setup>
// Casos reales desde Hoja de Vida Julio 2026 (public/) + ficha Notaría 11.
// REGLA: cero métricas inventadas, cero citas inventadas. Solo hechos
// verificables; la referencia directa se pide por contacto.
// Diseño: 3 tarjetas uniformes, misma altura, mismo espacio.
const cases_ = [
  {
    tags: 'EVENTO · REGISTRO + QR',
    who: 'Comisión de Asuntos Americanos · Santa Cruz',
    title: 'Acreditación sin filas para un congreso internacional',
    story:
      'Portal y sistema de registros para la 115.ª Sesión Plenaria y Congreso Internacional del Notariado (12–16 de mayo): inscripción en línea, ingreso con código QR y certificados automáticos.',
    result: 'Santa Cruz · 12–16 de mayo',
  },
  {
    tags: 'SISTEMA · KIOSKO + PANEL',
    who: 'Notaría No. 11',
    title: 'Lo que opina cada visitante, visible al momento',
    story:
      'Pantalla táctil de 1 toque (Malo · Regular · Excelente) en oficinas, conectada a un panel privado donde el equipo ve la satisfacción al instante y recibe avisos por WhatsApp.',
    result: 'Mide cada atención · siempre disponible',
  },
  {
    tags: 'WEB · PORTAL INSTITUCIONAL',
    who: 'Asociación Nacional de Notarios · 2025–2026',
    title: 'Una institución con presencia seria en internet',
    story:
      'Diseño y desarrollo de su portal institucional: información oficial clara, siempre disponible y fácil de mantener para su equipo.',
    result: 'Portal institucional en producción',
  },
]
</script>

<template>
  <section id="proyectos" class="scroll-mt-24 border-t border-line">
    <div class="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <p class="font-mono text-[11px] tracking-[0.24em] text-brand-light">02 — CASOS REALES</p>
      <div class="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h2 class="max-w-md text-[30px] font-bold tracking-[-0.02em] text-white md:text-[40px]">Historias con respaldo real</h2>
        <a href="#contacto" class="text-[13.5px] font-medium text-brand-light hover:text-white">Tu historia puede ser la siguiente →</a>
      </div>

      <div class="mt-10 grid items-stretch gap-4 md:grid-cols-3">
        <article v-for="c in cases_" :key="c.title" class="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-carbon transition hover:border-brand/50">
          <div class="bg-brand/[0.08] px-7 pb-5 pt-6">
            <p class="font-mono text-[10.5px] tracking-[0.18em] text-brand-light">{{ c.tags }}</p>
            <h3 class="mt-2 min-h-[3.5rem] text-[19px] font-bold leading-snug tracking-tight text-white">{{ c.title }}</h3>
          </div>
          <div class="flex flex-1 flex-col p-7 pt-5">
            <p class="font-mono text-[11px] text-steel">{{ c.who.toUpperCase() }}</p>
            <p class="mt-2 flex-1 text-[14px] leading-relaxed text-steel">{{ c.story }}</p>
            <p class="tnum mt-4 rounded-lg bg-brand/10 px-3 py-2.5 text-center font-mono text-[13px] font-semibold text-brand-light">{{ c.result }}</p>
          </div>
        </article>
      </div>
      <p class="mt-6 text-center font-mono text-[11px] text-steel/70">PIDE REFERENCIAS DIRECTAS DE ESTOS CASOS · <a href="#contacto" class="text-brand-light hover:text-white">CONTACTO →</a></p>
    </div>
  </section>
</template>
