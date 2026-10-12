<template>
  <div class="lift group flex h-full flex-col overflow-hidden border border-timber/50 bg-cream shadow-soft hover:shadow-lift" :class="radiusClass">
    <div class="relative overflow-hidden">
      <img
        :src="paket.gambar"
        :alt="paket.nama"
        class="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <span class="absolute left-4 top-4 rounded-full bg-loam/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm">
        {{ paket.tag }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-display text-2xl font-bold text-loam">{{ paket.nama }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-bark">{{ paket.deskripsi }}</p>
      <ul class="mt-4 space-y-2">
        <li v-for="item in paket.isi.slice(0, 3)" :key="item" class="flex items-center gap-2 text-sm font-semibold text-grass">
          <i class="fa-solid fa-circle-check text-moss"></i>{{ item }}
        </li>
      </ul>
      <div class="mt-5 flex items-end justify-between border-t border-timber/50 pt-4">
        <p>
          <span class="font-display block text-2xl font-bold text-moss">{{ rupiah(paket.harga) }}</span>
          <span class="text-xs font-bold text-grass">per {{ paket.satuan }}</span>
        </p>
        <a
          :href="waLink(`Halo DapurNaya! Saya tertarik dengan ${paket.nama} (${rupiah(paket.harga)}/${paket.satuan}). Boleh info lebih lanjut?`)"
          target="_blank"
          rel="noopener"
          class="rounded-full bg-clay px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-moss active:scale-95"
        >
          Pesan
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { rupiah, waLink } from '@/data/catering.js'

defineProps({
  paket: { type: Object, required: true },
  radiusClass: { type: String, default: 'card-radius-1' },
})
</script>
