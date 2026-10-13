<script setup>
import logoUrl from '../assets/rovelbot.png'

// Recortado de 4 a 3: "nos quedamos contigo" ya vive en stats (2+ años) y soporte.
const promises = [
  ['Alcance y precio por escrito', 'Lo que se firma es lo que se entrega. Sin sorpresas.'],
  ['Avances que puedes probar', 'Cada 10 días ves algo funcionando, no promesas.'],
  ['Tus datos a salvo', 'Copias diarias y todo queda en tus manos.'],
]

const wall = ['DISTRIBUIDORAS', 'DESPACHOS', 'INDUSTRIA', 'COMERCIO', 'SERVICIOS', 'LOGÍSTICA']
</script>

<template>
  <section id="inicio" class="grain relative overflow-hidden pt-[118px]">
    <div class="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[130px]" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-6xl px-5 pb-14 pt-10 md:pt-16">
      <div class="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-line bg-carbon px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-steel">
            <span class="status-dot h-1.5 w-1.5 rounded-full bg-brand"></span>
            DESARROLLO DE SISTEMAS · DESDE 2017
          </p>

          <h1 class="mt-6 max-w-xl text-[40px] font-bold leading-[1.04] tracking-[-0.025em] text-white md:text-[60px]">
            El sistema que ordena tu empresa. Sin enredos.
          </h1>

          <p class="mt-5 max-w-xl text-[16.5px] leading-relaxed text-steel">
            Hacemos sistemas a medida para inventarios, clientes y ventas;
            páginas web que te hacen ver grande; y nos quedamos años dando
            soporte. Hablamos claro: si algo no te conviene, te lo decimos.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" class="rounded-lg bg-brand px-6 py-3 text-[14.5px] font-semibold text-[#06130c] transition hover:bg-brand-light">
              Pedir cotización →
            </a>
            <a href="#diagnostico" class="rounded-lg border border-line px-6 py-3 text-[14.5px] font-medium text-white transition hover:bg-white/[0.05]">
              ¿Esto te está pasando?
            </a>
          </div>
          <p class="mt-4 text-[13.5px] text-steel">
            Dirección personal del
            <a href="https://www.jahzeelrodas.com" target="_blank" rel="noopener" class="font-semibold text-brand-light underline underline-offset-2 hover:text-white">Ing. Jahzeel Rodas F</a>.
          </p>

          <ul class="mt-9 max-w-xl divide-y divide-line border-y border-line">
            <li v-for="[t, d] in promises" :key="t" class="flex gap-3 py-3.5">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/15 text-[12px] font-bold text-brand-light">✓</span>
              <p class="text-[14px] leading-snug"><strong class="font-semibold text-white">{{ t }}.</strong>
              <span class="text-steel"> {{ d }}</span></p>
            </li>
          </ul>
        </div>

        <aside class="lg:pt-2">
          <figure class="rounded-xl border border-line bg-carbon p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-7">
            <span class="inline-block rounded-md bg-white px-3 py-2 leading-none">
              <img :src="logoUrl" alt="Logotipo de ROVELBOTS" class="h-auto w-44" />
            </span>
            <figcaption class="mt-5 border-t border-line pt-5">
              <p class="text-[15px] font-medium italic leading-relaxed text-white/90">
                “Si tu negocio cabe en una hoja de cálculo, te lo diremos.
                Si necesita un sistema de verdad, lo construimos contigo.”
              </p>
              <p class="mt-2 font-mono text-[11px] tracking-wide text-steel">— EQUIPO ROVELBOTS · INGENIERÍA DE SOFTWARE</p>
              <dl class="tnum mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
                <div><dt class="font-mono text-[10px] tracking-widest text-steel">SISTEMAS VIVOS</dt><dd class="mt-1 text-[20px] font-bold text-white">12/12</dd></div>
                <div><dt class="font-mono text-[10px] tracking-widest text-steel">1ª VERSIÓN</dt><dd class="mt-1 text-[20px] font-bold text-white">30 días</dd></div>
                <div><dt class="font-mono text-[10px] tracking-widest text-steel">RESPUESTA</dt><dd class="mt-1 text-[20px] font-bold text-brand-light">24 h</dd></div>
              </dl>
            </figcaption>
          </figure>
          <!-- La prueba social con cita vive una sola vez: en Casos. Aquí solo la métrica. -->
          <a href="#proyectos" class="mt-4 block rounded-xl border border-brand/30 bg-brand/[0.06] p-5 transition hover:border-brand/60">
            <p class="font-mono text-[10.5px] tracking-[0.2em] text-brand-light">★ CONGRESO INTERNACIONAL · REGISTRO Y QR SIN FILAS →</p>
            <p class="mt-1 text-[13.5px] text-steel">Inscripción en línea y certificados automáticos. Ver el caso.</p>
          </a>
        </aside>
      </div>

      <div class="mt-12 border-t border-line pt-6">
        <p class="text-center font-mono text-[10.5px] tracking-[0.24em] text-steel/70">TRABAJAMOS CON EMPRESAS COMO LA TUYA</p>
        <ul class="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <li v-for="w in wall" :key="w" class="font-mono text-[12.5px] font-semibold tracking-[0.18em] text-steel/50 transition hover:text-steel">{{ w }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
