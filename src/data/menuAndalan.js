// ============================================================
//  CARA GANTI MENU (untuk orang awam, baca ini aja!)
// ------------------------------------------------------------
//  1. Mau ganti nama / harga / deskripsi?
//     -> Edit tulisan di bawah ini aja (nama, harga, satuan, tag, deskripsi, isi)
//  2. Mau ganti foto?
//     -> Kalau sudah punya foto asli: taruh file fotonya di folder public/images/
//        (misal: public/images/bebek.jpg) lalu tulis gambar: '/images/bebek.jpg'
//     -> Kalau belum punya: biarkan link https://... seperti sekarang
//  3. Mau nambah menu baru?
//     -> Copy 1 blok { ... } paling bawah, paste di bawahnya, ubah isinya
//  4. Selesai edit? Jalankan 3 perintah ini biar tayang di web:
//       git add . && git commit -m "update menu" && git push
//     Tunggu 1-2 menit, web Vercel update sendiri. Beres!
// ============================================================

export const menuAndalan = [
  {
    // ---- MENU 1 ----
    nama: 'Donat Kentang',
    harga: 15000, // angka aja, tanpa titik. Contoh: 15000 = Rp 15.000
    satuan: 'box isi 6', // contoh: 'box', 'porsi', 'paket 10 porsi'
    tag: 'Favorit anak-anak',
    deskripsi:
      'Donat kentang empuk, manisnya pas, topping melimpah. Cocok untuk arisan, ulang tahun, dan snack box.',
    gambar:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop',
    isi: ['Kentang asli, empuk', 'Topping coklat & keju', 'Box isi 6'],
  },
  {
    // ---- MENU 2 ----
    nama: 'Tumpeng Kuning',
    harga: 350000,
    satuan: 'paket 10 porsi',
    tag: 'Untuk syukuran',
    deskripsi:
      'Tumpeng kuning gurih dengan lauk lengkap dan hiasan cantik. Siap saji untuk syukuran dan hajatan.',
    gambar:
      'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80&auto=format&fit=crop',
    isi: ['Ingkung ayam utuh', 'Urap & kering tempe', 'Telur balado', 'Hiasan tumpeng'],
  },
  {
    // ---- MENU 3 ----
    nama: 'Bebek Rica-Rica',
    harga: 35000,
    satuan: 'porsi',
    tag: 'Andalan Ibu',
    deskripsi:
      'Menu paling sering dipesan! Bebek empuk dimasak pelan, bumbu rica medok, pedasnya nagih. Resep keluarga.',
    gambar:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop',
    isi: ['Bebek empuk', 'Bumbu rica medok', 'Nasi hangat + lalapan'],
  },
]

// Catatan: daftar lengkap semua paket (untuk halaman /paket) tetap diambil
// dari paketMenu di bawah. Kalau mau halaman paket juga ikut 3 menu ini aja,
// bilang ke admin (aku), nanti aku sambungkan.
