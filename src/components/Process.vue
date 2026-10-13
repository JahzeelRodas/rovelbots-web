<script setup>
// Compactado: el entregable va dentro de la descripción (antes ocupaba una pastilla por paso).
const steps = [
  { n: 'Paso 1', t: 'Te escuchamos', when: '', d: 'Plática de 30 minutos. Vemos cómo trabajas hoy y te damos precio cerrado por escrito.' },
  { n: 'Paso 2', t: 'Te mostramos el dibujo', when: '', d: 'Muestra que puedes tocar antes del código. Aquí se vale cambiar todo.' },
  { n: 'Paso 3', t: 'Avanzamos por partes', when: '', d: 'Cada quincena usas una parte funcionando y nos dices qué ajustar.' },
  { n: 'Paso 4', t: 'Lo ponemos en línea', when: '', d: 'Publicamos, capacitamos con videos cortos y pulimos 60 días sin costo.' },
]
</script>

<template>
  <section id="proceso" class="scroll-mt-24 border-t-2 border-ink bg-paper text-ink">
    <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-mono text-[11px] tracking-[0.24em] text-brand-dark">03 — CÓMO VAMOS A TRABAJAR</p>
        <h2 class="mt-3 text-[30px] font-bold tracking-[-0.02em] md:text-[38px]">Nuestro proceso de trabajo</h2>
        <p class="mt-2 text-[15px] text-ink-soft">Fechas claras y cosas que puedes ver en pocos días. Solo te pedimos una persona para coordinar y que responda en menos de 48 horas.</p>
      </div>

      <ol class="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-4">
        <li v-for="s in steps" :key="s.n" class="rounded-xl border border-paper-line bg-white/60 p-5">
          <p class="font-mono text-[11px] tracking-[0.14em] text-ink-soft">{{ s.n.toUpperCase() }} · {{ s.when.toUpperCase() }}</p>
          <h3 class="mt-2 text-[17px] font-bold tracking-tight">{{ s.t }}</h3>
          <p class="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{{ s.d }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
