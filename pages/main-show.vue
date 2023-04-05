<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="main">
    <header class="grid w-full grid-cols-12 gap-x-4">
      <div class="flex flex-col h-full col-span-10 place-content-center">
        <Banner />
      </div>
      <div class="col-span-2">
        <CamFrame />
      </div>
    </header>

    <section class="grid flex-1 w-full grid-cols-12 gap-x-4">
      <div class="flex flex-col h-full col-span-10 place-content-center">
        <ScreenFrame />
      </div>
      <div class="col-span-2">
        <ChatFrame />
      </div>
    </section>

    <section class="flex items-center justify-between w-full">
      <div class="w-10/12">Stats</div>
      <div class="flex flex-col items-center justify-center w-2/12">
        <SocialSection />
      </div>
    </section>
  </NuxtLayout>
</template>
