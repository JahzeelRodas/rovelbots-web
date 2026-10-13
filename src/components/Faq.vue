<script setup>
import { ref } from 'vue'

// Recortadas: el detalle ya vive en Servicios/Proceso; aquí solo la respuesta directa.
const faqs = [
  { q: '¿Cuánto cuesta un sistema?', a: 'Precio cerrado por escrito antes de empezar. Te lo cotizamos en una llamada de 30 minutos, sin compromiso. Y si tu caso se resuelve con algo más simple, te lo diremos.' },
  { q: '¿Cuánto tarda?', a: 'La primera versión útil, unos 45 días. Después avanzamos por partes cada 15 días para que la uses mientras la terminamos.' },
  { q: '¿La información y el sistema son míos?', a: 'Sí, al 100%: accesos, información, respaldos y videos quedan a tu nombre, documentados.' },
  { q: '¿Qué pasa si algo falla?', a: 'Respondemos el mismo día. Tenemos copia diaria de tu información y los primeros 60 días después de entregar están cubiertos sin costo.' },
  { q: 'No sé nada de tecnología, ¿puedo contratarlos?', a: 'La mayoría de nuestros clientes tampoco. Hablamos claro, te mostramos muestras antes de decidir y capacitamos a tu equipo con videos cortos.' },
]

const openIdx = ref(0)
function toggle(i) {
  openIdx.value = openIdx.value === i ? -1 : i
}
</script>

<template>
  <section id="preguntas" class="scroll-mt-24 border-t border-line bg-carbon/40">
    <div class="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <p class="text-center font-mono text-[11px] tracking-[0.24em] text-brand-light">04 — PREGUNTAS FRECUENTES</p>
      <h2 class="mt-3 text-center text-[28px] font-bold tracking-[-0.02em] text-white md:text-[34px]">
        Lo que todos preguntan antes de escribirnos
      </h2>

      <div class="mt-8 divide-y divide-line overflow-hidden rounded-xl border border-line bg-void">
        <div v-for="(f, i) in faqs" :key="f.q">
          <button @click="toggle(i)" class="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-white/[0.02]">
            <span class="text-[15px] font-semibold text-white">{{ f.q }}</span>
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line font-mono text-[14px] text-brand-light">{{ openIdx === i ? '−' : '+' }}</span>
          </button>
          <p v-if="openIdx === i" class="px-6 pb-5 text-[14px] leading-relaxed text-steel">{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
