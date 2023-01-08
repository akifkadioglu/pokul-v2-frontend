<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <Header v-if="isHeaderOpen" />
    </transition>
    <v-card height="100vh" elevation="0">
      <v-main class="overflow-auto main">
        <transition name="fade" mode="out-in">
          <router-view @headerOf="headerOf" />
        </transition>
      </v-main>
    </v-card>
    <Footer />
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    Snackbar,
  },
  mounted() {
    this.checkDarkMode();
  },
  computed: {
    isHeaderOpen() {
      return this.header;
    },
  },
  data() {
    return {
      header: true,
    };
  },
  methods: {
    checkDarkMode() {
      if (this.$storage.pull(this.$variables.IS_DARK_MODE) === "true") {
        this.$vuetify.theme.dark = true;
      }
    },
    headerOf(value) {
      this.header = value;
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  border-radius: 20;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.scroll {
  overflow-y: auto;
  overflow:initial;

}
.main {
  height: 100vh;
}
</style>
