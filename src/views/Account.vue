<template>
  <v-container class="contents">
    <div class="title mb-3 navbar">
      {{
        isAuthUser ? $storage.pull($variables.USERNAME) : $route.params.username
      }}
    </div>
    <Information :isAuthUser="isAuthUser" />
    <transition name="fade" mode="out-in">
      <FollowedDepartmentsBar v-if="isAuthUser" />
    </transition>
    <v-divider />
    <Contents />
  </v-container>
</template>

<script>
import FollowedDepartmentsBar from "../components/Account/FollowedDepartmentsBar.vue";
import Information from "../components/Account/Information.vue";
import Contents from "../components/Home/Contents.vue";
export default {
  components: {
    FollowedDepartmentsBar,
    Information,
    Contents,
  },
  computed: {
    isAuthUser() {
      return (
        this.$route.params.username ==
        this.$storage.pull(this.$variables.USERNAME)
      );
    },
  },
};
</script>
