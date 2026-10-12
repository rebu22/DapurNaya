<template>
  <div>
    <PageHero
      eyebrow="Paket & harga"
      ikon="fa-solid fa-book-open"
      judul="Harga jujur, porsi tidak pelit."
      deskripsi="Semua harga di bawah sudah termasuk pajak, alat saji, dan ongkir area Sleman–Kota–Bantul untuk pemesanan di atas 100 pax. Tidak ada biaya siluman."
    >
      <template #blob>
        <div class="blob-b absolute -left-24 top-10 h-80 w-80 bg-sand/50 blur-3xl"></div>
        <div class="blob-a absolute -right-24 top-52 h-80 w-80 bg-clay/15 blur-3xl"></div>
      </template>
      <template #aksi>
        <button
          v-for="kat in kategori"
          :key="kat"
          @click="filterAktif = kat"
          class="rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 active:scale-95"
          :class="filterAktif === kat
            ? 'bg-moss text-mist shadow-soft'
            : 'border border-timber bg-white/60 text-bark hover:border-moss hover:text-moss'"
        >
          {{ kat }}
        </button>
      </template>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <p class="mb-6 text-sm font-bold text-grass">
        Menampilkan {{ paketTampil.length }} dari {{ paketMenu.length }} paket
        <span v-if="filterAktif !== 'Semua'">· kategori “{{ filterAktif }}”</span>
      </p>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <MenuCard
          v-for="(paket, i) in paketTampil"
          :key="paket.nama"
          :paket="paket"
          :radius-class="radiusCycle[i % radiusCycle.length]"
        />
      </div>
      <div v-if="!paketTampil.length" class="card-radius-1 border border-timber/50 bg-cream p-12 text-center shadow-soft">
        <i class="fa-solid fa-magnifying-glass text-4xl text-clay"></i>
        <p class="font-display mt-4 text-2xl font-bold text-loam">Belum ada paket di kategori ini</p>
        <p class="mt-2 text-sm text-bark">Coba kategori lain, atau chat kami untuk paket racikan khusus.</p>
      </div>
    </section>

    <!-- Catatan harga -->
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="card-radius-5 border border-timber/50 bg-cream p-8 shadow-soft md:p-10">
          <h2 class="font-display text-3xl font-bold text-loam">Cara membaca harga</h2>
          <ul class="mt-5 space-y-3 text-sm leading-relaxed text-bark">
            <li><i class="fa-solid fa-circle-check mr-2 text-moss"></i>Harga <strong>per box</strong> berlaku kelipatan 10, minimal sesuai tag di tiap kartu.</li>
            <li><i class="fa-solid fa-circle-check mr-2 text-moss"></i>Harga <strong>per pax</strong> prasmanan termasuk pramusaji, alat saji, dan dekorasi meja.</li>
            <li><i class="fa-solid fa-circle-check mr-2 text-moss"></i>Tambah stall (bakso, siomay, es) Rp 12.000/pax per stall.</li>
            <li><i class="fa-solid fa-circle-check mr-2 text-moss"></i>Ongkir luar Sleman–Kota–Bantul dihitung per armada, bukan per pax.</li>
          </ul>
        </div>
        <div class="card-radius-6 bg-sienna p-8 text-white shadow-float md:p-10">
          <h2 class="font-display text-3xl font-bold">Butuh di bawah Rp 20 ribu?</h2>
          <p class="mt-4 text-sm leading-relaxed text-white/85">
            Bisa. Snack box mulai Rp 15.000 dan prasmanan hemat Rp 35.000/pax
            (min. 150 pax). Menu disesuaikan — misalnya ayam ganti telur balado
            plus kering tempe, tetap kenyang dan rapi disajikan.
          </p>
          <a
            :href="waLink('Halo DapurNaya! Budget saya di bawah Rp 20.000/pax. Tolong susunkan paket yang pas.')"
            target="_blank"
            rel="noopener"
            class="mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-sienna transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Minta Paket Hemat
          </a>
        </div>
      </div>
    </section>

    <div class="pt-4">
      <CtaBanner
        judul="Sudah menemukan yang cocok? Kunci tanggalmu."
        deskripsi="Tanggal cantik cepat penuh — DP 30% saja tanggal sudah terkunci, menu bisa menyusul."
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import MenuCard from '@/components/MenuCard.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import { paketMenu, waLink } from '@/data/catering.js'

const kategori = ['Semua', 'Box', 'Prasmanan', 'Syukuran', 'Langganan']
const filterAktif = ref('Semua')
const radiusCycle = ['card-radius-1', 'card-radius-2', 'card-radius-3', 'card-radius-4', 'card-radius-5', 'card-radius-6']

const kategoriOf = (paket) => {
  if (paket.satuan === 'box' || paket.nama.includes('Box') || paket.nama.includes('Coffee')) return 'Box'
  if (paket.satuan === 'pax') return 'Prasmanan'
  if (paket.nama.includes('Tumpeng') || paket.nama.includes('Aqiqah')) return 'Syukuran'
  return 'Langganan'
}

const paketTampil = computed(() =>
  filterAktif.value === 'Semua'
    ? paketMenu
    : paketMenu.filter((p) => kategoriOf(p) === filterAktif.value),
)
</script>
