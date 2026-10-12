<template>
  <div>
    <HeroSection />

    <!-- Kenapa DapurNaya -->
    <section class="bg-stone/30 py-24">
      <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div class="relative order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80&auto=format&fit=crop"
            alt="Bebek rica-rica andalan DapurNaya"
            class="blob-b mx-auto aspect-square w-full max-w-md object-cover shadow-float transition-transform duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
          <div class="card-radius-4 absolute -bottom-4 right-2 border border-timber/50 bg-cream px-5 py-4 shadow-float sm:right-8">
            <p class="font-display text-2xl font-bold text-moss">Dapur sendiri</p>
            <p class="text-xs font-bold text-grass">bukan maklon, bukan perantara</p>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Kenapa keluarga Jogja percaya kami</p>
          <h2 class="font-display mt-3 text-4xl font-bold leading-tight text-loam md:text-5xl">
            Bebek rica-rica yang bikin tamu nambah.
          </h2>
          <p class="mt-4 leading-relaxed text-bark">
            Menu paling sering dipesan di dapur kami adalah bebek rica-rica resep
            Ibu — bebek empuk dimasak pelan, bumbunya medok, pedasnya nampol tapi
            nagih. Selain itu ada donat kentang yang empuk dan tumpeng cantik
            untuk syukuran. Semua dimasak dari dapur sendiri, bumbu diulek segar,
            dan tidak ada yang keluar sebelum dicicipi Ibu sendiri.
          </p>
          <ul class="mt-7 space-y-4">
            <li v-for="alasan in alasan" :key="alasan.judul" class="flex gap-4">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-moss/10 text-xl text-moss">
                <i :class="alasan.ikon"></i>
              </span>
              <span>
                <span class="block font-extrabold text-loam">{{ alasan.judul }}</span>
                <span class="block text-sm text-bark">{{ alasan.deskripsi }}</span>
              </span>
            </li>
          </ul>
          <RouterLink
            to="/layanan"
            class="mt-8 inline-block rounded-full border-2 border-moss px-8 py-3.5 font-bold text-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-mist active:scale-95"
          >
            Jelajahi Layanan <i class="fa-solid fa-arrow-right ml-2"></i>
          </RouterLink>
        </div>
      </div>
    </section>

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

const alasan = [
  {
    ikon: 'fa-solid fa-fire-burner',
    judul: 'Bebek rica-rica andalan Ibu',
    deskripsi: 'Resep keluarga paling sering dipesan. Bebek empuk, bumbu rica medok, pedasnya nagih.',
  },
  {
    ikon: 'fa-solid fa-people-group',
    judul: 'Tim standby sampai bubar',
    deskripsi: 'Pramusaji, koki refill, dan koordinator lapangan. Meja saji tidak pernah kosong.',
  },
  {
    ikon: 'fa-solid fa-receipt',
    judul: 'Harga transparan, bisa termin',
    deskripsi: 'Rincian per pax jelas di penawaran. Untuk kantor tersedia faktur dan pembayaran termin.',
  },
]
</script>
