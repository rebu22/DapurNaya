<template>
  <a
    :href="waLink('Halo DapurNaya! Saya mau tanya-tanya tentang catering.')"
    target="_blank"
    rel="noopener"
    aria-label="Hubungi DapurNaya lewat WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-float transition-all duration-300 hover:scale-110 active:scale-95"
  >
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<script setup>
import { waLink } from '@/data/catering.js'
</script>
