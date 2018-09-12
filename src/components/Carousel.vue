<template>
  <section class="carousel">
    <slot>Insert Images Here</slot>
    <div class="carousel__arrow-left" @click="left"></div>
    <div class="carousel__arrow-right" @click="right"></div>
    <div class="carousel__dots">

      <div
        @click="showSlide(child._uid)"
        :class="{ carousel__dot: true, 'carousel__dot--active': child._uid === slideShown }"
        v-bind:key="child._uid"
        v-for="child in $children">&nbsp;
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "carousel",
  mounted: function() {
    this.$store.commit("updateSlide", this.$children[0]._uid);
  },
  computed: {
    ...mapGetters([`slideShown`])
  },
  methods: {
    left: function() {
      let slide = this.$children.findIndex(child => this.slideShown === child._uid);
      slide =
        slide > 0
          ? (slide - 1) % this.$children.length
          : this.$children.length - 1;
      this.$store.commit("updateSlide", this.$children[slide]._uid);
    },
    right: function() {
      let slide = this.$children.findIndex(child => this.slideShown === child._uid);
      slide = (slide + 1) % this.$children.length;
      this.$store.commit("updateSlide", this.$children[slide]._uid);
    },
    showSlide: function(_uid) {
      this.$store.commit("updateSlide", _uid);
    }
  }
};
</script>
<style lang="scss">
@import "../styles/colors";
@import "../styles/vars";

$slide-width: 400px;
$dot-width: 8px;
$dot-gap: 4px;

// Rededefinition level for desktop
@media screen and (min-width: $mobile + 1) {
  .carousel {
    position: relative;
    display: inline-block;
    overflow-x: hidden;
    &__dots {
      position: absolute;
      bottom: 0;
      width: $dot-width * 3 + 2 * $dot-gap;
      margin-left: -($dot-width * 3 + 2 * $dot-gap);
      left: 50%;
      margin-bottom: $dot-gap;
    }

    &__dot + &__dot {
      margin-left: $dot-gap;
    }

    &__dot {
      cursor: pointer;
      height: $dot-width;
      width: $dot-width;
      background-color: $carousel-inactive;
      border-radius: 50%;
      display: inline-block;
      &--active {
        background-color: $carousel-action;
      }
    }

    &__arrow-right,
    &__arrow-left {
      cursor: pointer;
      position: absolute;
      top: 50%;
      margin-top: -$dot-width;
      width: 0;
      height: 0;
      border-top: 4 * $dot-gap solid transparent;
      border-bottom: 4 * $dot-gap solid transparent;
    }
    &__arrow-right {
      right: 0;
      border-left: 3 * $dot-gap solid $carousel-action;
      margin-right: 3 * $dot-gap;
    }
    &__arrow-left {
      left: 0;
      border-right: 3 * $dot-gap solid $carousel-action;
      margin-left: 3 * $dot-gap;
    }
  }
}
</style>