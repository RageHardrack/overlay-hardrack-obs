<template>
  <NuxtLayout name="main">
    <section class="flex flex-col w-10/12 items-center justify-between">
      <div>Banner</div>
      <ScreenFrame />
      <div>Stats</div>
    </section>

    <section class="w-2/12 flex flex-col space-y-4">
      <CamFrame />
      <ChatFrame />
      <div>Redes Sociales</div>
    </section>
  </NuxtLayout>
</template>
