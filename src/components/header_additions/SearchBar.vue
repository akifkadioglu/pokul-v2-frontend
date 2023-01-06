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
        class="mt-5"
        dense
        filled
        rounded
        clearable
        placeholder="Not ya da kişi ara"
        clear-icon="close"
        v-model="search"
        @keydown.enter="addStoredSearches"
        :items="storedSearches"
        shaped
      >
        <template v-slot:append>
          <v-icon @click="addStoredSearches" class="material-icons">
            search
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-card>
      <transition name="fade" mode="out-in">
        <v-list
          v-show="
            storedSearches.filter((x) => x.indexOf(search ?? '') != -1).length >
            0
          "
          color="white"
        >
          <v-list-item
            class="list-item"
            v-for="(item, index) in storedSearches.filter(
              (x) => x.indexOf(search ?? '') != -1
            )"
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
      return localStorage.storedSearches === undefined
        ? []
        : [...JSON.parse(localStorage.storedSearches)];
    },
  },
  methods: {
    addStoredSearches: function () {
      let storedSearches = this.storedSearches;
      if ((this.search == "") | (this.search == null)) {
        return;
      }
      if (!storedSearches.includes(this.search)) {
        storedSearches.unshift(this.search);
        localStorage.storedSearches = JSON.stringify(storedSearches);
        this.storedSearches();
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
