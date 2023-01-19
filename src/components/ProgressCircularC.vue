<template>
  <div :class="'text-' + position">
    <v-progress-circular indeterminate color="#007a79" />
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: "",
    },
  },
};
</script>
