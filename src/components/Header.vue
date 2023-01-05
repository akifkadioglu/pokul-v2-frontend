<template>
  <div>
    <v-app-bar
      app
      elevation="0"
      :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
      class="app-bar"
      height="75px"
    >
      <v-btn @click="drawer = !drawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn
        icon
        x-large
        @click="$router.push({ name: $routeNames.HOME })"
        color="transparent"
      >
        <v-avatar size="45">
          <img src="@/assets/logo.webp" width="100%;" alt="alt" />
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
          <v-btn
            icon
            :color="buttonColors"
            style="top: -12px"
            aria-label="search-button"
          >
            <v-icon class="material-icons">search</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-spacer />

      <v-btn
        :to="{ name: $routeNames.ACCOUNT }"
        icon
        dark
        :color="buttonColors"
        aria-label="account-button"
      >
        <v-avatar>
          <img
            style="object-fit: cover"
            src="https://i0.wp.com/www.indir.com/haber/wp-content/uploads/2021/11/anonimsinde-hesaba-profil-fotografi-nasil-eklenir-.jpg?resize=1440%2C720&ssl=1"
          />
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <Drawer :drawer="drawer" @closeDrawer="drawer = false" />
  </div>
</template>

<script>
import Drawer from "./header_additions/Drawer.vue";
export default {
  components: {
    Drawer,
  },
  computed: {
    accountButtonIcon() {
      return this.$route.name == this.$routeNames.ACCOUNT
        ? "person"
        : "person_outline";
    },
    buttonColors() {
      return this.$vuetify.theme.dark ? "white" : "black";
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scope>
.v-btn::before {
  background-color: transparent;
}
</style>
