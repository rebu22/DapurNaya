<template>
  <div class="lift h-full border border-timber/50 bg-cream p-8 shadow-soft hover:shadow-lift" :class="radiusClass">
    <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/10 text-[28px] text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-white">
      <i :class="item.ikon"></i>
    </span>
    <h3 class="font-display mt-6 text-2xl font-bold text-loam">{{ item.judul }}</h3>
    <p class="mt-3 text-sm leading-relaxed text-bark">{{ item.deskripsi }}</p>
    <ul class="mt-5 space-y-2 border-t border-timber/50 pt-5">
      <li v-for="poin in item.poin" :key="poin" class="flex items-center gap-2 text-sm font-bold text-moss">
        <i class="fa-solid fa-check text-clay"></i>{{ poin }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  radiusClass: { type: String, default: 'card-radius-1' },
})
</script>
