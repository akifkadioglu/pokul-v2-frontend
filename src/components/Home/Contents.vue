<template>
  <div class="contents">
    <v-card class="mt-5 mb-5" v-for="i in 5" :key="i">
      <v-card-title primary-title>
        <v-avatar size="40" color="red">
          <div class="white--text">{{ "Akif".slice(0, 2).toUpperCase() }}</div>
        </v-avatar>
        <div class="ml-2">
          <span>Akif</span>
          <span class="ml-2 subtitle-2 text--secondary">@skadioglu20</span>
        </div>
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam
        assumenda nihil magnam sequi, reprehenderit hic veniam nam fugit
        veritatis beatae. Amet hic tenetur, molestiae est sequi tempore debitis
        corporis autem et similique fuga, vitae doloremque at. Ipsa quae
        sapiente, doloribus quas ea commodi, autem cupiditate ipsum in
        reiciendis facilis!
      </v-card-text>
      <v-card-actions>
        <v-btn
          href="https://twitter.com/Pokulnet"
          target="_blank"
          width="100%"
          color="secondary"
          depressed
        >
          {{ $t($keys.HOME_LINK) }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.contents {
  margin: auto;
  max-width: 600px;
}
</style>
