<template>
  <div class="page home">

      <Header title="Archive" cta="Subscribe">
        <h2 class="header__subtitle">2081 09</h2>
      </Header>

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
import Header from "../components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
