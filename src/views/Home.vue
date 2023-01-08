<template>
  <v-container>
    <Announcement />
    <Contents />
  </v-container>
</template>

<script>
import Announcement from "../components/Home/Announcement.vue";
import Contents from "../components/Home/Contents.vue";
export default {
  name: "Home",
  components: {
    Announcement,
    Contents,
  },
};
</script>
