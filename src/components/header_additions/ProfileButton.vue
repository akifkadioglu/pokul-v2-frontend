<template>
  <v-btn
    :to="{ name: $routeNames.ACCOUNT }"
    icon
    dark
    aria-label="account-button"
    width="40"
    height="40"
  >
    <v-avatar color="red" size="40">
      {{ "Akif".slice(0, 2).toUpperCase() }}
    </v-avatar>
  </v-btn>
</template>
