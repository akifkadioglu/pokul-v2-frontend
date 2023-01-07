<template>
  <v-list-group :value="false" no-action append-icon="expand_more">
    <template v-slot:activator>
      <v-list-item-avatar>
        <v-icon>{{ $icons.LANGUAGE }} </v-icon>
      </v-list-item-avatar>
      <v-list-item-title>{{ $t($keys.LANGUAGES) }}</v-list-item-title>
    </template>

    <v-list-item
      v-for="(item, index) in $store.state.languages"
      :key="index"
      @click="$functions.switchLanguage(item.code, item.lang)"
    >
      <v-list-item-title>{{ $t(item.lang) }}</v-list-item-title>
      <v-list-item-icon v-if="$i18n.locale == item.code">
        <v-icon>{{ $icons.CHECK }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>
