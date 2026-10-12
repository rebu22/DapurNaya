<template>
  <section class="px-4 pb-24 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-moss px-6 py-12 text-center text-mist shadow-float sm:px-12 md:py-14">
      <div class="blob-a absolute -left-16 -top-16 h-64 w-64 bg-clay/30 blur-3xl"></div>
      <div class="blob-b absolute -bottom-20 -right-16 h-72 w-72 bg-sand/20 blur-3xl"></div>
      <div class="relative">
        <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-sand">Konsultasi gratis, tanpa komitmen</p>
        <h2 class="font-display mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          {{ judul }}
        </h2>
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            :href="waLink('Halo DapurNaya! Saya mau konsultasi kebutuhan catering untuk acara saya.')"
            target="_blank"
            rel="noopener"
            class="rounded-full bg-clay px-10 py-4 text-base font-bold text-white shadow-float transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <i class="fa-brands fa-whatsapp mr-2"></i>Chat WhatsApp
          </a>
          <RouterLink
            to="/pemesanan"
            class="rounded-full border-2 border-mist/60 px-10 py-4 text-base font-bold text-mist transition-all duration-300 hover:scale-105 hover:bg-mist hover:text-moss active:scale-95"
          >
            Isi Form Pemesanan
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { waLink } from '@/data/catering.js'

defineProps({
  judul: {
    type: String,
    default: 'Pesan sekarang, pesananmu langsung kami siapkan.',
  },
  deskripsi: {
    type: String,
    default: '',
  },
})
</script>
