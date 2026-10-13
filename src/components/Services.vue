<script setup>
const stages = [
  {
    stage: 'ETAPA 1 — ORDENAR',
    title: 'Pon tu casa en orden',
    desc: 'Si todo está en Excel, WhatsApp y cuadernos, empezamos aquí.',
    items: [
      { t: 'Sistema de inventario y ventas', d: 'Todo en un solo lugar, con salidas por sucursal y corte diario.' },
      { t: 'Clientes y reportes', d: 'Quién te compra, cuánto te debe y qué se vende más, sin buscar en 4 lados.' },
    ],
  },
  {
    stage: 'ETAPA 2 — CRECER',
    title: 'Piensa en grande',
    desc: 'Cuando la operación ya ordena, toca vender más y verte profesional.',
    items: [
      { t: 'Página web que vende', d: 'Rápida, aparece en Google y la actualizas tú sin programar.' },
      { t: 'Accesos por puesto', d: 'Cada persona ve solo lo suyo; lo importante queda registrado.' },
    ],
  },
  {
    stage: 'ETAPA 3 — CUIDAR',
    title: 'Que nada se pierda',
    desc: 'Copias diarias, soporte de años y todo a tu nombre.',
    items: [
      { t: 'Respaldo y recuperación', d: 'Copias diarias que probamos contigo. Si algo pasa, lo recuperamos.' },
      { t: 'Soporte que responde', d: 'El mismo día, por una persona que conoce tu sistema.' },
    ],
  },
]
</script>

<template>
  <section id="servicios" class="scroll-mt-24 border-t border-line bg-carbon/40">
    <div class="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <p class="font-mono text-[11px] tracking-[0.24em] text-brand-light">01 — SERVICIOS POR ETAPA</p>
      <div class="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h2 class="max-w-md text-[30px] font-bold tracking-[-0.02em] text-white md:text-[40px]">Dime dónde estás y te digo qué sigue</h2>
        <p class="max-w-sm text-[14.5px] leading-relaxed text-steel">
          Tres etapas por las que pasan nuestros clientes. Sin palabras raras, sin tecnología de moda.
        </p>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <article v-for="s in stages" :key="s.stage" class="rounded-xl border border-line bg-void p-7 transition hover:border-brand/50">
          <p class="font-mono text-[11px] tracking-[0.2em] text-brand-light">{{ s.stage }}</p>
          <h3 class="mt-2 text-[22px] font-bold tracking-tight text-white">{{ s.title }}</h3>
          <p class="mt-1.5 text-[13.5px] text-steel">{{ s.desc }}</p>
          <ul class="mt-5 space-y-4 border-t border-line pt-5">
            <li v-for="i in s.items" :key="i.t">
              <p class="text-[14.5px] font-semibold text-white">{{ i.t }}</p>
              <p class="mt-0.5 text-[13.5px] leading-relaxed text-steel">{{ i.d }}</p>
            </li>
          </ul>
        </article>
      </div>

      <!-- Antes 2 tarjetas de modelos + sección "Cómo funciona" completa: ahora 2 líneas. -->
      <div class="mt-6 rounded-xl border border-line bg-void p-6 text-[14px] leading-relaxed text-steel md:flex md:items-center md:justify-between md:gap-6">
        <p><strong class="text-white">¿Cómo se contrata?</strong> Proyecto con precio fijo por escrito — o acompañamiento mensual cuando ya operas con nosotros.</p>
        <p class="mt-3 shrink-0 md:mt-0"><strong class="text-white">¿Y si se va el internet?</strong> Nada se pierde: se guarda y se sube solo al volver la señal.</p>
      </div>
      <p class="mt-5 text-center text-[13.5px] text-steel">¿No sabes en qué etapa estás? <a href="#contacto" class="font-semibold text-brand-light hover:text-white">Lo ubicamos juntos en 30 minutos →</a></p>
    </div>
  </section>
</template>
