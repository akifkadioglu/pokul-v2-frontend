<template>
  <v-footer padless fixed :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'">
    <div class="footer">
      <v-switch
        aria-label="dark-mode-switch"
        v-model="$vuetify.theme.dark"
        inset
        prepend-icon="nights_stay"
      />
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
