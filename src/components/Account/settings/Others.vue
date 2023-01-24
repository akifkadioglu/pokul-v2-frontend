<template>
  <div class="text-center">
    <v-dialog v-model="isDialogOpen" width="500" persistent>
      <v-card>
        <v-card-title> {{ $t($keys.DEPARTMENTS) }} </v-card-title>

        <v-card-text>
          <v-form ref="form" lazy-validation>
            <div class="navbar">
              <v-autocomplete
                filled
                shaped
                v-model="department_id"
                :placeholder="$t($keys.DEPARTMENTS)"
                dense
                :rules="[rules.required]"
                :items="department"
                item-value="ID"
                item-text="name"
                :no-data-text="$t($keys.LOGIN_NO_SUCH_DEPARTMENT)"
              />

              <v-btn
                class="mt-1"
                :loading="isLoading"
                @click="saveDepartment"
                icon
              >
                <v-icon>{{ $icons.CHANGE }}</v-icon>
              </v-btn>
            </div>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('closeDialog')">
            {{ $t($keys.CLOSE) }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    isDialogOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.getDepartment();
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || this.$t(this.$keys.LOGIN_REQIRED_CHECK),
      },
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
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.CHANGE_USER_DEPARTMENT,
        { department_id: this.department_id }
      );
      if (response.result != null && response.result.data.is_updated) {
        this.$storage.push(
          this.$variables.DEPARTMENT,
          this.department.find((x) => x.ID === this.department_id).name
        );
        alert("kaydedildi");
      }
      this.isLoading = false;
    },
  },
};
</script>
