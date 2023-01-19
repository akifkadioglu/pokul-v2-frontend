<template>
  <div>
    <v-app-bar
      app
      elevation="0"
      :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
      height="75px"
    >
      <v-btn aria-label="drawer-button" @click="drawer = !drawer" icon>
        <v-icon>{{ $icons.MENU }}</v-icon>
      </v-btn>

      <HomeButton />

      <v-spacer />

      <SearchBar />

      <v-spacer />
      <ProfileButton class="ml-5 mr-2" :username="$storage.pull($variables.USERNAME)" />
    </v-app-bar>
    <Drawer :drawer="drawer" @closeDrawer="drawer = false" />
  </div>
</template>

<script>
import Drawer from "./header_additions/Drawer.vue";
import HomeButton from "./header_additions/HomeButton.vue";
import ProfileButton from "./header_additions/ProfileButton.vue";
import SearchBar from "./header_additions/SearchBar.vue";
export default {
  components: {
    Drawer,
    SearchBar,
    ProfileButton,
    HomeButton,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
