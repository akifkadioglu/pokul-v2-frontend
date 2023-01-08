<template>
  <v-carousel
    show-arrows-on-hover
    :prev-icon="$icons.BACK"
    :next-icon="$icons.NEXT"
    :delimiter-icon="$icons.LINE"
    height="400"
    hide-delimiter-background
  >
    <v-carousel-item
      contain
      max-height="400"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://www.p-okul.net/socialmedia.png",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://www.p-okul.net/socialmedia.png",
        },
        {
          src: "https://www.p-okul.net/socialmedia.png",
        },
      ],
    };
  },
};
</script>
<style></style>
