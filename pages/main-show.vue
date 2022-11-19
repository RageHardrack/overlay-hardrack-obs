<script setup lang="ts">
definePageMeta({
  layout: false
})</script>

<template>
  <NuxtLayout name="main">
    <section class="flex flex-col items-center justify-between w-10/12">
      <div>Banner</div>
      <ScreenFrame />
      <div>Stats</div>
    </section>

    <section class="flex flex-col w-2/12 space-y-4">
      <CamFrame />
      <ChatFrame />
      <SocialFrame/>
    </section>
  </NuxtLayout>
</template>
