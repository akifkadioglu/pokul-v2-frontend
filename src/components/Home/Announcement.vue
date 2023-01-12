<template>
  <v-carousel
    show-arrows-on-hover
    :prev-icon="$icons.BACK"
    :next-icon="$icons.NEXT"
    :delimiter-icon="$icons.LINE"
    :height="$functions.isMobile() ? 300 : 500"
    hide-delimiter-background
  >
    <v-carousel-item eager v-for="(item, i) in items" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-h2">
          <ambient-image
            :elevation="10"
            :height="$functions.isMobile() ? 200 : 350"
            :src="item.src"
          />
        </div>
      </v-row>
      <v-row justify="center"> </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import AmbientImage from "ambient-image";

export default {
  components: {
    AmbientImage,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      items: [
        {
          src: "https://www.p-okul.net/socialmedia.png",
        },
        {
          src: "https://ocakmedya.com/wp-content/uploads/2022/10/0x0-dunyadan-muhtesem-doga-manzaralari-1512736354182.jpg",
        },
        {
          src: "https://i.pinimg.com/originals/a0/c2/2b/a0c22b34dacb4d2c76bd0fe27f833a2c.jpg",
        },
        {
          src: "https://bigumigu.com/wp-content/uploads/2017/09/31537399559c38192841818.44166240_n.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.ambientimage {
  object-fit: contain;
  height: 400px;
}
</style>
