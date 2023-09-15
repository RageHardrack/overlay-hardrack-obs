<script setup lang="ts">
const { data } = await useFetch("/api/auth/twitch/get-token");
</script>

<template>
  <div>
    hola mundo

    {{ data }}
  </div>
</template>
