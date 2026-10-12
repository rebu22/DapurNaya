<template>
  <footer class="relative mt-8 overflow-hidden bg-moss text-mist">
    <div class="blob-a absolute -top-24 right-10 h-72 w-72 bg-clay/20 blur-3xl"></div>
    <div class="blob-b absolute -bottom-28 left-8 h-80 w-80 bg-sand/10 blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div>
        <div class="flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-xl text-moss">
            <i class="fa-solid fa-kitchen-set"></i>
          </span>
          <span class="leading-tight">
            <span class="font-display block text-2xl font-bold">DapurNaya</span>
            <span class="block text-[11px] font-bold uppercase tracking-[0.2em] text-sand">Catering & Rantangan</span>
          </span>
        </div>
        <p class="mt-5 text-sm leading-relaxed text-mist/80">
          Sejak 2015 memasak untuk hajatan, pernikahan, dan makan harian keluarga
          Yogyakarta. Semua dimasak segar di dapur sendiri, tanpa pengawet.
        </p>
        <div class="mt-5 flex gap-3">
          <a v-for="sos in sosial" :key="sos.label" :href="sos.href" target="_blank" rel="noopener"
            :aria-label="sos.label"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-105 hover:bg-clay">
            <i :class="sos.ikon"></i>
          </a>
        </div>
      </div>

      <nav aria-label="Tautan halaman">
        <h3 class="text-sm font-extrabold uppercase tracking-[0.18em] text-sand">Jelajahi</h3>
        <ul class="mt-5 space-y-3 text-sm font-semibold">
          <li v-for="tautan in tautanNav" :key="tautan.path">
            <RouterLink :to="tautan.path" class="text-mist/80 transition-colors hover:text-white">
              {{ tautan.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-[0.18em] text-sand">Layanan Favorit</h3>
        <ul class="mt-5 space-y-3 text-sm font-semibold text-mist/80">
          <li><RouterLink to="/layanan" class="transition-colors hover:text-white">Prasmanan pernikahan</RouterLink></li>
          <li><RouterLink to="/paket" class="transition-colors hover:text-white">Nasi box kantor</RouterLink></li>
          <li><RouterLink to="/paket" class="transition-colors hover:text-white">Tumpeng & aqiqah</RouterLink></li>
          <li><RouterLink to="/paket" class="transition-colors hover:text-white">Rantangan harian</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-extrabold uppercase tracking-[0.18em] text-sand">Dapur Kami</h3>
        <ul class="mt-5 space-y-3 text-sm text-mist/80">
          <li><i class="fa-solid fa-location-dot mr-2 text-clay"></i>Jl. Kaliurang KM 7, Sleman, Yogyakarta</li>
          <li><i class="fa-solid fa-clock mr-2 text-clay"></i>Senin–Sabtu, 07.00–19.00 WIB</li>
          <li>
            <a :href="waLink('Halo DapurNaya!')" target="_blank" rel="noopener" class="font-bold transition-colors hover:text-white">
              <i class="fa-brands fa-whatsapp mr-2 text-clay"></i>0822-5304-4857
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="relative border-t border-white/15">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-mist/70 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 DapurNaya Catering. Dimasak dengan cinta di Yogyakarta.</p>
        <p>PIRT 2063404011234 · Halal dalam proses sertifikasi</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { waLink } from '@/data/catering.js'

const tautanNav = [
  { path: '/', label: 'Beranda' },
  { path: '/layanan', label: 'Layanan' },
  { path: '/paket', label: 'Paket Menu' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/pemesanan', label: 'Pemesanan' },
]

const sosial = [
  { label: 'Instagram DapurNaya', ikon: 'fa-brands fa-instagram', href: 'https://instagram.com' },
  { label: 'Facebook DapurNaya', ikon: 'fa-brands fa-facebook-f', href: 'https://facebook.com' },
  { label: 'TikTok DapurNaya', ikon: 'fa-brands fa-tiktok', href: 'https://tiktok.com' },
  { label: 'WhatsApp DapurNaya', ikon: 'fa-brands fa-whatsapp', href: waLink('Halo DapurNaya!') },
]
</script>
