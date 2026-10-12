<template>
  <section class="bg-stone/30 py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Tanpa ribet</p>
        <h2 class="font-display mt-3 text-4xl font-bold text-loam md:text-5xl">Tiga langkah sampai hidangan tersaji</h2>
      </div>
      <div class="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <div v-for="(langkah, i) in langkahPesan" :key="langkah.judul" class="relative text-center">
          <span class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-timber bg-cream text-3xl text-moss shadow-soft">
            <i :class="langkah.ikon"></i>
            <span class="font-display absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-clay text-base font-bold text-white">{{ i + 1 }}</span>
          </span>
          <h3 class="font-display mt-5 text-2xl font-bold text-loam">{{ langkah.judul }}</h3>
          <p class="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-bark">{{ langkah.deskripsi }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { langkahPesan } from '@/data/catering.js'
</script>
