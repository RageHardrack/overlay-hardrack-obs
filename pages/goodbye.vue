<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<template>
  <header class="grid w-full grid-cols-12 row-span-1 gap-x-4">
    <div class="col-span-12">
      <Banner />
    </div>
  </header>

  <section class="flex flex-col items-center justify-center row-span-4 gap-4">
    <h2 class="text-5xl uppercase neonText font-roboto-mono">
      El Stream ha finalizado:
    </h2>
    <div class="text-5xl font-semibold neonText font-roboto-mono">
      ¡Muchas gracias a todos!
    </div>
  </section>
</template>
