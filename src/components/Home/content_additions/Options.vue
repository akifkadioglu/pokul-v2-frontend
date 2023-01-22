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
        v-show="isUsersContent || !item.isForTheUser"
      >
        <v-icon>{{ item.icon }}</v-icon>
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
    isUsersContent: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      options: [
        {
          title: this.$keys.REPORT,
          icon: this.$icons.REPORT,
          isForTheUser: false,
          func: () => this.reportContent(),
        },
        {
          title: this.$keys.DELETE,
          icon: this.$icons.DELETE,
          isForTheUser: true,
          func: () => this.deleteContent(),
        },
      ],
    };
  },

  methods: {
    async reportContent() {
      var response = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.REPORT_NOTE,
        {
          note_id: this.id,
        }
      );
      if (response.result != undefined) {
        this.$functions.callSnackBar(response.result.data.message);
      }
    },
    async deleteContent() {
      let response = await this.$http.network(
        this.$variables.DELETE,
        this.$http_requests.DELETE_NOTE,
        {},
        {
          note_id: this.id,
        },
        {}
      );
      if (response.result != undefined) {
        this.$functions.callSnackBar(response.result.data.message);
      }
    },
  },
};
</script>
