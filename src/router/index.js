import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { judul: 'Beranda' },
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: () => import('../views/LayananView.vue'),
      meta: { judul: 'Layanan' },
    },
    {
      path: '/paket',
      name: 'paket',
      component: () => import('../views/PaketView.vue'),
      meta: { judul: 'Paket Menu' },
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/GaleriView.vue'),
      meta: { judul: 'Galeri' },
    },
    {
      path: '/pemesanan',
      name: 'pemesanan',
      component: () => import('../views/PemesananView.vue'),
      meta: { judul: 'Pemesanan' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue'),
      meta: { judul: 'Halaman tidak ditemukan' },
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = to.meta.judul
    ? `${to.meta.judul} — DapurNaya Catering`
    : 'DapurNaya Catering — Hangatnya Sajian Rumahan'
})

export default router
