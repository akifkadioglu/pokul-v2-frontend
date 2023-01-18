<template>
  <div class="contents">
    <v-card class="mt-5 mb-5" v-for="(item, index) in notes" :key="index">
      <v-card-title primary-title>
        <v-avatar size="40" color="red">
          <div class="white--text">{{ "Akif".slice(0, 2).toUpperCase() }}</div>
        </v-avatar>
        <div class="ml-2">
          <span>{{ item.User.name }}</span>
          <span class="ml-2 subtitle-2 text--secondary"
            >@{{ item.User.username }}</span
          >
        </div>
        <v-spacer />
        <Options :id="item.ID" />
      </v-card-title>
      <v-card-text>
        {{ item.content }}
      </v-card-text>
      <v-card-actions v-if="item.location != ''">
        <v-btn
          :href="item.location"
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
import Options from "./content_additions/Options.vue";
export default {
  components: {
    Options,
  },
  mounted() {
    this.getNotes();
  },
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    async getNotes() {
      var result = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.NOTES
      );
      this.notes = result.result.data.notes;
    },
  },
};
</script>
<style scoped>
.contents {
  margin: auto;
  max-width: 600px;
}
</style>
