<template>
  <div class="contents">
    <v-card outlined>
      <v-card-title primary-title>
        {{ $t($keys.CHANGE_PASSWORD) }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          outlined
          :append-icon="
            isCurrentlyPasswordDisplay ? $icons.EYE : $icons.EYE_OFF
          "
          @click:append="
            isCurrentlyPasswordDisplay = !isCurrentlyPasswordDisplay
          "
          :type="isCurrentlyPasswordDisplay ? 'text' : 'password'"
          :label="$t($keys.CURRENTLY_PASSWORD)"
        />
        <v-text-field
          :append-icon="isPasswordDisplay ? $icons.EYE : $icons.EYE_OFF"
          @click:append="isPasswordDisplay = !isPasswordDisplay"
          :type="isPasswordDisplay ? 'text' : 'password'"
          outlined
          :label="$t($keys.PASSWORD)"
        />
        <v-text-field
          :append-icon="
            isPasswordConfirmationDisplay ? $icons.EYE : $icons.EYE_OFF
          "
          @click:append="
            isPasswordConfirmationDisplay = !isPasswordConfirmationDisplay
          "
          :type="isPasswordConfirmationDisplay ? 'text' : 'password'"
          outlined
          :label="$t($keys.PASSWORD_CONFIRMATION)"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          depressed
          width="100%"
          class="caption"
          :loading="isLoading"
        >
          text
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isCurrentlyPasswordDisplay: false,
      isPasswordDisplay: false,
      isPasswordConfirmationDisplay: false,
    };
  },
};
</script>

<style></style>
