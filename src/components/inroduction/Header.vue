<template>
  <v-app-bar elevation="0" class="flex text-center" height="120px">
    <v-btn
      class="ml-2 mr-5"
      icon
      aria-label="account-button"
      @click="switchDarkMode"
    >
      <v-icon>nights_stay</v-icon>
    </v-btn>
    <v-spacer />

    <v-avatar size="45">
      <img src="@/assets/logo.webp" width="100%;" alt="avatar" />
    </v-avatar>
    {{ this.$variables.APP_NAME }}

    <v-spacer />

    <v-btn
      :to="{ name: this.$routeNames.LOGIN }"
      class="ml-5 mr-2"
      icon
      aria-label="account-button"
    >
      <v-icon>login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    switchDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$functions.callSnackBar(
        this.$vuetify.theme.dark
          ? "Karanlık mod Aktif edildi"
          : "Aydınlık mod Aktif edildi"
      );

      localStorage.setItem(
        this.$variables.IS_DARK_MODE,
        this.$vuetify.theme.dark.toString()
      );
    },
  },
};
</script>
