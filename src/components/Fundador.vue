<template>
  <section id="ingeniero" class="grain relative scroll-mt-24 overflow-hidden border-t border-line">
    <div class="pointer-events-none absolute right-0 top-0 h-[300px] w-[500px] rounded-full bg-brand/[0.06] blur-[110px]" aria-hidden="true"></div>

    <div class="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <!-- sello personal -->
      <div class="flex flex-col items-start">
        <p class="font-mono text-[11px] tracking-[0.24em] text-brand-light">UNA FIRMA CON NOMBRE PROPIO</p>
        <h2 class="mt-3 text-[30px] font-bold tracking-[-0.02em] text-white md:text-[38px]">
          Aquí no eres solo un cliente.
        </h2>
        <div class="mt-6 flex items-center gap-5">
          <span class="grid h-24 w-24 place-items-center rounded-full border-2 border-brand/60 bg-carbon font-mono text-[26px] font-bold text-brand-light">JR</span>
          <div>
            <p class="text-[17px] font-bold text-white">
              <a href="https://www.jahzeelrodas.com" target="_blank" rel="noopener" class="underline decoration-brand/60 underline-offset-4 hover:text-brand-light">Ing. Jahzeel Rodas F</a>
            </p>
            <p class="mt-1 font-mono text-[11px] tracking-[0.14em] text-steel">FUNDADOR · REVISA CADA ENTREGA</p>
          </div>
        </div>
        <a href="https://www.jahzeelrodas.com" target="_blank" rel="noopener"
          class="mt-6 rounded-lg border border-line px-5 py-2.5 text-[13.5px] font-medium text-white transition hover:border-brand/60 hover:text-brand-light">
          Conoceme ↗
        </a>
      </div>

      <!-- carta -->
      <article class="rounded-xl border border-line bg-carbon p-7 md:p-9">
        <p class="font-mono text-[10.5px] tracking-[0.24em] text-steel">CARTA A QUIEN ESTÉ LEYENDO ESTO</p>
        <div class="mt-4 space-y-4 text-[15px] leading-relaxed text-white/85">
          <p>
            Me llamo <a href="https://www.jahzeelrodas.com" target="_blank" rel="noopener" class="font-semibold text-brand-light underline underline-offset-2 hover:text-white">Jahzeel Issac Rodas Flores</a>,
            soy ingeniero informático y fundé esta firma porque me cansé de ver empresas pagando
            sistemas caros que nadie usa.
          </p>
          <p>
            Si tu sistema sale mal, no te atiende
            un call center — <strong class="text-white">me escribes a mí.</strong>
          </p>
          <p>
            Mi garantía es simple: alcance y precio por escrito, avances que puedes
            ver en pocos días y 60 días de pulido sin costo. Si no cumplimos,
            lo arreglamos hasta que quede bien.
          </p>
        </div>
        <p class="mt-6 font-hand text-[34px] leading-none text-brand-light">Jahzeel I. Rodas</p>
        <p class="mt-1 font-mono text-[10.5px] tracking-[0.2em] text-steel"><span class="tnum">12/12 ENTREGAS EN OPERACIÓN</span></p>
      </article>
    </div>
  </section>
</template>
