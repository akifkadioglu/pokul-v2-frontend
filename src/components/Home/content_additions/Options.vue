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
      type: Number,
      default: 0,
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
    reportContent() {
      console.log(this.id);
    },
  },
};
</script>
