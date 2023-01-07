<template>
  <div class="text-center">
    <v-snackbar v-model="$store.state.isSnackbarOpen">
      {{ $store.state.snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          aria-label="snackbar-button"
          color="error"
          icon
          v-bind="attrs"
          @click="$store.state.isSnackbarOpen = false"
        >
          <v-icon>{{ $icons.CLOSE }}</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
