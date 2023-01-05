<template>
  <v-footer padless :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'">
    <div class="footer">
      {{ new Date().getFullYear() }} · {{ this.$variables.APP_NAME }}
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
