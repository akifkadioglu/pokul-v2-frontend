<template>
  <v-menu left offset-y offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="mr-2"
        icon
        dark
        plain
        color="primary"
        @click.left="$store.state.accountButton = !$store.state.accountButton"
      >
        <v-icon class="material-icons">perm_identity</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="white--text text-h5">{{
              user.fullName.slice(0, 2)
            }}</span>
          </v-avatar>
          <h3 class="mt-2">{{ user.fullName }}</h3>
          <p class="text-caption mt-2">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
        </div>
      </v-list-item-content>
      <v-card-actions>
        <v-btn
          depressed
          @click="$router.push({ name: $routeNames.ACCOUNT }).catch(() => {})"
        >
          Hesabım
        </v-btn>
        <v-btn depressed> Çıkış yap </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      user: {
        initials: "Ak",
        fullName: "Akif Kadıoğlu",
        email: "akifkadioglu@yaani.com",
      },
    };
  },
};
</script>

<style></style>
