<template>
  <div class="page home">

      <section class="header">
        <h1 class="title">Archive</h1>
        <h2>2018 09</h2>
        <button class="cta header__cta">Subscribe</button>
      </section>

      <section class="posts">
        <div class="post">
          <div class="actions comment__actions">
              <div class="actions__favorite"></div>
              <div class="actions__reply"></div>
            </div>
            <p class="post__contents"></p>
        </div>
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
