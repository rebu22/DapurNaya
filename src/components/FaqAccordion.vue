<template>
  <div class="mx-auto max-w-4xl">
    <details
      v-for="(item, i) in daftar"
      :key="i"
      class="group mb-4 overflow-hidden rounded-3xl border border-timber/50 bg-cream shadow-soft open:shadow-float"
    >
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left font-extrabold text-loam [&::-webkit-details-marker]:hidden">
        <span class="flex items-center gap-4">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
            <i class="fa-solid fa-circle-question"></i>
          </span>
          {{ item.tanya }}
        </span>
        <i class="fa-solid fa-chevron-down shrink-0 text-clay transition-transform duration-300 group-open:rotate-180"></i>
      </summary>
      <p class="px-6 pb-6 pl-[4.5rem] text-[15px] leading-relaxed text-bark">{{ item.jawab }}</p>
    </details>
  </div>
</template>

<script setup>
defineProps({
  daftar: { type: Array, required: true },
})
</script>
