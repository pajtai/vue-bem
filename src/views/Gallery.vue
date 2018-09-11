<template>
  <div class="page home">

      <section class="header">
        <h1 class="title">Gallery</h1>
        <button class="cta header__cta">Subscribe</button>
      </section>

      <section class="carousel">
        <img class="carousel__image" src=""/>
        <img class="carousel__image" src=""/>
        <img class="carousel__image" src=""/>
        <div class="carousel__arrow-left"></div>
        <div class="carousel__arrow-righ"></div>
        <div class="carousel__dots">
          <div class="carousel__dot"></div>
          <div class="carousel__dot"></div>
          <div class="carousel__dot"></div>
        </div>  
      </section>

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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
