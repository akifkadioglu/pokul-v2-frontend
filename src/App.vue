<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />
      <span class="header">P-Okul</span>
      <v-spacer />
    </v-app-bar>
    <v-card height="100vh" elevation="0">
      <v-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
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
body {
  font-family: "Readex Pro";
}
.scroll {
  overflow-y: scroll;
}
.header {
  font-size: 25px;
}
</style>
