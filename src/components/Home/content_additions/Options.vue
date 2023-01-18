<template>
  <v-menu
    bottom
    offset-y
    offset-x
    left
    transition="slide-y-transition"
    content-class="elevation-1"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>{{ $icons.MORE }}</v-icon>
      </v-btn>
    </template>

    <v-list color="white">
      <v-list-item
        v-for="(item, index) in options"
        :key="index"
        @click="item.func"
      >
        <v-icon>{{ $icons.REPORT }}</v-icon>
        <v-list-item-title class="black--text ml-2">
          {{ $t(item.title) }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    id: {
      default: "",
    },
  },
  data() {
    return {
      options: [
        {
          title: this.$keys.REPORT,
          func: () => this.reportContent(),
        },
      ],
    };
  },
  methods: {
    async reportContent() {
      var result = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.REPORT_NOTE,
        {
          note_id: this.id,
        }
      );
      if (result.result != undefined) {
        this.$functions.callSnackBar(result.result.data.message);
      }
    },
  },
};
</script>
