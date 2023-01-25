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
    <Contents :notes="notes" :isLoading="isLoading" />
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
  mounted() {
    this.getAnyUserNotes();
  },
  computed: {
    isAuthUser() {
      return (
        this.$route.params.username ==
        this.$storage.pull(this.$variables.USERNAME)
      );
    },
  },
  watch: {
    "$route.params.username"() {
      this.getAnyUserNotes();
    },
  },
  data() {
    return {
      authUsersNotes: [],
      notes: [],
      isLoading: false,
    };
  },

  methods: {
    async getAnyUserNotes() {
      this.isLoading = true;
      var result = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.ANY_USER_NOTES,
        null,
        { username: this.$route.params.username }
      );
      this.notes = result.result.data.notes;
      this.isLoading = false;
    },
  },
};
</script>
