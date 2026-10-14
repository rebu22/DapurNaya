<template>
  <div>
    <PageHero
      eyebrow="Form pemesanan"
      ikon="fa-solid fa-clipboard-list"
      judul="Ceritakan acaramu, kami balas hari ini juga."
      deskripsi="Isi form di bawah — estimasi penawaran langsung muncul. Setelah itu tinggal kirim ke WhatsApp kami, beres."
    >
      <template #blob>
        <div class="blob-a absolute -left-20 top-10 h-80 w-80 bg-sand/50 blur-3xl"></div>
        <div class="blob-b absolute -right-20 top-48 h-80 w-80 bg-clay/15 blur-3xl"></div>
      </template>
    </PageHero>

    <section class="mx-auto grid max-w-6xl gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-5 lg:px-8">
      <!-- Form -->
      <form @submit.prevent="kirimKeWa" class="card-radius-1 border border-timber/50 bg-cream p-7 shadow-soft md:p-9 lg:col-span-3" novalidate>
        <h2 class="font-display text-2xl font-bold text-loam">Detail acara</h2>
        <p class="mt-1 text-sm text-grass">Kolom bertanda * wajib diisi.</p>

        <div class="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label for="nama" class="mb-1.5 block text-sm font-extrabold text-loam">Nama *</label>
            <input id="nama" v-model="form.nama" type="text" placeholder="cth. Ratna Wijaya"
              class="h-12 w-full rounded-full border border-timber bg-white/50 px-5 text-sm outline-none transition-all placeholder:text-grass/70 focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2" />
            <p v-if="errors.nama" class="mt-1 text-xs font-bold text-sienna">{{ errors.nama }}</p>
          </div>
          <div>
            <label for="telepon" class="mb-1.5 block text-sm font-extrabold text-loam">No. WhatsApp *</label>
            <input id="telepon" v-model="form.telepon" type="tel" placeholder="cth. 0812xxxx"
              class="h-12 w-full rounded-full border border-timber bg-white/50 px-5 text-sm outline-none transition-all placeholder:text-grass/70 focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2" />
            <p v-if="errors.telepon" class="mt-1 text-xs font-bold text-sienna">{{ errors.telepon }}</p>
          </div>
          <div>
            <label for="jenis" class="mb-1.5 block text-sm font-extrabold text-loam">Jenis acara *</label>
            <select id="jenis" v-model="form.jenis"
              class="h-12 w-full appearance-none rounded-full border border-timber bg-white/50 px-5 text-sm font-semibold outline-none transition-all focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2">
              <option value="" disabled>Pilih jenis acara</option>
              <option v-for="j in jenisAcara" :key="j" :value="j">{{ j }}</option>
            </select>
            <p v-if="errors.jenis" class="mt-1 text-xs font-bold text-sienna">{{ errors.jenis }}</p>
          </div>
          <div>
            <label for="tanggal" class="mb-1.5 block text-sm font-extrabold text-loam">Tanggal acara *</label>
            <input id="tanggal" v-model="form.tanggal" type="date" :min="hariIni"
              class="h-12 w-full rounded-full border border-timber bg-white/50 px-5 text-sm outline-none transition-all focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2" />
            <p v-if="errors.tanggal" class="mt-1 text-xs font-bold text-sienna">{{ errors.tanggal }}</p>
          </div>
          <div>
            <label for="paket" class="mb-1.5 block text-sm font-extrabold text-loam">Paket yang diminati *</label>
            <select id="paket" v-model="form.paket"
              class="h-12 w-full appearance-none rounded-full border border-timber bg-white/50 px-5 text-sm font-semibold outline-none transition-all focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2">
              <option value="" disabled>Pilih paket</option>
              <option v-for="p in paketMenu" :key="p.nama" :value="p.nama">{{ p.nama }} — {{ rupiah(p.harga) }}/{{ p.satuan }}</option>
            </select>
            <p v-if="errors.paket" class="mt-1 text-xs font-bold text-sienna">{{ errors.paket }}</p>
          </div>
          <div>
            <label for="porsi" class="mb-1.5 block text-sm font-extrabold text-loam">Jumlah porsi / box *</label>
            <input id="porsi" v-model.number="form.porsi" type="number" min="10" step="10" placeholder="cth. 200"
              class="h-12 w-full rounded-full border border-timber bg-white/50 px-5 text-sm outline-none transition-all placeholder:text-grass/70 focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2" />
            <p v-if="errors.porsi" class="mt-1 text-xs font-bold text-sienna">{{ errors.porsi }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="catatan" class="mb-1.5 block text-sm font-extrabold text-loam">Catatan tambahan</label>
            <textarea id="catatan" v-model="form.catatan" rows="3" placeholder="cth. 20 porsi vegetarian, antar jam 9 pagi ke Gedung Sleman…"
              class="w-full rounded-[1.5rem] border border-timber bg-white/50 px-5 py-4 text-sm outline-none transition-all placeholder:text-grass/70 focus-visible:ring-2 focus-visible:ring-moss/30 focus-visible:ring-offset-2"></textarea>
          </div>
        </div>

        <p v-if="formError" class="mt-4 rounded-2xl bg-sienna/10 px-5 py-3 text-sm font-bold text-sienna">{{ formError }}</p>

        <button type="submit"
          class="mt-6 w-full rounded-full bg-moss px-8 py-4 text-base font-bold text-mist shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-lift active:scale-95">
          <i class="fa-brands fa-whatsapp mr-2"></i>Kirim Pesanan via WhatsApp
        </button>
        <p class="mt-3 text-center text-xs text-grass">Terkirim ke 0822-5304-4857 · balasan di jam kerja maks. 3 jam</p>
      </form>

      <!-- Estimasi + kontak -->
      <aside class="space-y-6 lg:col-span-2">
        <div class="card-radius-3 sticky top-24 border border-timber/50 bg-moss p-8 text-mist shadow-float">
          <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-sand">Estimasi otomatis</p>
          <p class="font-display mt-3 text-4xl font-bold">{{ rupiah(estimasi) }}</p>
          <p class="mt-1 text-sm text-mist/80">{{ ringkasanEstimasi }}</p>
          <div class="mt-5 border-t border-white/15 pt-5 text-sm">
            <p class="flex justify-between py-1"><span class="text-mist/75">DP kunci tanggal (30%)</span><strong>{{ rupiah(dp) }}</strong></p>
            <p class="flex justify-between py-1"><span class="text-mist/75">Pelunasan H-3</span><strong>{{ rupiah(estimasi - dp) }}</strong></p>
          </div>
          <p class="mt-4 text-xs leading-relaxed text-mist/70">Estimasi kotor sebelum ongkir & tambah stall. Harga final kami kunci di surat penawaran resmi.</p>
        </div>
        <div class="card-radius-4 border border-timber/50 bg-cream p-8 shadow-soft">
          <h3 class="font-display text-xl font-bold text-loam">Lebih suka langsung ngobrol?</h3>
          <ul class="mt-4 space-y-3 text-sm font-semibold text-bark">
            <li><i class="fa-brands fa-whatsapp mr-2 text-moss"></i>0822-5304-4857 (chat only, fast respon)</li>
            <li><i class="fa-solid fa-location-dot mr-2 text-clay"></i>Jl. Kaliurang KM 7, Sleman</li>
            <li><i class="fa-solid fa-clock mr-2 text-clay"></i>Senin–Sabtu, 07.00–19.00</li>
          </ul>
        </div>
      </aside>
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">Masih bingung?</p>
        <h2 class="font-display mt-3 text-4xl font-bold text-loam">Jawaban singkatnya ada di sini.</h2>
      </div>
      <FaqAccordion :daftar="faq" class="mt-10" />
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import { faq, paketMenu, rupiah, waLink } from '@/data/catering.js'

const jenisAcara = ['Hajatan / Syukuran', 'Kantor / Rapat', 'Ulang Tahun / Arisan', 'Aqiqah', 'Harian / Rantangan', 'Lainnya']
const hariIni = new Date().toISOString().split('T')[0]

const form = reactive({
  nama: '',
  telepon: '',
  jenis: '',
  tanggal: '',
  paket: '',
  porsi: null,
  catatan: '',
})
const errors = reactive({})
const formError = ref('')

const paketDipilih = computed(() => paketMenu.find((p) => p.nama === form.paket))
const estimasi = computed(() =>
  paketDipilih.value && Number(form.porsi) > 0
    ? paketDipilih.value.harga * Number(form.porsi)
    : 0,
)
const dp = computed(() => Math.round(estimasi.value * 0.3))
const ringkasanEstimasi = computed(() =>
  paketDipilih.value && Number(form.porsi) > 0
    ? `${Number(form.porsi).toLocaleString('id-ID')} × ${paketDipilih.value.nama}`
    : 'Pilih paket & isi jumlah porsi',
)

const tanggalBagus = (str) =>
  new Date(str + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })

const validasi = () => {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (form.nama.trim().length < 3) errors.nama = 'Isi nama minimal 3 huruf.'
  if (!/^[0-9+ ]{9,16}$/.test(form.telepon.trim())) errors.telepon = 'Nomor HP 9–16 digit angka.'
  if (!form.jenis) errors.jenis = 'Pilih jenis acara dulu.'
  if (!form.tanggal) errors.tanggal = 'Pilih tanggal acara.'
  else if (form.tanggal < hariIni) errors.tanggal = 'Tanggal tidak boleh mundur ke masa lalu.'
  if (!form.paket) errors.paket = 'Pilih salah satu paket.'
  if (!Number(form.porsi) || Number(form.porsi) < 10) errors.porsi = 'Minimal 10 porsi.'
  return Object.keys(errors).length === 0
}

const kirimKeWa = () => {
  formError.value = ''
  if (!validasi()) {
    formError.value = 'Ada yang belum lengkap — cek kolom bertanda merah di atas.'
    return
  }
  const pesan = [
    'Halo DapurNaya! Saya mau memesan catering.',
    '',
    `Nama: ${form.nama.trim()}`,
    `Jenis acara: ${form.jenis}`,
    `Tanggal: ${tanggalBagus(form.tanggal)}`,
    `Paket: ${form.paket} (${rupiah(paketDipilih.value.harga)}/${paketDipilih.value.satuan})`,
    `Jumlah: ${Number(form.porsi).toLocaleString('id-ID')} porsi`,
    `Estimasi: ${rupiah(estimasi.value)}`,
    form.catatan.trim() ? `Catatan: ${form.catatan.trim()}` : null,
  ].filter(Boolean).join('\n')
  window.open(waLink(pesan), '_blank')
}
</script>
