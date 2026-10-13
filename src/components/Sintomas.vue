<script setup>
import { computed, ref } from 'vue'

// Diagnóstico interactivo: la sección que ninguna plantilla trae.
// El visitante marca síntomas y la firma le dice qué sigue.
const symptoms = [
  'El inventario nunca cuadra y nadie sabe dónde se pierde.',
  'Tus ventas, clientes y gastos viven en 3 Excel distintos.',
  'Tu página tarda en cargar o tiene información vieja.',
  'Solo una persona sabe cómo funciona todo… y si falta, se frena.',
  'Cerrar los números del mes te toma días, a mano.',
  'Ya pagaste por un sistema que nadie usa.',
]

const checked = ref([])

const verdict = computed(() => {
  const n = checked.value.length
  if (n === 0) return 'Marca las que te suenen. Sin pena: aquí nadie juzga.'
  if (n <= 2) return 'Con 1–2 ya vale una plática de 30 minutos. A veces se resuelve con algo pequeño.'
  if (n <= 4) return 'Esto sí necesita un sistema. Hablemos esta semana.'
  return 'Urge. Escríbenos hoy mismo: esto te está costando dinero cada mes.'
})
</script>

<template>
  <section id="diagnostico" class="scroll-mt-24 border-t border-line bg-carbon/40">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
      <div>
        <p class="font-mono text-[11px] tracking-[0.24em] text-brand-light">ANTES DE EMPEZAR — DIAGNÓSTICO</p>
        <h2 class="mt-3 text-[30px] font-bold tracking-[-0.02em] text-white md:text-[38px]">¿Te suena algo de esto?</h2>
        <p class="mt-3 max-w-md text-[14.5px] leading-relaxed text-steel">
          No es un examen. Es la lista que nos repiten los dueños cuando nos contactan
          por primera vez. Marca las tuyas y te decimos honestamente qué sigue.
        </p>
        <div class="tnum mt-6 rounded-xl border border-line bg-void p-5">
          <p class="font-mono text-[11px] tracking-[0.2em] text-steel">RESULTADO · <span class="text-brand-light">{{ checked.length }}/{{ symptoms.length }}</span></p>
          <p class="mt-2 text-[15px] font-medium leading-relaxed text-white">{{ verdict }}</p>
          <a v-if="checked.length > 0" href="#contacto" class="mt-3 inline-block rounded-lg bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-[#06130c] transition hover:bg-brand-light">
            Contar mi caso →
          </a>
        </div>
      </div>

      <ul class="space-y-3">
        <li v-for="(s, i) in symptoms" :key="s">
          <label class="flex cursor-pointer items-start gap-3.5 rounded-xl border p-4 transition"
            :class="checked.includes(i) ? 'border-brand/60 bg-brand/[0.07]' : 'border-line bg-void hover:border-steel/50'">
            <input v-model="checked" :value="i" type="checkbox" class="mt-1 h-[18px] w-[18px] shrink-0 accent-[#4cbb84]" />
            <span class="text-[14.5px] leading-relaxed" :class="checked.includes(i) ? 'text-white' : 'text-steel'">{{ s }}</span>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>
