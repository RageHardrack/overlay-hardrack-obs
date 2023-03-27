<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="main">
    <header class="flex items-center justify-between w-full">
      <Banner />
      <CamFrame />
    </header>

    <section class="flex items-center justify-between flex-1 w-full gap-x-4">
      <div class="w-10/12">
        <ScreenFrame />
      </div>
      <div class="w-2/12 h-full">
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
