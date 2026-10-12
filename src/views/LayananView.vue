<template>
  <div>
    <PageHero
      eyebrow="Layanan catering"
      ikon="fa-solid fa-bell-concierge"
      judul="Satu dapur untuk semua acaramu."
      deskripsi="Enam layanan, satu standar: makanan keluar saat masih hangat, meja saji tidak pernah kosong, dan ada koordinator yang bisa kamu hubungi kapan saja."
    >
      <template #blob>
        <div class="blob-c absolute -left-20 top-6 h-80 w-80 bg-sand/50 blur-3xl"></div>
        <div class="blob-d absolute -right-20 top-40 h-80 w-80 bg-clay/15 blur-3xl"></div>
      </template>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div class="group grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LayananCard
          v-for="(item, i) in layanan"
          :key="item.judul"
          :item="item"
          :radius-class="radiusCycle[i % radiusCycle.length]"
        />
      </div>
    </section>

    <!-- Cara kerja tiap layanan -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="card-radius-3 grid items-center gap-10 border border-timber/50 bg-cream p-8 shadow-soft md:p-12 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
          alt="Suasana meja saji DapurNaya di sebuah acara"
          class="w-full rotate-1 rounded-[2rem] border-4 border-white object-cover shadow-float transition-transform duration-700 hover:rotate-0"
          loading="lazy"
        />
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Yang selalu termasuk</p>
          <h2 class="font-display mt-3 text-3xl font-bold leading-tight text-loam md:text-4xl">
            Setiap layanan datang dengan tim, bukan cuma makanan.
          </h2>
          <ul class="mt-6 space-y-4">
            <li v-for="f in termasuk" :key="f.judul" class="flex gap-4">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-moss/10 text-lg text-moss">
                <i :class="f.ikon"></i>
              </span>
              <span>
                <span class="block font-extrabold text-loam">{{ f.judul }}</span>
                <span class="block text-sm text-bark">{{ f.deskripsi }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <LangkahPesan />

    <div class="pt-20">
      <CtaBanner
        judul="Tidak menemukan yang pas? Kami racikkan."
        deskripsi="Setengah porsi anak-anak, menu vegetarian, atau prasmanan campur stall — ceritakan saja kebutuhanmu."
      />
    </div>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import LayananCard from '@/components/LayananCard.vue'
import LangkahPesan from '@/components/LangkahPesan.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import { layanan } from '@/data/catering.js'

const radiusCycle = ['card-radius-1', 'card-radius-2', 'card-radius-3', 'card-radius-4', 'card-radius-5', 'card-radius-6']

const termasuk = [
  { ikon: 'fa-solid fa-user-tie', judul: 'Koordinator acara', deskripsi: 'Satu nomor yang siaga dari gladi sampai bubar.' },
  { ikon: 'fa-solid fa-temperature-high', judul: 'Jaminan hangat', deskripsi: 'Chafing dish, warmer box, dan jadwal refill per 30 menit.' },
  { ikon: 'fa-solid fa-hand-sparkles', judul: 'Dapur higienis', deskripsi: 'Tim bersertifikat, peralatan food-grade, dan air minum isi ulang.' },
  { ikon: 'fa-solid fa-shield-halved', judul: 'Garansi porsi', deskripsi: 'Kurang 10 porsi terakhir? Kami masak susulan tanpa biaya.' },
]
</script>
