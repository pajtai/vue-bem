<template>
  <div class="page archive">

      <Header class="archive__header" title="Archive" cta="Subscribe"/>

      <p class="content archive__content">
        <Carousel class="content__aside">
          <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+One"/>
          <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Two"/>
          <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Three"/>
        </Carousel>
        {{text}}
      </p>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/Carousel-Slide.vue";
import Header from "../components/Header.vue";

export default {
  name: "home",
  data: () => {
    return {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate pharetra mauris, ac ornare sapien faucibus sit amet. Mauris rhoncus condimentum euismod. Integer ac ex vel augue rutrum venenatis vitae id libero. Fusce quis sodales felis, sit amet lobortis enim. Vestibulum mollis nisi id lorem viverra gravida. Donec varius tempor elit. Nulla mauris sapien, volutpat at maximus id, facilisis id tellus. Cras et magna in justo porttitor fringilla at vitae libero. Proin vitae facilisis ligula. Curabitur libero est, ullamcorper at scelerisque ut, fringilla ut est. Suspendisse sed urna quis eros lobortis semper.

Donec aliquet venenatis molestie. Ut ullamcorper massa ac magna elementum auctor. Nam ultricies massa et fringilla lobortis. Phasellus bibendum lorem ex, vitae iaculis felis condimentum non. Curabitur at neque ut dolor egestas aliquet. Cras volutpat commodo erat sed efficitur. In eget condimentum ligula, vel mollis velit. Quisque ultrices lectus est, quis feugiat massa placerat id. In interdum metus felis, at dignissim risus rutrum et.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus mi, placerat et eleifend rhoncus, volutpat id orci. Donec finibus dolor augue, ac pretium risus tempus et. Pellentesque ornare, justo consectetur vehicula venenatis, mauris tellus dapibus nisi, sed sagittis nibh purus nec lacus. Nullam vel sodales nibh, eget commodo felis. Mauris urna elit, laoreet in lorem euismod, blandit sagittis erat. Sed gravida felis nec metus ullamcorper, ac faucibus ligula varius.`
    };
  },
  components: {
    Carousel,
    "Carousel-Slide": CarouselSlide,
    Header
  }
};
</script>
<style lang="scss">
@import "../styles/vars";

.archive {
  &__header {
    margin-top: 16px;
  }
  &__content {
    margin-top: 16px;
  }
}

.content {
  &__aside {
    display: none;
  }
}

@media screen and (min-width: $mobile + 1){
  .content {
    &__aside {
      display: initial;
      float: right;
      margin-left: 8px;
    }
  }
  .header {
    position: relative;
    &__cta {
      right: 0;
      position: absolute;
    }
  }
}
</style>
