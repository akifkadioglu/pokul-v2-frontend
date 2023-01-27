<template>
  <v-btn
    v-if="!isEditing"
    :to="{
      name: $routeNames.ACCOUNT,
      params: { username: username ?? ' ' },
    }"
    icon
    dark
    aria-label="account-button"
    :width="size"
    :height="size"
  >
    <v-avatar :size="size" color="#006868">
      <img
        :src="image"
        :alt="username + '_profile'"
        class="user-avatar"
        object-fit="contain"
        v-if="image != '' && image != null"
      />
      <div v-else class="white--text">
        {{ (username ?? "").slice(0, 2).toUpperCase() }}
      </div>
    </v-avatar>
  </v-btn>
  <div v-else class="edit-photo">
    <div class="edit-photo-file">
      <v-avatar :size="size" color="#006868">
        <img
          :src="image"
          :alt="username + '_profile'"
          class="user-avatar"
          object-fit="contain"
          v-if="image != '' && image != null"
        />
        <div v-else class="white--text">
          {{ (username ?? "").slice(0, 2).toUpperCase() }}
        </div>
      </v-avatar>
      <v-file-input
        accept="image/png, image/gif, image/jpeg"
        :prepend-icon="$icons.ADD"
        hide-input
        @change="sendFile"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 40,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendFile(e) {
      this.$emit("selected-image", e);
    },
  },
};
</script>
<style scoped>
.user-avatar {
  object-fit: cover;
}
.edit-photo {
  display: flex;
  justify-content: center;
}
.edit-photo-file {
  display: flex;
  align-items: flex-end;
}
</style>
