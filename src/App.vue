<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Sintomas from './components/Sintomas.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Fundador from './components/Fundador.vue'
import Process from './components/Process.vue'
import Faq from './components/Faq.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-void font-sans text-[#e8ecf0]">
    <Navbar />
    <main>
      <Hero />
      <Sintomas />
      <Services />
      <Portfolio />
      <Fundador />
      <Process />
      <Faq />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
