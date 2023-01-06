<template>
  <div>
    <Header />
    <div class="container">
      <h2>{{ $t($keys.WHAT_IS_P_OKUL) }}</h2>
      <div>
        {{ $t($keys.WHAT_IS_P_OKUL_ANSWER) }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/inroduction/Header.vue";
export default {
  beforeCreate() {
    this.$emit("headerOf", false);
  },
  beforeDestroy() {
    this.$emit("headerOf", true);
  },
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
