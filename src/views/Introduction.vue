<template>
  <div>
    <Header />
    <div class="container">
      <h2>P-Okul Nedir?</h2>
      <div>
        P-Okul Pamukkale Üniversitesi için yazılmış bir not paylaşma
        uygulamasıdır.
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
