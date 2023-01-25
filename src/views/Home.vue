<template>
  <v-container>
    <Announcement />
    <SendNote />
    <Contents :notes="notes" :isLoading="isLoading" />
  </v-container>
</template>

<script>
import Announcement from "../components/Home/Announcement.vue";
import Contents from "../components/Home/Contents.vue";
import SendNote from "../components/Home/SendNote.vue";
export default {
  name: "Home",

  mounted() {
    this.getNotes();
  },

  components: {
    Announcement,
    Contents,
    SendNote,
  },
  data() {
    return {
      notes: [],
      isLoading: false,
    };
  },
  methods: {
    async getNotes() {
      this.isLoading = true;
      var result = await this.$http.network(
        this.$variables.GET,
        this.$http_requests.NOTES
      );
      this.notes = result.result.data.notes;
      this.isLoading = false;
    },
  },
};
</script>
