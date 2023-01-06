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
          @input="checkEmail"
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
            @click="login"
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
  methods: {
    checkEmail() {},
    async login() {
      this.isLoading = true;
      await this.axios
        .post("login", this.loginForm)
        .then((result) => {
          this.axios.defaults.headers.common["Authorization"] =
            `Bearer ` + result.data.token;

          var token = this.CryptoJS.AES.encrypt(
            result.data.token,
            process.env.VUE_APP_APP_KEY
          );
          var decode = this.$helpers.parseJwt(result.data.token);
          console.log(this.$helpers.returnEncryptItem(decode.Name.toString()));
          var name = this.$helpers.returnEncryptItem(decode.Name.toString());
          var role = this.$helpers.returnEncryptItem(decode.Role.toString());
          var user_id = this.$helpers.returnEncryptItem(
            decode.UserId.toString()
          );
          localStorage.setItem("token", token);
          localStorage.setItem("name", name);
          localStorage.setItem("role", role);
          localStorage.setItem("user_id", user_id);
          this.$router.go(0);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
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
