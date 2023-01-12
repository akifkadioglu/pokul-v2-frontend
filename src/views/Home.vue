<template>
  <v-container>
    <Announcement />
    <SendNote />
    <Contents />
  </v-container>
</template>

<script>
import Announcement from "../components/Home/Announcement.vue";
import Contents from "../components/Home/Contents.vue";
import SendNote from "../components/Home/SendNote.vue";
export default {
  name: "Home",
  components: {
    Announcement,
    Contents,
    SendNote,
  },
};
</script>
