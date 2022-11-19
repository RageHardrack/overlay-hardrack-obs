<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="main">
    <section class="flex flex-col items-center w-10/12 justify-evenly">
      <Banner />
      <ScreenFrame />
      <div>Stats</div>
    </section>

    <section class="flex flex-col w-2/12 space-y-4">
      <CamFrame />
      <ChatFrame />
      <SocialSection />
    </section>
  </NuxtLayout>
</template>
