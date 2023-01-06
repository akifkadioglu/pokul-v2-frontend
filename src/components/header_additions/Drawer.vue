<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    stateless
    v-click-outside="onClickOutside"
  >
    <v-list dense flat>
      <v-list-item two-line @click="$router.push({ name: $routeNames.HOME })">
        <v-list-item-avatar>
          <img src="@/assets/logo.webp" width="100%" alt="avatar" />
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
        active-class="teal--text"
      >
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="switchDarkMode">
        <v-list-item-avatar>
          <v-icon>nights_stay</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $t($keys.DARK_MODE) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group :value="false" no-action append-icon="expand_more">
        <template v-slot:activator>
          <v-list-item-avatar>
            <v-icon> translate </v-icon>
          </v-list-item-avatar>
          <v-list-item-title>{{ $t($keys.LANGUAGES) }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, index) in languages"
          :key="index"
          @click="switchLanguage(item.code)"
        >
          <v-list-item-title>{{ $t(item.lang) }}</v-list-item-title>
          <v-list-item-icon v-if="$i18n.locale == item.code">
            <v-icon>check</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
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
  mounted() {},
  data() {
    return {
      languages: [
        {
          lang: this.$keys.TURKISH,
          code: this.$variables.TURKISH,
        },
        {
          lang: this.$keys.ENGLISH,
          code: this.$variables.ENGLISH,
        },
      ],
      items: [
        {
          title: this.$keys.HOME_PAGE,
          icon: "home",
          page: this.$routeNames.HOME,
        },
        {
          title: this.$keys.MY_ACCOUNT,
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
      this.$functions.callSnackBar(
        this.$vuetify.theme.dark
          ? this.$t(this.$keys.DARK_MODE_ACTIVATED)
          : this.$t(this.$keys.LIGHT_MODE_ACTIVATED)
      );

      localStorage.setItem(
        this.$variables.IS_DARK_MODE,
        this.$vuetify.theme.dark.toString()
      );
    },
    switchLanguage(language) {
      this.$i18n.locale =
        language == this.$variables.TURKISH
          ? this.$variables.TURKISH
          : this.$variables.ENGLISH;
      localStorage.setItem(
        this.$variables.LANGUAGE,
        this.$i18n.locale.toString()
      );
    },
  },
};
</script>
