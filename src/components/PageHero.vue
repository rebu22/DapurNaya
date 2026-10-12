<template>
  <section class="relative overflow-hidden py-20">
    <slot name="blob" />
    <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
      <p v-if="eyebrow" class="inline-flex items-center gap-2 rounded-full border border-timber/60 bg-white/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-moss">
        <i v-if="ikon" :class="ikon" class="text-clay"></i>{{ eyebrow }}
      </p>
      <h1 v-if="level === 'h1'" class="font-display mt-5 text-4xl font-bold leading-tight text-loam md:text-6xl">{{ judul }}</h1>
      <h2 v-else class="font-display mt-5 text-4xl font-bold leading-tight text-loam md:text-5xl">{{ judul }}</h2>
      <p v-if="deskripsi" class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-bark md:text-lg">{{ deskripsi }}</p>
      <div v-if="$slots.aksi" class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <slot name="aksi" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  ikon: { type: String, default: '' },
  judul: { type: String, required: true },
  deskripsi: { type: String, default: '' },
  level: { type: String, default: 'h1' },
})
</script>
