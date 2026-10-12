export const WA_NUMBER = '6282253044857'

export const waLink = (pesan) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')

export const layanan = [
  {
    ikon: 'fa-solid fa-heart',
    judul: 'Pernikahan & Akad',
    deskripsi:
      'Paket prasmanan lengkap dari 200 sampai 2.000 pax. Ada food stall, dekorasi meja saji, dan tim yang siaga sampai acara selesai.',
    poin: ['Prasmanan & stall', 'Dekorasi meja saji', 'Tim pelayan penuh'],
  },
  {
    ikon: 'fa-solid fa-briefcase',
    judul: 'Kantor & Rapat',
    deskripsi:
      'Nasi box, snack box, dan coffee break untuk meeting harian sampai gathering. Diantar tepat waktu, lengkap dengan label nama.',
    poin: ['Nasi box & snack box', 'Coffee break', 'Faktur perusahaan'],
  },
  {
    ikon: 'fa-solid fa-mosque',
    judul: 'Hajatan & Syukuran',
    deskripsi:
      'Tumpeng, ingkung, aqiqah, sampai berkat untuk dibawa pulang. Resep rumahan yang sudah dipercaya keluarga sejak 2015.',
    poin: ['Tumpeng & ingkung', 'Paket aqiqah', 'Berkat siap bagi'],
  },
  {
    ikon: 'fa-solid fa-bowl-food',
    judul: 'Harian & Rantangan',
    deskripsi:
      'Langganan makan siang rumah atau kos. Menu ganti tiap hari, tanpa pengawet, diantar hangat pagi dan siang.',
    poin: ['Menu ganti harian', 'Paket mingguan', 'Antar pagi & siang'],
  },
  {
    ikon: 'fa-solid fa-cake-candles',
    judul: 'Ulang Tahun & Arisan',
    deskripsi:
      'Mini buffet, kue, dan snack tampah untuk acara santai di rumah. Porsi bisa disesuaikan, anak-anak sampai oma opa suka.',
    poin: ['Mini buffet', 'Kue & snack tampah', 'Porsi fleksibel'],
  },
  {
    ikon: 'fa-solid fa-truck-fast',
    judul: 'Pesan Antar Acara',
    deskripsi:
      'Butuh cepat untuk pengajian atau kumpul keluarga? Pesan H-2 untuk box, H-7 untuk prasmanan. Armada kami menjangkau Sleman, Bantul, dan Kota.',
    poin: ['Box H-2', 'Prasmanan H-7', 'Area Jogja & sekitar'],
  },
]

export const paketMenu = [
  {
    nama: 'Nasi Box Klasik',
    harga: 25000,
    satuan: 'box',
    tag: 'Paling laris',
    deskripsi:
      'Ayam goreng lengkuas, sambal terasi, lalapan segar, tahu tempe, kerupuk, buah, dan air mineral.',
    gambar:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80&auto=format&fit=crop',
    isi: ['Nasi putih pulen', 'Ayam goreng lengkuas', 'Sambal + lalapan', 'Buah & air mineral'],
  },
  {
    nama: 'Nasi Box Rendang',
    harga: 32000,
    satuan: 'box',
    tag: 'Lauk premium',
    deskripsi:
      'Rendang sapi empuk dimasak 6 jam, gulai nangka, sayur singkong, emping, dan puding santan.',
    gambar:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80&auto=format&fit=crop',
    isi: ['Nasi putih pulen', 'Rendang sapi', 'Gulai nangka', 'Emping & puding'],
  },
  {
    nama: 'Prasmanan Hajatan',
    harga: 45000,
    satuan: 'pax',
    tag: 'Min. 100 pax',
    deskripsi:
      'Dua lauk utama, satu sayur, aneka sambal, buah, dan dessert. Termasuk alat saji, pramusaji, dan dekorasi meja.',
    gambar:
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80&auto=format&fit=crop',
    isi: ['2 lauk utama', 'Sayur + sambal', 'Buah & dessert', 'Pramusaji + dekorasi'],
  },
  {
    nama: 'Prasmanan Pernikahan',
    harga: 65000,
    satuan: 'pax',
    tag: 'Min. 200 pax',
    deskripsi:
      'Tiga lauk utama, carving station, 2 stall (bakso & siomay), salad buah, aneka dessert, dan infused water.',
    gambar:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop',
    isi: ['3 lauk + carving', '2 food stall', 'Salad & dessert', 'Dekorasi premium'],
  },
  {
    nama: 'Tumpeng Kuning',
    harga: 350000,
    satuan: 'paket 10 porsi',
    tag: 'Untuk syukuran',
    deskripsi:
      'Tumpeng kuning gurih dengan ingkung ayam utuh, urap, kering tempe, telur balado, dan hiasan tumpeng cantik.',
    gambar:
      'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80&auto=format&fit=crop',
    isi: ['Ingkung ayam utuh', 'Urap & kering tempe', 'Telur balado', 'Hiasan tumpeng'],
  },
  {
    nama: 'Snack Box Sore',
    harga: 15000,
    satuan: 'box',
    tag: 'Min. 30 box',
    deskripsi:
      'Tiga macam jajan pasar (lemper, dadar gulung, kroket), satu kue premium, dan teh atau kopi.',
    gambar:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80&auto=format&fit=crop',
    isi: ['3 jajan pasar', '1 kue premium', 'Teh / kopi'],
  },
  {
    nama: 'Rantangan Harian',
    harga: 20000,
    satuan: 'porsi',
    tag: 'Langganan',
    deskripsi:
      'Satu lauk hewani, satu lauk nabati, sayur, dan buah. Menu berbeda setiap hari, diantar pagi dan siang.',
    gambar:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop',
    isi: ['Lauk hewani + nabati', 'Sayur & buah', 'Menu ganti harian'],
  },
  {
    nama: 'Aqiqah Lengkap',
    harga: 1800000,
    satuan: 'paket 50 box',
    tag: 'Terima beres',
    deskripsi:
      'Satu ekor kambing dimasak gulai dan tengkleng, 50 box nasi, sate 100 tusuk, plus sertifikat dan kartu ucapan.',
    gambar:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop',
    isi: ['Gulai & tengkleng', '50 box nasi', 'Sate 100 tusuk', 'Kartu ucapan'],
  },
  {
    nama: 'Coffee Break Kantor',
    harga: 18000,
    satuan: 'pax',
    tag: 'Min. 20 pax',
    deskripsi:
      'Kopi tubruk dan teh manis panas, dua snack (pisang goreng & pastel), plus air mineral. Termasuk dispenser dan gelas.',
    gambar:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80&auto=format&fit=crop',
    isi: ['Kopi & teh panas', '2 snack hangat', 'Dispenser + gelas'],
  },
]

export const galeri = [
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop',
    judul: 'Prasmanan pernikahan, Gedung Sleman',
    kategori: 'Pernikahan',
  },
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80&auto=format&fit=crop',
    judul: 'Buffet hajatan 500 pax',
    kategori: 'Hajatan',
  },
  {
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80&auto=format&fit=crop',
    judul: 'Nasi box rapat dinas',
    kategori: 'Kantor',
  },
  {
    src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80&auto=format&fit=crop',
    judul: 'Tumpeng syukuran 7 bulanan',
    kategori: 'Syukuran',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop',
    judul: 'Rantangan harian pelanggan',
    kategori: 'Harian',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop',
    judul: 'Hidangan aqiqah kambing',
    kategori: 'Aqiqah',
  },
  {
    src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80&auto=format&fit=crop',
    judul: 'Rendang dimasak 6 jam',
    kategori: 'Dapur',
  },
  {
    src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80&auto=format&fit=crop',
    judul: 'Snack box pengajian',
    kategori: 'Kantor',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop',
    judul: 'Dekorasi meja saji',
    kategori: 'Pernikahan',
  },
]

export const testimoni = [
  {
    nama: 'Bu Ratna Wijaya',
    acara: 'Pernikahan putri — 800 tamu',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop',
    isi: 'Rendangnya sampai ditanya resep sama tamu. Pramusajinya rapi, meja saji tidak pernah kosong. Ibu tenang sepanjang acara.',
  },
  {
    nama: 'Pak Bambang Sutrisno',
    acara: 'Rapat kantor rutin',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    isi: 'Sudah 2 tahun langganan snack box untuk meeting. Tidak pernah telat, rasanya konsisten, adminnya gampang dihubungi.',
  },
  {
    nama: 'Keluarga H. Mahmud',
    acara: 'Aqiqah cucu kembar',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
    isi: 'Terima beres dari sembelih sampai box dibagikan ke tetangga. Tengklengnya juara, banyak yang nambah.',
  },
]

export const langkahPesan = [
  {
    ikon: 'fa-solid fa-comments',
    judul: 'Ceritakan acaramu',
    deskripsi: 'Isi form atau chat WhatsApp: tanggal, jumlah tamu, dan budget. Kami balas dengan rekomendasi menu di hari yang sama.',
  },
  {
    ikon: 'fa-solid fa-utensils',
    judul: 'Test food & deal',
    deskripsi: 'Cicipi 3–5 menu pilihan di dapur kami (gratis untuk paket di atas 200 pax), lalu kunci tanggal dengan DP 30%.',
  },
  {
    ikon: 'fa-solid fa-kitchen-set',
    judul: 'Kami yang masak',
    deskripsi: 'Tim datang H-1 untuk persiapan dan standby penuh di hari H. Kamu tinggal menyambut tamu dengan tenang.',
  },
]

export const faq = [
  {
    tanya: 'Berapa hari sebelumnya harus memesan?',
    jawab: 'Nasi box dan snack box minimal H-2. Prasmanan hajatan H-7, pernikahan H-30 agar tanggal terkunci. Kalau mendadak, chat saja dulu — sering masih bisa kami selipkan.',
  },
  {
    tanya: 'Apakah bisa test food dulu?',
    jawab: 'Bisa. Untuk paket prasmanan di atas 200 pax, test food 3–5 menu gratis di dapur kami, Jl. Kaliurang KM 7, Sleman. Di bawah itu dikenakan Rp 75.000 yang dipotong dari DP kalau jadi memesan.',
  },
  {
    tanya: 'Bagaimana sistem pembayarannya?',
    jawab: 'DP 30% untuk kunci tanggal, pelunasan H-3 sebelum acara. Bisa transfer bank, QRIS, atau tunai. Untuk instansi kami sediakan faktur dan bisa termin.',
  },
  {
    tanya: 'Apakah ada paket untuk budget di bawah Rp 20.000 per pax?',
    jawab: 'Ada. Paket snack box mulai Rp 15.000 dan nasi box klasik Rp 25.000. Untuk prasmanan, opsi paling hemat mulai Rp 35.000/pax dengan minimal 150 pax — chat saja, nanti kami susunkan.',
  },
  {
    tanya: 'Area mana saja yang dilayani?',
    jawab: 'Sleman, Kota Yogyakarta, dan Bantul tanpa ongkir untuk 100 pax ke atas. Kulon Progo, Gunungkidul, dan Klaten bisa dengan tambahan ongkos armada — tanya dulu biar jelas.',
  },
]
