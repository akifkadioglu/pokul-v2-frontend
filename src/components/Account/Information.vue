<template>
  <div class="information">
    <v-avatar size="150" color="red">
      <v-icon class="white--text">{{ $icons.ACCOUNT }}</v-icon>
    </v-avatar>
    <div class="position pl-5">
      <div class="font-weight-bold mb-3">
        {{ $storage.pull($variables.NAME) }}
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="isAuthUser" class="navbar">
          <v-btn
            :to="{ name: $routeNames.EDIT_PROFILE }"
            width="83%"
            depressed
            class="caption font-weight-bold text-capitalize mb-3"
          >
            {{ $t($keys.EDIT_PROFILE) }}
          </v-btn>
          <v-btn icon @click="isOtherSettingsOpen = true">
            <v-icon>{{ $icons.MORE }}</v-icon>
          </v-btn>
        </div>
      </transition>

      <div class="overline mb-3">
        {{ $storage.pull($variables.DEPARTMENT) }}
      </div>
      <div class="navbar">
        <div>2 Gönderi</div>
        <div class="ml-5">37 Yıldız</div>
      </div>
    </div>
    <Others
      :isDialogOpen="isOtherSettingsOpen"
      @closeDialog="isOtherSettingsOpen = false"
    />
  </div>
</template>

<script>
import Others from "./settings/Others.vue";
export default {
  components: { Others },
  props: {
    isAuthUser: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOtherSettingsOpen: false,
    };
  },
};
</script>

<style scoped>
.information {
  display: flex;
  margin: 25px 0 25px 0;
}
.position {
  margin: auto;
}
.navbar {
  justify-content: start;
}
</style>
