<template>
  <div>
    <v-app-bar
      app
      elevation="0"
      :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
      height="75px"
    >
      <v-btn aria-label="drawer-button" @click="drawer = !drawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn
        aria-label="home-button"
        class="mr-2"
        icon
        x-large
        @click="$router.push({ name: $routeNames.INTRODUCTION })"
        color="transparent"
      >
        <v-avatar size="45">
          <img src="@/assets/logo.webp" width="100%;" alt="avatar" />
        </v-avatar>
      </v-btn>
      <v-spacer />
      <SearchBar />
      <v-spacer />

      <v-btn
        :to="{ name: $routeNames.ACCOUNT }"
        class="ml-5 mr-2"
        icon
        dark
        :color="buttonColors"
        aria-label="account-button"
        width="35"
        height="35"
      >
        <v-avatar size="35">
          <img
            alt="profile photo"
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
import SearchBar from "./header_additions/SearchBar.vue";
export default {
  components: {
    Drawer,
    SearchBar,
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
