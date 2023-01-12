<template>
  <div class="page-center">
    <transition name="fade" mode="out-in">
      <LoginC v-if="isLoginning" />
      <RegisterC v-else @registered="isLoginning = true" />
    </transition>
    <v-divider />
    <div class="text-center point">
      <div @click="changeMode" depressed small color="primary">
        <div v-if="isLoginning">
          Hesabın yok mu?
          <span class="green--text">{{ $t($keys.LOGIN_REGISTER) }}!</span>
        </div>
        <div v-else>
          Hesabın varsa
          <span class="green--text">{{ $t($keys.LOGIN_LOGIN) }}!</span>
        </div>
      </div>
    </div>

    <Settings />
  </div>
</template>

<script>
import LoginC from "../components/login/LoginC.vue";
import RegisterC from "../components/login/RegisterC.vue";
import Settings from "../components/login/Settings.vue";

export default {
  beforeCreate() {
    this.$emit("headerOf", false);
  },
  beforeDestroy() {
    this.$emit("headerOf", true);
  },
  components: {
    LoginC,
    RegisterC,
    Settings,
  },
  data() {
    return {
      isLoginning: true,
    };
  },
  methods: {
    changeMode() {
      this.isLoginning = !this.isLoginning;
    },
  },
};
</script>
<style scoped>
.point {
  cursor: pointer;
  position: fixed;
  bottom: 72px;
  z-index: 1;
}
.page-center {
  height: 100vh;
  display: grid;
  place-items: center;
}
.list-item:hover {
  background-color: rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}
</style>
