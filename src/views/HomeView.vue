<template>
  <div>
    <HeroSection />

    <!-- Layanan unggulan -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Layanan kami</p>
            <h2 class="font-display mt-3 max-w-xl text-4xl font-bold leading-tight text-loam md:text-5xl">
              Dari akad sampai arisan, semua bisa.
            </h2>
          </div>
          <RouterLink to="/layanan" class="font-bold text-moss hover:text-clay">
            Semua layanan <i class="fa-solid fa-arrow-right ml-1"></i>
          </RouterLink>
        </div>
        <div class="group mt-10 grid gap-8 md:grid-cols-3">
          <LayananCard
            v-for="(item, i) in layanan.slice(0, 3)"
            :key="item.judul"
            :item="item"
            :radius-class="radiusCycle[i % radiusCycle.length]"
          />
        </div>
      </div>
    </section>

    <LangkahPesan />

    <!-- Paket terlaris -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Paling sering dipesan</p>
            <h2 class="font-display mt-3 max-w-xl text-4xl font-bold leading-tight text-loam md:text-5xl">
              Paket yang tamu selalu ingat.
            </h2>
          </div>
          <RouterLink to="/paket" class="font-bold text-moss hover:text-clay">
            Semua paket <i class="fa-solid fa-arrow-right ml-1"></i>
          </RouterLink>
        </div>
        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <MenuCard
            v-for="(paket, i) in paketMenu.slice(0, 3)"
            :key="paket.nama"
            :paket="paket"
            :radius-class="radiusCycle[i % radiusCycle.length]"
          />
        </div>
      </div>
    </section>

    <!-- Testimoni & FAQ dihapus atas permintaan pemilik -->

    <CtaBanner />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import LayananCard from '@/components/LayananCard.vue'
import MenuCard from '@/components/MenuCard.vue'
import LangkahPesan from '@/components/LangkahPesan.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import { layanan } from '@/data/catering.js'
import { menuAndalan } from '@/data/menuAndalan.js'

// TAMPILAN UTAMA: cukup edit file src/data/menuAndalan.js untuk ganti menu.
// Daftar lama (paketMenu) tetap dipakai halaman /paket.
const paketMenu = menuAndalan

const radiusCycle = ['card-radius-1', 'card-radius-2', 'card-radius-3', 'card-radius-4', 'card-radius-5', 'card-radius-6']

</script>
