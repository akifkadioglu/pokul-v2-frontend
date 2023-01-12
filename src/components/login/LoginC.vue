<template>
  <div class="loginPage">
    <v-card max-width="400px">
      <v-card-title primary-title> Giriş yap </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="loginForm.email"
            :placeholder="$t($keys.LOGIN_EMAIL)"
            :suffix="$variables.MAIL_SUFFIX"
            filled
            rounded
            dense
            :rules="[rules.required, rules.username]"
          />
          <v-text-field
            :placeholder="$t($keys.LOGIN_PASSWORD)"
            v-model="loginForm.password"
            :append-icon="isPasswordDisplay ? $icons.EYE : $icons.EYE_OFF"
            @click:append="isPasswordDisplay = !isPasswordDisplay"
            :type="isPasswordDisplay ? 'text' : 'password'"
            filled
            rounded
            dense
            :rules="[rules.required]"
          />
          <div class="text-center">
            <v-btn
              color="primary"
              class="login-page-buttons"
              elevation="0"
              @click="login"
              :loading="isLoading"
            >
              {{ $t($keys.LOGIN_LOGIN) }}
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
      },
      valid: true,
      isPasswordDisplay: false,
      loginForm: {
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async login() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isLoading = true;
      let response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.LOGIN,
        this.loginForm,
        null
      );
      if (response.error == undefined) {
        alert(this.$t(this.$keys.LOGIN_WELCOME_MESSAGE));
        console.log(response.result.data.token)
        this.$storage.push(this.$variables.TOKEN, response.result.data.token);
        this.$router.push({ name: this.$routeNames.HOME });
      } else {
        alert(response.error.response.data.message);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.login-page-buttons {
  width: 100%;
}
</style>
