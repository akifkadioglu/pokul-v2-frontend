<template>
  <v-btn
    :to="{ name: $routeNames.ACCOUNT, params: { username: username ?? ' ' } }"
    icon
    dark
    aria-label="account-button"
    width="40"
    height="40"
  >
    <v-avatar size="40" color="#006868">
      <div class="white--text">
        {{ (username ?? "").slice(0, 2).toUpperCase() }}
      </div>
    </v-avatar>
  </v-btn>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      default: "",
    },
  },
};
</script>
