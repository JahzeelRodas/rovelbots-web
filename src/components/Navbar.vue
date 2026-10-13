<script setup>
import { ref } from 'vue'
import logoUrl from '../assets/rovelbot.png'

const open = ref(false)
// Estructura propia (no el molde agencia): Diagnóstico → Servicios → Casos → Ingeniero → Proceso.
const links = [
  { label: '¿Te pasa?', href: '#diagnostico' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#proyectos' },
  { label: 'El ingeniero', href: '#ingeniero' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="flex items-center justify-center gap-2 bg-carbon px-4 py-1.5 font-mono text-[10.5px] tracking-[0.08em] text-steel">
      <span class="status-dot h-1.5 w-1.5 rounded-full bg-brand"></span>
      <span class="tnum">12 DE 12 SISTEMAS FUNCIONANDO · RESPONDEMOS EN MENOS DE 24 HORAS</span>
    </div>

    <div class="border-b border-line bg-void/85 backdrop-blur-xl">
      <nav class="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-5">
        <a href="#inicio" class="flex items-center gap-3">
          <span class="rounded-md bg-white px-2 py-1 leading-none">
            <img :src="logoUrl" alt="ROVELBOTS" class="h-8 w-auto" />
          </span>
          <span class="leading-none">
            <span class="block text-[15px] font-bold tracking-tight text-white">ROVELBOTS</span>
            <span class="mt-0.5 block font-mono text-[9.5px] tracking-[0.22em] text-steel">INGENIERÍA DE SOFTWARE</span>
          </span>
        </a>

        <div class="hidden items-center gap-1 md:flex">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="rounded-md px-3 py-1.5 text-[13.5px] text-steel transition hover:bg-white/[0.06] hover:text-white"
          >{{ l.label }}</a>
          <a href="#contacto" class="ml-2 rounded-md bg-brand px-4 py-2 text-[13.5px] font-semibold text-[#06130c] transition hover:bg-brand-light">
            Pedir cotización
          </a>
        </div>

        <button
          class="rounded-md border border-line px-2.5 py-1.5 text-[13px] text-steel md:hidden"
          @click="open = !open"
          aria-label="Abrir menú"
        >{{ open ? '✕' : '☰' }}</button>
      </nav>

      <div v-if="open" class="border-t border-line bg-void px-5 py-3 md:hidden">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false" class="block py-2 text-[14px] text-steel">{{ l.label }}</a>
        <a href="#contacto" @click="open = false" class="mt-2 block rounded-md bg-brand px-4 py-2.5 text-center text-[14px] font-semibold text-[#06130c]">Pedir cotización</a>
      </div>
    </div>
  </header>
</template>
