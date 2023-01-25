<template>
  <div class="contents mb-5">
    <ProgressCircularC v-if="isLoading" class="mt-5" :position="'center'" />

    <v-card
      elevation="0"
      class="card"
      v-for="(item, index) in notes"
      :key="index"
      tile
      outlined
      :style="{
        'border-color': $vuetify.theme.dark ? '#ffffff08' : '#00000008',
      }"
    >
      <v-card-title primary-title>
        <ProfileButton :username="item.User.username" />
        <div>
          <div class="ml-2 subtitle-1 font-weight-bold">
            <span>{{ item.User.name }}</span>
            <span class="ml-1 subtitle-2 text--secondary">
              @{{ item.User.username }}
            </span>
          </div>
          <div class="ml-2 caption">
            {{ item.Department != null ? item.Department.name : "" }}
          </div>
        </div>

        <v-spacer />
        <Options
          :id="item.ID"
          :isUsersContent="item.User.ID == $storage.pull($variables.ID)"
        />
      </v-card-title>
      <v-card-text>
        {{ item.content }}
      </v-card-text>
      <v-card-actions v-if="item.location != ''">
        <v-btn
          :href="item.location"
          target="_blank"
          width="100%"
          color="secondary"
          depressed
        >
          {{ $t($keys.HOME_LINK) }}
        </v-btn>
      </v-card-actions>
      <v-card-actions class="navbar">
        <div v-for="(item, index) in actions" :key="index">
          <v-btn icon>
            <v-icon size="20">
              {{ item.icon }}
            </v-icon>
          </v-btn>
          <span class="caption" color="secondary"> {{ item.label }} </span>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ProfileButton from "../header_additions/ProfileButton.vue";
import Options from "./content_additions/Options.vue";
import ProgressCircularC from "../ProgressCircularC.vue";
export default {
  props: {
    notes: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Options,
    ProfileButton,
    ProgressCircularC,
  },
  data() {
    return {
      actions: [
        {
          icon: this.$icons.FAVORITE_BORDER,
          label: "156",
          func: () => {},
        },
        {
          icon: this.$icons.SHARE,
          label: "",
          func: () => {},
        },
      ],
    };
  },
};
</script>
<style scoped>
.card {
  transition: 0.2s;
}
.card:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
