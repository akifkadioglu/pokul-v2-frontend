<template>
  <div class="page-center">
    <transition name="fade" mode="out-in">
      <LoginC v-if="isLoginning" />
      <RegisterC v-else @registered="isLoginning = true" />
    </transition>
    <v-divider />
    <div class="text-center">
      <div @click="changeMode" depressed small color="primary" class="point">
        <transition name="fade" mode="out-in">
          <div v-if="isLoginning">Hesabın yok mu? Kaydol!</div>
          <div v-else>Hesabın varsa Giriş yap</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import LoginC from "../components/login/Login.vue";
import RegisterC from "../components/login/Register.vue";
export default {
  beforeCreate() {
    this.$emit("headerOf", false);
  },
  beforeDestroy() {
    this.$emit("headerOf", false);
  },
  components: {
    LoginC,
    RegisterC,
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
}
.page-center {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
