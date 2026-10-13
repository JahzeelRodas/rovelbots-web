<script setup>
import { ref } from 'vue'

const form = ref({ nombre: '', empresa: '', email: '', mensaje: '', empresa2: '' })
const sent = ref(false)
const sending = ref(false)
const error = ref('')

// Recepción real: FormSubmit (apto para sitio estático en Hostinger, sin backend).
// Envía a contacto@rovelbots.com. IMPORTANTE: el primer envío genera un correo de
// activación a esa casilla — hay que abrirlo y confirmar para empezar a recibir.
const INBOX = 'https://formsubmit.co/ajax/contacto@rovelbots.com'

// Patrón Linear/Thoughtbot: qué pasa después, sin misterio.
const next = [
  ['1', 'Te escribimos', 'En menos de 24 h hábiles, una persona con preguntas concretas.'],
  ['2', 'Platicamos 30 min', 'Sin costo. Salimos con alcance y precio cerrado por escrito.'],
  ['3', 'Decides tranquilo', 'Sin presión. La cotización es tuya aunque no sigamos.'],
]

async function submit() {
  if (sending.value) return
  if (form.value.empresa2) { sent.value = true; return } // bot detectado: éxito falso
  sending.value = true
  error.value = ''
  try {
    const res = await fetch(INBOX, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        nombre: form.value.nombre,
        empresa: form.value.empresa || '—',
        email: form.value.email,
        mensaje: form.value.mensaje,
        _subject: `Nueva solicitud web: ${form.value.nombre} (${form.value.empresa || 'sin empresa'})`,
        _template: 'table',
        _replyto: form.value.email,
        _captcha: 'false',
      }),
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    sent.value = true
  } catch (e) {
    error.value = 'No se pudo enviar. Escríbenos directo a contacto@rovelbots.com y te respondemos igual de rápido.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contacto" class="scroll-mt-24 border-t border-line bg-carbon/40">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <div>
        <p class="font-mono text-[11px] tracking-[0.24em] text-brand-light">05 — CONTACTO</p>
        <h2 class="mt-3 text-[30px] font-bold tracking-[-0.02em] text-white md:text-[40px]">Cuéntanos tu caso. Te leemos de verdad.</h2>
        <p class="mt-4 max-w-md text-[15px] leading-relaxed text-steel">
          Escríbenos como le escribirías a un colega: qué vendes, cuántos son,
          qué te quita el sueño. 
          
          en <strong class="text-white">te atendemos en menos de 24 horas hábiles</strong>.
        </p>

        <!-- qué pasa después -->
        <ol class="mt-7 space-y-4 border-t border-line pt-6">
          <li v-for="[n, t, d] in next" :key="n" class="flex gap-4">
            <span class="tnum grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/15 font-mono text-[13px] font-bold text-brand-light">{{ n }}</span>
            <div>
              <p class="text-[14.5px] font-bold text-white">{{ t }}</p>
              <p class="mt-0.5 text-[13.5px] text-steel">{{ d }}</p>
            </div>
          </li>
        </ol>

        <ul class="mt-7 space-y-2.5 border-t border-line pt-6 text-[14px] text-steel">
          <li class="flex gap-2.5"><span class="font-bold text-brand-light">✓</span> Tu información no se comparte ni se usa para spam</li>
          <li class="flex gap-2.5"><span class="font-bold text-brand-light">✓</span> Firmamos confidencialidad si lo pides</li>
        </ul>
      </div>

      <div class="h-fit rounded-xl border border-line bg-void p-7 md:p-8">
        <form v-if="!sent" @submit.prevent="submit" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block text-[13px] text-steel">Tu nombre *
              <input v-model="form.nombre" required placeholder="Ej. Mariana Torres"
                class="mt-1.5 w-full rounded-lg border border-line bg-carbon px-3.5 py-2.5 text-[14px] text-white outline-none placeholder:text-steel/40 focus:border-brand" />
            </label>
            <label class="block text-[13px] text-steel">Tu empresa
              <input v-model="form.empresa" placeholder="Ej. Torres Logística"
                class="mt-1.5 w-full rounded-lg border border-line bg-carbon px-3.5 py-2.5 text-[14px] text-white outline-none placeholder:text-steel/40 focus:border-brand" />
            </label>
          </div>
          <label class="block text-[13px] text-steel">Tu correo *
            <input v-model="form.email" type="email" required placeholder="tucorreo@empresa.com"
              class="mt-1.5 w-full rounded-lg border border-line bg-carbon px-3.5 py-2.5 text-[14px] text-white outline-none placeholder:text-steel/40 focus:border-brand" />
          </label>
          <label class="block text-[13px] text-steel">¿Qué necesitas ordenar? *
            <textarea v-model="form.mensaje" required rows="4" placeholder="Ej. Tengo 2 locales, llevo el inventario en Excel y cada mes me faltan cosas…"
              class="mt-1.5 w-full resize-none rounded-lg border border-line bg-carbon px-3.5 py-2.5 text-[14px] leading-relaxed text-white outline-none placeholder:text-steel/40 focus:border-brand" />
          </label>
          <!-- trampa anti-spam (los bots la llenan, las personas no la ven) -->
          <input v-model="form.empresa2" type="text" name="_honey" tabindex="-1" autocomplete="off" class="hidden" />
          <button :disabled="sending" class="w-full rounded-lg bg-brand py-3 text-[14.5px] font-semibold text-[#06130c] transition hover:bg-brand-light disabled:cursor-wait disabled:opacity-60">
            {{ sending ? 'Enviando…' : 'Enviar mensaje →' }}
          </button>
          <p v-if="error" class="rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-center text-[13px] leading-relaxed text-red-200">
            {{ error }} <a href="mailto:contacto@rovelbots.com" class="font-semibold underline underline-offset-2">contacto@rovelbots.com</a>
          </p>
          <p class="text-center font-mono text-[11px] text-steel/60">LLEGA DIRECTO A <a href="mailto:contacto@rovelbots.com" class="text-steel underline underline-offset-2 hover:text-white">CONTACTO@ROVELBOTS.COM</a></p>
        </form>
        <div v-else class="py-10 text-center">
          <p class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/15 text-2xl text-brand-light">✓</p>
          <h3 class="mt-4 text-[22px] font-bold text-white">¡Mensaje recibido{{ form.nombre ? ', ' + form.nombre : '' }}!</h3>
          <p class="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-steel">
            Paso 1 completo. Te escribimos en menos de 24 horas hábiles con preguntas concretas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
