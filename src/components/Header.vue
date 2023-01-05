<template>
  <v-app-bar
    app
    elevation="0"
    :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
    class="app-bar"
    height="75px"
  >
    <v-btn
      class="ml-2"
      icon
      x-large
      @click="$router.push({ name: $routeNames.HOME })"
      color="transparent"
    >
      <v-avatar size="45">
        <img src="@/assets/logo.webp" alt="alt" />
      </v-avatar>
    </v-btn>
    <v-spacer />
    <v-text-field
      class="mt-5"
      dense
      filled
      rounded
      clearable
      placeholder="Not ya da kişi ara"
      clear-icon="close"
    >
      <template v-slot:append-outer>
        <v-btn icon plain style="top: -12px">
          <v-icon>search</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <v-spacer />
    <AccountButton />
  </v-app-bar>
</template>

<script>
import AccountButton from "./header_addition/AccountButton.vue";
export default {
  components: {
    AccountButton,
  },
};
</script>

<style></style>
