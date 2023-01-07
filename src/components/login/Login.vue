<template>
  <div class="loginPage">
    <v-card max-width="400px">
      <v-card-title primary-title> Giriş yap </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="loginForm.email"
            placeholder="E-posta"
            suffix="@posta.pau.edu.tr"
            filled
            rounded
            dense
            :rules="[rules.required, rules.username]"
          />
          <v-text-field
            placeholder="Şifre"
            v-model="loginForm.password"
            :append-icon="isPasswordDisplay ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="isPasswordDisplay = !isPasswordDisplay"
            :type="isPasswordDisplay ? 'text' : 'password'"
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
              class="login-page-buttons"
              elevation="0"
              @click="login"
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
    login() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$router.push({name:this.$routeNames.HOME})
    },
  },
};
</script>

<style scoped>
.login-page-buttons {
  width: 100%;
}
</style>
