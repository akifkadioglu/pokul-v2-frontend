<template>
  <v-btn
    :to="{ name: $routeNames.ACCOUNT }"
    class="ml-5 mr-2"
    icon
    dark
    aria-label="account-button"
    width="35"
    height="35"
  >
    <v-avatar size="35">
      <img
        alt="profile photo"
        style="object-fit: cover"
        src="https://i0.wp.com/www.indir.com/haber/wp-content/uploads/2021/11/anonimsinde-hesaba-profil-fotografi-nasil-eklenir-.jpg?resize=1440%2C720&ssl=1"
      />
    </v-avatar>
  </v-btn>
</template>
