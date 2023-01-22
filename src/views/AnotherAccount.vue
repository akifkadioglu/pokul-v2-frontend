<template>
  <v-container class="contents">
    <div class="title mb-3 navbar">
      {{ $route.params.username }}
    </div>
    <div class="custom-navbar">
      <v-avatar size="150" color="red">
        <v-icon class="white--text">{{ $icons.ACCOUNT }}</v-icon>
      </v-avatar>

      <div class="informations pl-5">
        <div class="font-weight-bold mb-3">
          {{ $storage.pull($variables.NAME) }}
        </div>

        <div class="overline mb-3">
          {{ $storage.pull($variables.DEPARTMENT) }}
        </div>
        <div class="custom-navbar">
          <div>2 Gönderi</div>
          <div class="ml-5">37 Yıldız</div>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {};
</script>
<style scoped>
.custom-navbar {
  display: flex;
  margin: 25px 0 25px 0;
}
.informations {
  margin: auto;
}
</style>
