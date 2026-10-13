<script setup>
import logoUrl from '../assets/rovelbot.png'
</script>

<template>
  <!-- CTA grande eliminado: el formulario de Contacto está justo arriba; duplicarlo frena en vez de empujar. -->
  <footer class="border-t border-line bg-void">
    <div class="mx-auto max-w-6xl px-5 py-14">
      <div class="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p class="flex items-center gap-3">
            <span class="rounded-md bg-white px-2 py-1 leading-none">
              <img :src="logoUrl" alt="ROVELBOTS" class="h-8 w-auto" />
            </span>
            <a href="#inicio" class="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-steel">
              <span class="status-dot h-1.5 w-1.5 rounded-full bg-brand"></span> Todo funcionando
            </a>
          </p>
          <a href="#contacto" class="mt-5 inline-block rounded-lg bg-brand px-5 py-2.5 text-[14px] font-semibold text-[#06130c] transition hover:bg-brand-light">
            Pedir cotización →
          </a>
        </div>
        <div>
          <p class="font-mono text-[11px] tracking-[0.22em] text-steel">SERVICIOS</p>
          <ul class="mt-4 space-y-2.5 text-[14px] text-steel">
            <li><a href="#servicios" class="hover:text-white">Ordenar tu operación</a></li>
            <li><a href="#servicios" class="hover:text-white">Página web</a></li>
            <li><a href="#servicios" class="hover:text-white">Respaldo y soporte</a></li>
          </ul>
        </div>
        <div>
          <p class="font-mono text-[11px] tracking-[0.22em] text-steel">EMPRESA</p>
          <ul class="mt-4 space-y-2.5 text-[14px] text-steel">
            <li><a href="#proceso" class="hover:text-white">Cómo trabajamos</a></li>
            <li><a href="#proyectos" class="hover:text-white">Casos de éxito</a></li>
            <li><a href="#preguntas" class="hover:text-white">Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div>
          <p class="font-mono text-[11px] tracking-[0.22em] text-steel">CONFIANZA</p>
          <p class="tnum mt-4 text-[13.5px] leading-relaxed text-steel">
            12 de 12 sistemas funcionando.<br />Respuesta en menos de 24 horas.<br />Tú eres dueño de todo.
          </p>
        </div>
      </div>
      <p class="tnum mt-12 border-t border-line pt-6 font-mono text-[11px] text-steel/60">© 2026 ROVELBOTS · HECHO A MANO, SIN PLANTILLAS</p>
    </div>
  </footer>
</template>
