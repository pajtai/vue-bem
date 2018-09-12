<template>
  <img class="carousel__slide" :class="display" :src="src" :alt="alt || 'Slide'"/>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "carousel-slide",
  props: ["src", "alt"],
  computed: {
    ...mapGetters(["slideShown"]),
    display() {
      return this.slideShown === this._uid ? "carousel__slide--active" : "";
    }
  }
};
</script>
<style lang="scss">
@import "../styles/colors";
@import "../styles/vars";

$slide-border: $_gullGray;

$mobile: 568px;

.carousel__slide {
  border: 1px solid $slide-border;
  border-radius: 3px;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.1);
}

// Desktop Redefinition level
@media screen and (min-width: $mobile + 1) {
  .carousel__slide {
    box-shadow: none;
    display: none;
    &--active {
      display: inline-block;
    }
  }
  .carousel--full-width {
    width: 100%;
    display: block;
    .carousel__slide {
      width: 100%;
      display: none;
      &.carousel__slide--active {
        display: inline-block;
      }
    }
  }
}
</style>
