<template>
  <div class="settings">
    <v-btn
      class="setting-item"
      depressed
      :color="$vuetify.theme.dark ? '#FFFFFF' : '#1E1E1E'"
      fab
      @click="$functions.switchDarkMode($vuetify)"
    >
      <transition name="fade" mode="out-in">
        <v-icon :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'">
          {{ $vuetify.theme.dark ? $icons.LIGHT_MODE : $icons.DARK_MODE }}
        </v-icon>
      </transition>
    </v-btn>

    <v-menu
      class="setting-item"
      top
      offset-y
      offset-x
      left
      transition="slide-x-transition"
      content-class="elevation-1"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          :color="$vuetify.theme.dark ? '#FFFFFF' : '#1E1E1E'"
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'">
            {{ $icons.LANGUAGE }}
          </v-icon>
        </v-btn>
      </template>

      <v-list color="white">
        <v-list-item
          class="list-item"
          v-for="(item, index) in $store.state.languages"
          :key="index"
          @click="$functions.switchLanguage(item.code, item.lang)"
        >
          <v-list-item-title class="black--text">
            {{ $t(item.lang) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<style scoped>
.setting-item {
  z-index: 1;
}
.settings {
  position: fixed;
  bottom: 60px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
