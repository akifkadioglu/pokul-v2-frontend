<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title>
          {{ $t($keys.ACCOUNT_FOLLOW_A_DEPARTMENT) }}
        </v-card-title>

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
                :items="departments"
                item-value="ID"
                item-text="name"
                :no-data-text="$t($keys.LOGIN_NO_SUCH_DEPARTMENT)"
              />

              <v-btn
                class="mt-1"
                :loading="isLoading"
                @click="followDepartments"
                icon
              >
                <v-icon>{{ $icons.CHANGE }}</v-icon>
              </v-btn>
            </div>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

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
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.getDepartments();
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || this.$t(this.$keys.LOGIN_REQIRED_CHECK),
      },
      isLoading: false,
      department_id: "",
      departments: [],
    };
  },
  methods: {
    async followDepartments() {
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.FOLLOW_DEPARTMENTS,
        { department_id: this.department_id }
      );
      if (response.error != null) {
        this.isLoading = false;
      }
      if (response.result != undefined) {
        this.$functions.callSnackBar(response.result.data.message);
      }
      this.isLoading = false;
    },
    async getDepartments() {
      this.departments = await this.$globalRequests.getDepartments();
    },
  },
};
</script>
