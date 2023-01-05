<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    stateless
    v-click-outside="onClickOutside"
  >
    <v-list dense flat>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="@/assets/logo.webp" width="100%;" alt="alt" />
        </v-list-item-avatar>

        <v-list-item-content>
          <div>{{ this.$variables.APP_NAME }}</div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        tile
        v-for="(item, index) in items"
        :key="index"
        :to="{ name: item.page }"
        dense
        exact
        active-class="teal--text "
      >
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-switch
            aria-label="dark-mode-switch"
            :value="$vuetify.theme.dark"
            @change="switchDarkMode"
            inset
          >
            <template v-slot:prepend>
              <v-icon class="mr-5 ml-1"> nights_stay </v-icon>
            </template>
          </v-switch>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        {
          title: "Ana Sayfa",
          icon: "home",
          page: this.$routeNames.HOME,
        },
        {
          title: "Hesabım",
          icon: "person",
          page: this.$routeNames.ACCOUNT,
        },
      ],
    };
  },
  methods: {
    onClickOutside(e) {
      if (e.target.className === "v-overlay__scrim") {
        this.$emit("closeDrawer");
      }
    },
    switchDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.state.isSnackbarOpen = true;
      this.$store.state.snackbarText = this.$vuetify.theme.dark
        ? "Karanlık mod Aktif edildi"
        : "Aydınlık mod Aktif edildi";
      localStorage.setItem(
        this.$variables.IS_DARK_MODE,
        this.$vuetify.theme.dark.toString()
      );
    },
  },
};
</script>
