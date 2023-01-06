<template>
  <div class="loginPage">
    <v-card width="400px">
      <v-card-title primary-title> Giriş yap </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="loginForm.email"
          placeholder="E-posta"
          suffix="@posta.pau.edu.tr"
          filled
          rounded
          dense
          :rules="[rules.required, rules.email]"
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
          <v-progress-circular v-if="isLoading" indeterminate color="primary" />
          <v-btn
            v-else
            color="primary"
            class="login-page-buttons"
            elevation="0"
          >
            Giriş yap
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Zorunlu.",
        email: (value) => {
          const pattern = /^[^@\s]+$/;
          return pattern.test(value) || "kullanıcı adında @ içeremez.";
        },
      },
      isPasswordDisplay: false,
      loginForm: {
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.login-page-buttons {
  width: 100%;
}
</style>
