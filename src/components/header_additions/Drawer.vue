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
          <img
            src="@/assets/logo.webp"
            width="45px"
            height="45px"
            alt="avatar"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <div>{{ this.$variables.APP_NAME }}</div>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item
        tile
        v-for="(item, index) in items"
        :key="index"
        dense
        exact
        :to="item.page != null ? { name: item.page } : ''"
        active-class="teal--text"
        @click="item.func"
      >
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <ChooseLanguages />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ChooseLanguages from "./drawer_additions/ChooseLanguages.vue";
export default {
  components: { ChooseLanguages },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
  data() {
    return {
      items: [
        {
          title: this.$keys.HOME_PAGE,
          icon: this.$icons.HOME,
          page: this.$routeNames.HOME,
          func: () => {},
        },
        {
          title: this.$keys.MY_ACCOUNT,
          icon: this.$icons.ACCOUNT,
          page: this.$routeNames.ACCOUNT,
          func: () => {},
        },/* 
        {
          title: this.$keys.CONFERENCE,
          icon: this.$icons.CONFERENCE,
          page: this.$routeNames.CONFERENCE,
          func: () => {},
        }, */
        {
          title: this.$keys.DARK_MODE,
          icon: this.$icons.DARK_MODE,
          page: null,
          func: () => this.$functions.switchDarkMode(this.$vuetify),
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
  },
};
</script>
