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

  <section class="grid w-full grid-cols-12 row-span-5">
    <div class="col-span-12">
      <CamFrame />
    </div>
  </section>
</template>
