<template>
  <img class="carousel__slide" :style="{ display }" :src="src" :alt="alt || 'Slide'"/>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "carousel-slide",
  props: ["src", "alt"],
  computed: {
    ...mapGetters([
      'slideShown'
    ]),
    display() {
      return this.slideShown === this._uid ? "inline-block" : "none";
    }
  }
};
</script>
<style lang="scss">
.carousel__slide {
  transition: all 1s ease-in;
}
</style>