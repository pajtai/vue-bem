<template>
  <div class="page gallery">

      <Header title="Gallery" cta="Subscribe" class="gallery__header">
        <h2 class="header__subtitle">Flowers</h2>
      </Header>

      <Carousel class="gallery__carousel carousel--full-width">
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+One"/>
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Two"/>
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Three"/>
      </Carousel>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/Carousel-Slide.vue";
import Header from "../components/Header.vue";

export default {
  name: "gallery",
  components: {
    Carousel,
    "Carousel-Slide": CarouselSlide,
    Header
  }
};
</script>
<style lang="scss">
@import "../styles/colors";
@import "../styles/vars";

.gallery {
  &__header {
    margin-top: 24px;
  }
  &__carousel {
    margin-top: 16px;
  }
}
.header {
  &__subtitle {
    display: inline-block;
    margin-left: 24px;

    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: $subtitle;
  }
  &__title, &__subtitle {
    width: initial;
  }
  &__cta {
    display: block;
    width: initial;

    margin-top: 8px;
  }
}

@media screen and (min-width: $mobile + 1) {
  .header {
    &__title, &__cta, &__subtitle {
      width: 33%;
    }
    &__subtitle {
      margin-left: 0;
    }
    &__cta {
      display: inline-block;
    }
  }
}
</style>
