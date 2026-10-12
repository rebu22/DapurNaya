<template>
  <figure class="lift h-full border border-timber/50 bg-cream p-8 shadow-soft hover:rotate-1 hover:shadow-lift" :class="radiusClass">
    <div class="flex gap-1 text-clay" aria-label="Rating 5 dari 5">
      <i v-for="n in 5" :key="n" class="fa-solid fa-star text-sm"></i>
    </div>
    <blockquote class="mt-4 flex-1 text-[15px] leading-relaxed text-bark">
      “{{ data.isi }}”
    </blockquote>
    <figcaption class="mt-6 flex items-center gap-4 border-t border-timber/50 pt-5">
      <img :src="data.foto" :alt="'Foto ' + data.nama" class="blob-a h-14 w-14 object-cover" loading="lazy" />
      <span>
        <span class="block font-extrabold text-loam">{{ data.nama }}</span>
        <span class="block text-xs font-bold text-grass">{{ data.acara }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  data: { type: Object, required: true },
  radiusClass: { type: String, default: 'card-radius-1' },
})
</script>
