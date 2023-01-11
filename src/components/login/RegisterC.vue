<template>
  <div class="registerPage">
    <v-card max-width="400px">
      <v-card-title primary-title> Kayıt Ol </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            :placeholder="$t($keys.LOGIN_EMAIL)"
            v-model="registerForm.username"
            :suffix="$variables.MAIL_SUFFIX"
            filled
            rounded
            dense
            :rules="[rules.required, rules.username]"
          />
          <v-text-field
            :placeholder="$t($keys.LOGIN_NAME)"
            v-model="registerForm.name"
            filled
            rounded
            dense
            :rules="[rules.required, rules.name]"
          />

          <v-text-field
            :placeholder="$t($keys.LOGIN_PASSWORD)"
            v-model="registerForm.password"
            :append-icon="isPasswordDisplay ? $icons.EYE : $icons.EYE_OFF"
            @click:append="isPasswordDisplay = !isPasswordDisplay"
            :type="isPasswordDisplay ? 'text' : 'password'"
            filled
            rounded
            dense
            :rules="[rules.required]"
          />
          <v-text-field
            :placeholder="$t($keys.LOGIN_PASSWORD_CONFIRMATION)"
            v-model="registerForm.password_confirmation"
            :append-icon="isPasswordConfDisplay ? $icons.EYE : $icons.EYE_OFF"
            @click:append="isPasswordConfDisplay = !isPasswordConfDisplay"
            :type="isPasswordConfDisplay ? 'text' : 'password'"
            filled
            rounded
            dense
            :rules="[rules.required]"
          />
          <div class="text-center">
            <v-progress-circular
              v-if="isLoading"
              indeterminate
              color="primary"
            />
            <v-btn
              v-else
              color="primary"
              class="register-page-buttons"
              elevation="0"
              @click="register"
            >
              {{ $t($keys.LOGIN_REGISTER) }}
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || this.$t(this.$keys.LOGIN_REQIRED_CHECK),
        username: (value) => {
          const pattern = /^[a-zA-Z0-9]+$/;
          return (
            pattern.test(value) || this.$t(this.$keys.LOGIN_USERNAME_CHECK)
          );
        },
        name: (value) => {
          const pattern = /^[a-zA-ZçÇğĞıİöÖşÜü\s]+$/;
          return pattern.test(value) || this.$t(this.$keys.LOGIN_NAME_CHECK);
        },
      },
      valid: true,
      isPasswordDisplay: false,
      isPasswordConfDisplay: false,
      registerForm: {
        username: "",
        name: "",
        password: "",
        password_confirmation: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.REGISTER,
        this.registerForm,
        null
      );
      if (response.error == undefined) {
        alert(this.$t(this.$keys.LOGIN_WELCOME_MESSAGE));
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.register-page-buttons {
  width: 100%;
}
</style>
