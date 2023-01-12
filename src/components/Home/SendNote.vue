<template>
  <div class="post">
    <v-divider />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-textarea
        :placeholder="$t($keys.SEND_NOTE_PLACEHOLDER)"
        rows="6"
        no-resize
        hide-details
        v-model="text"
        :rules="[rules.required]"
        :maxlength="maxlength"
      >
        <template #prepend-inner>
          <ProfileButton class="mr-5" />
        </template>
      </v-textarea>
      <v-divider />
      <v-toolbar
        elevation="0"
        :color="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
      >
        <div class="file-input">
          <v-file-input
            :prepend-icon="$icons.FILE"
            hide-input
            truncate-length="15"
            @change="onFileChange"
          />

          {{ fileName }}
        </div>

        <v-spacer />
        <transition name="fade" mode="out-in">
          <v-progress-circular
            v-if="text.length > 0"
            class="mr-5"
            :value="(text.length / maxlength) * 100"
            color="primary"
          ></v-progress-circular>
        </transition>
        <v-btn
          @click="sendNote"
          color="primary"
          depressed
          :loading="false"
          rounded
          :disabled="text.length == 0"
        >
          {{ $t($keys.SEND_NOTE_PUBLISH) }}
        </v-btn>
      </v-toolbar>
    </v-form>
    <v-divider />
  </div>
</template>

<script>
import ProfileButton from "../header_additions/ProfileButton.vue";
export default {
  components: { ProfileButton },
  data() {
    return {
      rules: {
        required: (value) => !!value || this.$t(this.$keys.LOGIN_REQIRED_CHECK),
      },
      text: "",
      fileName: "",
      file: null,
      valid: true,
      maxlength: 500,
    };
  },
  methods: {
    onFileChange(e) {
      this.fileName = e.name;
      this.file = e;
    },
    sendNote() {
      if (!this.$refs.form.validate()) {
        return;
      }
    },
  },
};
</script>

<style>
.post {
  margin: auto;
  max-width: 600px;
}
.file-input {
  align-items: center;
  display: flex;
}
</style>
