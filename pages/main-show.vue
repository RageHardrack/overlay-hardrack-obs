<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<template>
  <header class="grid w-full grid-cols-12 row-span-1 gap-x-4">
    <div class="flex w-full col-span-10">
      <Banner />
    </div>
    <div class="col-span-2 w-[260px] h-full">
      <CamFrame />
    </div>
  </header>

  <section class="grid w-full grid-cols-12 row-span-4 gap-x-4">
    <div class="flex flex-col h-full col-span-10 place-content-center">
      <ScreenFrame />
    </div>
    <div class="col-span-2">
      <ChatFrame />
    </div>
  </section>

  <footer class="flex items-center justify-between w-full row-span-1">
    <div class="w-10/12">Stats</div>
    <div class="flex flex-col items-center justify-center w-2/12">
      <SocialSection />
    </div>
  </footer>
</template>
