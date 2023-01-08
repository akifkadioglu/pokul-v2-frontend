<template>
  <v-btn
    aria-label="home-button"
    class="mr-2"
    icon
    x-large
    @click="$router.push({ name: $routeNames.INTRODUCTION })"
    color="transparent"
  >
    <v-avatar size="45">
      <img src="@/assets/logo.webp" width="45px" height="45px" alt="avatar" />
    </v-avatar>
  </v-btn>
</template>
