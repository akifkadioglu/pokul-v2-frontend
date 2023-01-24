<template>
  <div v-if="departments != []">
    <v-tabs
      next-icon="arrow_forward"
      prev-icon="arrow_back"
      show-arrows
      style="margin: auto; align-items: center"
    >
      <v-chip
        v-for="(item, index) in departments"
        :key="index"
        draggable
        class="mb-2 mr-2 mt-2"
      >
        {{ item }}
      </v-chip>
    </v-tabs>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getFollowedDepartment();
  },
  data() {
    return {
      departments: [],
      isLoading: false,
    };
  },
  methods: {
    async getFollowedDepartment() {
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.GET_FOLLOWED_DEPARTMENTS
      );
      this.departments = response.result.data.departments;
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
