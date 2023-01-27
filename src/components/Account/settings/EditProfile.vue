<template>
  <div class="contents text-center">
    <v-card elevation="0" outlined class="mb-5">
      <v-card-title primary-title>
        {{ $t($keys.EDIT_PROFILE) }}
      </v-card-title>
      <v-card-text class="black--text">
        <div>
          <ProfileButton
            :username="$storage.pull($variables.USERNAME)"
            :size="150"
            :image="$storage.pull($variables.IMAGE_URL)"
            :isEditing="true"
            @selected-image="onFileChange"
          />
          <div class="mt-4" v-if="image != null">
            {{ image.name }}
          </div>
        </div>
        <div class="text-start mt-5">
          <v-text-field
            outlined
            :label="$t($keys.USERNAME)"
            dense
            disabled
            :value="$storage.pull($variables.USERNAME)"
          />
          <v-text-field
            outlined
            :label="$t($keys.LOGIN_EMAIL)"
            dense
            disabled
            :value="$storage.pull($variables.USERNAME) + $variables.MAIL_SUFFIX"
          />
          <v-text-field
            outlined
            :label="$t($keys.NAME)"
            dense
            v-model="name"
            :rules="rules.name"
            ref="name"
          />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="caption"
          width="100%"
          :loading="isLoading"
          depressed
          color="primary"
          @click="editProfile"
        >
          {{ $t($keys.SAVE) }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <router-link
      :to="{ name: $routeNames.CHANGE_PASSWORD }"
      class="text-decoration-none"
    >
      Şifremi Değiştir
    </router-link>
  </div>
</template>
<script>
import ProfileButton from "../../header_additions/ProfileButton.vue";
export default {
  components: { ProfileButton },
  data() {
    return {
      isLoading: false,
      image: null,
      name: this.$storage.pull(this.$variables.NAME),
      rules: {
        name: [
          (v) => !!v || this.$t(this.$keys.REQIRED),
          (v) =>
            (v && v.length <= 25) ||
            this.$t(this.$keys.WRONG_CHARACTER_COUNT) + "0 - 25",
        ],
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.image = e;
    },
    async editProfile() {
      if (!this.$refs.name.validate()) {
        return;
      }
      this.isLoading = true;
      var result = await this.$http.network(
        this.$variables.POST,
        this.$http_requests.EDIT_PROFILE,
        {
          name: this.name,
          image: this.image,
        },
        {},
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (result != undefined) {
        this.image = null;
      }
      this.isLoading = false;
    },
  },
};
</script>
