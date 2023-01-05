<template>
  <v-app>
    <Header />
    <v-card height="1000vh" elevation="0">
      <v-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-main>
    </v-card>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  name: "App",

  data: () => ({
    //
  }),
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
  overflow-y: scroll;
}
</style>
