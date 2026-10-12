<template>
  <div class="sticky top-4 z-50 px-4 sm:px-6">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-timber/50 bg-white/70 py-3 pl-4 pr-3 shadow-soft backdrop-blur-md sm:pl-6"
      aria-label="Navigasi utama"
    >
      <RouterLink to="/" class="flex items-center gap-3">
        <span class="flex h-11 w-11 items-center justify-center rounded-full bg-moss text-xl text-mist">
          <i class="fa-solid fa-kitchen-set"></i>
        </span>
        <span class="leading-tight">
          <span class="font-display block text-xl font-bold text-loam">DapurNaya</span>
          <span class="block text-[11px] font-bold uppercase tracking-[0.2em] text-clay">Catering</span>
        </span>
      </RouterLink>

      <div class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="tautan in tautanNav"
          :key="tautan.path"
          :to="tautan.path"
          class="rounded-full px-4 py-2 text-sm font-bold text-bark transition-all duration-300 hover:bg-moss/10 hover:text-moss"
          active-class="!bg-moss !text-mist"
        >
          {{ tautan.label }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <a
          :href="waLink('Halo DapurNaya! Saya mau tanya-tanya dulu tentang paket catering.')"
          target="_blank"
          rel="noopener"
          class="hidden rounded-full bg-moss px-6 py-2.5 text-sm font-bold text-mist shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lift active:scale-95 sm:inline-block"
        >
          <i class="fa-brands fa-whatsapp mr-2"></i>Pesan Sekarang
        </a>
        <button
          @click="buka = !buka"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-timber/60 text-loam lg:hidden"
          :aria-expanded="buka"
          aria-label="Buka menu navigasi"
        >
          <i :class="buka ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-3"
      leave-active-class="transition-all duration-200"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="buka"
        class="card-radius-1 mx-auto mt-3 max-w-6xl border border-timber/50 bg-cream p-4 shadow-float lg:hidden"
      >
        <RouterLink
          v-for="tautan in tautanNav"
          :key="tautan.path"
          :to="tautan.path"
          @click="buka = false"
          class="block rounded-2xl px-4 py-3 text-base font-bold text-bark transition-colors hover:bg-moss/10 hover:text-moss"
          active-class="!bg-moss/10 !text-moss"
        >
          <i :class="tautan.ikon" class="mr-3 w-5 text-clay"></i>{{ tautan.label }}
        </RouterLink>
        <a
          :href="waLink('Halo DapurNaya! Saya mau tanya-tanya dulu tentang paket catering.')"
          target="_blank"
          rel="noopener"
          class="mt-2 block rounded-full bg-moss px-6 py-3 text-center text-sm font-bold text-mist"
        >
          <i class="fa-brands fa-whatsapp mr-2"></i>Pesan Sekarang
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { waLink } from '@/data/catering.js'

const buka = ref(false)
const route = useRoute()

const tautanNav = [
  { path: '/', label: 'Beranda', ikon: 'fa-solid fa-house' },
  { path: '/layanan', label: 'Layanan', ikon: 'fa-solid fa-bell-concierge' },
  { path: '/paket', label: 'Paket Menu', ikon: 'fa-solid fa-book-open' },
  { path: '/galeri', label: 'Galeri', ikon: 'fa-solid fa-images' },
  { path: '/pemesanan', label: 'Pemesanan', ikon: 'fa-solid fa-clipboard-list' },
]

watch(
  () => route.path,
  () => { buka.value = false },
)
</script>
