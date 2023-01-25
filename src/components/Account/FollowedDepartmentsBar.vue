<template>
  <div>
    <v-tabs
      next-icon="arrow_forward"
      prev-icon="arrow_back"
      show-arrows
      style="margin: auto; align-items: center"
    >
      <v-chip
        class="ma-2"
        draggable
        @click="followSomeDepartmentsDialog = true"
      >
        <v-icon left> add </v-icon>
        {{ $t($keys.ACCOUNT_FOLLOW_A_DEPARTMENT) }}
      </v-chip>
      <v-chip
        v-for="(item, index) in departments"
        :key="index"
        close
        :close-icon="'close'"
        class="ma-2"
        @click:close="dontFollowAnymore(item)"
      >
        {{ item.Department.name }}
      </v-chip>
    </v-tabs>
    <FollowDepartments
      @closeDialog="closeDialog"
      :dialog="followSomeDepartmentsDialog"
    />
  </div>
</template>

<script>
import FollowDepartments from "./FollowedDepartmentsBar_additions/FollowDepartments.vue";
export default {
  components: { FollowDepartments },
  mounted() {
    this.getFollowedDepartment();
  },
  data() {
    return {
      departments: [],
      followSomeDepartmentsDialog: false,
      isLoading: false,
    };
  },
  methods: {
    closeDialog() {
      this.followSomeDepartmentsDialog = false;
    },
    async getFollowedDepartment() {
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.GET_FOLLOWED_DEPARTMENTS
      );
      this.departments = response.result.data.departments;
      this.isLoading = false;
    },
    async dontFollowAnymore(item) {
      if (
        confirm(
          item.Department.name + "'i takip etmek istemediğine emin misin?"
        )
      ) {
        this.isLoading = true;
        let response = await this.$http.network(
          this.$variables.DELETE,
          this.$http_requests.DONT_FOLLOW_DEPARTMENT,
          {},
          {
            department_id: item.department_id,
          },
          {}
        );
        if (response.result != undefined) {
          this.$functions.callSnackBar(response.result.data.message);
        }
        this.isLoading = false;
        console.log(item.department_id);
      }
    },
  },
};
</script>

<style></style>
