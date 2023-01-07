<template>
  <v-menu
    content-class="elevation-1"
    offset-y
    rounded="b-xl"
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-on="on"
        hide-details
        dense
        filled
        rounded
        clearable
        :placeholder="$t($keys.SEARCH_P_OKUL)"
        clear-icon="close"
        v-model="search"
        @keydown.enter="addStoredSearches"
        :items="storedSearches"
        shaped
      >
        <template v-slot:append>
          <v-icon @click="addStoredSearches" class="material-icons">
            {{ $icons.SEARCH }}
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-card>
      <transition name="fade" mode="out-in">
        <v-list v-show="storedSearchesCheck.length > 0" color="white">
          <v-list-item
            class="list-item"
            v-for="(item, index) in storedSearchesCheck"
            :key="index"
            @click="search = item"
          >
            <v-list-item-title class="black--text" v-text="item" />
          </v-list-item>
        </v-list>
      </transition>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    storedSearches: function () {
      return this.$storage.pull(this.$variables.STORED_SEARCHES) === null
        ? []
        : [
            ...JSON.parse(this.$storage.pull(this.$variables.STORED_SEARCHES)),
          ].slice(0, 5);
    },
    storedSearchesCheck: function () {
      return this.storedSearches.filter(
        (x) =>
          x.toLowerCase().indexOf((this.search ?? "").toLowerCase() ?? "") != -1
      );
    },
  },
  methods: {
    addStoredSearches: function () {
      if ((this.search == "") | (this.search == null)) {
        return;
      }
      let storedSearches = this.storedSearches;

      if (!storedSearches.includes(this.search)) {
        storedSearches.unshift(this.search);
        this.$storage.push(
          this.$variables.STORED_SEARCHES,
          JSON.stringify(storedSearches)
        );
      }
    },
  },
};
</script>
<style scoped>
.list-item:hover {
  background-color: rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}
</style>
