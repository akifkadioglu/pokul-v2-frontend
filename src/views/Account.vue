<template>
  <div class="text">
    <div class="text-center" style="margin: auto">
      <div style="width: 500px">
        <v-autocomplete
          filled
          shaped
          v-model="department_id"
          :placeholder="$t($keys.LOGIN_DEGREE)"
          dense
          :items="department"
          item-value="ID"
          item-text="name"
          :no-data-text="$t($keys.LOGIN_NO_SUCH_DEPARTMENT)"
        />
        <v-btn
          :loading="isLoading"
          @click="saveDepartment"
          depressed
          color="primary"
        >
          Kaydet
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  mounted() {
    this.getDepartment();
  },
  data() {
    return {
      department: [],
      department_id: "",
      isLoading: false,
    };
  },
  methods: {
    async getDepartment() {
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.GET_DEPARTMENTS
      );
      this.department = response.result.data.departments;
      this.isLoading = false;
    },

    async saveDepartment() {
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.CHANGE_USER_DEPARTMENT,
        { department_id: this.department_id }
      );
      if (response.result != null && response.result.data.is_updated) {
        alert("kaydedildi");
      }
      this.isLoading = false;
    },
  },
};
</script>
<style scoped>
.text {
  height: 90vh;
  display: grid;
  align-items: center;
}
</style>
