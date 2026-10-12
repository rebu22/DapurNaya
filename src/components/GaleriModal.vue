<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[80] flex items-center justify-center bg-loam/70 p-4 backdrop-blur-sm"
        @click.self="tutup"
        role="dialog"
        aria-modal="true"
        aria-label="Pratinjau foto galeri"
      >
        <div class="card-radius-2 w-full max-w-3xl overflow-hidden bg-cream shadow-float">
          <img :src="foto.src" :alt="foto.judul" class="max-h-[70vh] w-full object-cover" />
          <div class="flex items-center justify-between gap-4 p-5 sm:p-6">
            <div>
              <p class="text-xs font-extrabold uppercase tracking-[0.18em] text-clay">{{ foto.kategori }}</p>
              <p class="font-display mt-1 text-xl font-bold text-loam">{{ foto.judul }}</p>
            </div>
            <button
              @click="tutup"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-moss text-mist transition-all duration-300 hover:scale-105 hover:bg-sienna active:scale-95"
              aria-label="Tutup pratinjau"
            >
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  foto: { type: Object, default: () => ({ src: '', judul: '', kategori: '' }) },
})
const emit = defineEmits(['update:modelValue'])

const tutup = () => emit('update:modelValue', false)

watch(
  () => props.modelValue,
  (buka) => {
    document.body.style.overflow = buka ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') tutup() }
    if (buka) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)
</script>
