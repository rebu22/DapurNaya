<template>
  <div class="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
    <span class="blob-c mx-auto flex h-32 w-32 items-center justify-center bg-sand text-5xl text-clay">?</span>
    <h1 class="font-display mt-8 text-5xl font-bold text-loam">Ups, nyasar ke dapur kosong.</h1>
    <p class="mx-auto mt-4 max-w-md text-bark">
      Halaman yang kamu cari tidak ada — mungkin sudah dipindah seperti toples
      bumbu Bu Naya. Balik ke beranda saja, hidangannya masih hangat.
    </p>
    <RouterLink
      to="/"
      class="mt-8 inline-block rounded-full bg-moss px-10 py-4 font-bold text-mist shadow-soft transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <i class="fa-solid fa-house mr-2"></i>Kembali ke Beranda
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
