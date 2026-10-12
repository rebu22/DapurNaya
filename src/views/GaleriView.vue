<template>
  <div>
    <PageHero
      eyebrow="Galeri acara"
      ikon="fa-solid fa-images"
      judul="Bukti lebih enak dari janji."
      deskripsi="Foto asli dari acara pelanggan — bukan stok foto studio. Klik foto mana pun untuk melihat lebih besar."
    >
      <template #blob>
        <div class="blob-d absolute -left-20 top-10 h-80 w-80 bg-sand/50 blur-3xl"></div>
        <div class="blob-c absolute -right-20 top-48 h-80 w-80 bg-moss/10 blur-3xl"></div>
      </template>
      <template #aksi>
        <button
          v-for="kat in kategori"
          :key="kat"
          @click="filterAktif = kat"
          class="rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95"
          :class="filterAktif === kat
            ? 'bg-moss text-mist shadow-soft'
            : 'border border-timber bg-white/60 text-bark hover:border-moss hover:text-moss'"
        >
          {{ kat }}
        </button>
      </template>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div class="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>button]:mb-6">
        <button
          v-for="(foto, i) in fotoTampil"
          :key="foto.src"
          @click="bukaModal(i)"
          class="group relative block w-full overflow-hidden text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
          :class="radiusGaleri(i)"
        >
          <img
            :src="foto.src"
            :alt="foto.judul"
            class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span class="absolute inset-0 bg-gradient-to-t from-loam/80 via-loam/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <span>
              <span class="text-[11px] font-extrabold uppercase tracking-[0.18em] text-sand">{{ foto.kategori }}</span>
              <span class="font-display block text-lg font-bold leading-snug text-white">{{ foto.judul }}</span>
            </span>
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-clay">
              <i class="fa-solid fa-expand"></i>
            </span>
          </span>
        </button>
      </div>
      <p class="mt-4 text-center text-sm font-bold text-grass">
        Menampilkan {{ fotoTampil.length }} dari {{ galeri.length }} foto
      </p>
    </section>

    <div class="pt-14">
      <CtaBanner
        judul="Acara berikutnya yang difoto: acaramu."
        deskripsi="Ceritakan tanggal dan jumlah tamu — kami kirim penawaran plus contoh dekorasi meja saji."
      />
    </div>

    <GaleriModal v-model="modalBuka" :foto="fotoAktif" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import GaleriModal from '@/components/GaleriModal.vue'
import { galeri } from '@/data/catering.js'

const kategori = ['Semua', 'Pernikahan', 'Hajatan', 'Kantor', 'Syukuran', 'Dapur']
const filterAktif = ref('Semua')
const modalBuka = ref(false)
const indeksAktif = ref(0)

const fotoTampil = computed(() =>
  filterAktif.value === 'Semua'
    ? galeri
    : galeri.filter((g) => g.kategori === filterAktif.value || (filterAktif.value === 'Syukuran' && (g.kategori === 'Syukuran' || g.kategori === 'Aqiqah' || g.kategori === 'Harian'))),
)

const fotoAktif = computed(() => fotoTampil.value[indeksAktif.value] ?? { src: '', judul: '', kategori: '' })

const radiusGaleri = (i) => ['rounded-[2rem]', 'rounded-[2rem_3.5rem_2rem_2rem]', 'rounded-[3.5rem_2rem_2rem_2rem]', 'rounded-[2rem_2rem_3.5rem_2rem]'][i % 4]

const bukaModal = (i) => {
  indeksAktif.value = i
  modalBuka.value = true
}
</script>
