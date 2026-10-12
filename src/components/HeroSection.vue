<template>
  <section class="relative overflow-hidden">
    <div class="blob-a absolute -left-24 top-10 h-96 w-96 bg-sand/50 blur-3xl"></div>
    <div class="blob-b absolute -right-28 top-64 h-[28rem] w-[28rem] bg-clay/15 blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
      <div class="max-w-2xl">
        <p class="inline-flex items-center gap-2 rounded-full border border-timber/60 bg-white/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-moss">
          <i class="fa-solid fa-fire-burner text-clay"></i>
          Catering rumahan · sejak 2015
        </p>
        <h1 class="font-display mt-6 text-5xl font-bold leading-[1.05] text-loam md:text-7xl">
          Hajatan tenang, tamu kenyang, tuan rumah
          <span class="italic text-clay">tersenyum.</span>
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-bark">
          DapurNaya memasak untuk pernikahan, hajatan, rapat kantor, sampai makan
          harian — resep rumahan, bahan pasar segar setiap pagi, dan tim yang
          standby sampai acara selesai.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <RouterLink
            to="/paket"
            class="rounded-full bg-moss px-10 py-4 text-center text-base font-bold text-mist shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lift active:scale-95"
          >
            Lihat Paket Menu
          </RouterLink>
          <RouterLink
            to="/pemesanan"
            class="rounded-full border-2 border-clay px-10 py-4 text-center text-base font-bold text-clay transition-all duration-300 hover:scale-105 hover:bg-clay hover:text-white active:scale-95"
          >
            Minta Penawaran
          </RouterLink>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-lg">
        <div class="blob-c absolute -inset-6 bg-moss/10 blur-2xl"></div>
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&q=80&auto=format&fit=crop"
          alt="Hidangan prasmanan DapurNaya yang tersaji hangat"
          class="relative w-full -rotate-2 rounded-[2rem] border-4 border-white object-cover shadow-float transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]"
          loading="eager"
        />
        <div class="card-radius-2 absolute -bottom-6 -left-4 flex items-center gap-3 border border-timber/50 bg-cream px-5 py-4 shadow-float sm:-left-8">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-moss/10 text-2xl text-moss">
            <i class="fa-solid fa-star"></i>
          </span>
          <span>
            <span class="font-display block text-xl font-bold text-loam">4,9 / 5</span>
            <span class="block text-xs font-bold text-grass">dari 1.200+ acara</span>
          </span>
        </div>
        <div class="blob-d absolute -right-6 -top-8 flex h-28 w-28 rotate-6 items-center justify-center bg-clay text-center shadow-float">
          <span class="px-3 text-xs font-extrabold uppercase leading-tight text-white">Bisa<br>test food</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
