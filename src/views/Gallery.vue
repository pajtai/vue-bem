<template>
  <div class="page gallery">

      <Header title="Gallery" cta="Subscribe"/>

      <Carousel class="gallery__carousel">
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+One"/>
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Two"/>
        <Carousel-Slide src="https://via.placeholder.com/300x200?text=Slide+Three"/>
      </Carousel>

      <section class="comments">
        <div class="comment">
          <div class="comment__contents">
            <p><span class="comment_author">Bob said:</span> I agree.</p>
            <div class="actions comment__actions">
              <div class="actions__favorite"></div>
              <div class="actions__reply"></div>
            </div>
          </div>
        </div>
        <div class="comment comment--prommoted"></div>
        <div class="comment"></div>
        <div class="comment"></div>
        <div class="comment"></div>
      </section>

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
    'Carousel-Slide': CarouselSlide,
    Header
  }
};
</script>
