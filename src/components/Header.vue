<template>
  <section class="header">
    <h1 class="title header__title">{{ title }}</h1>
    <slot/>
    <button class="cta header__cta">{{ cta }}</button>
  </section>
</template>
<script>
export default {
  name: "header-component",
  props: ["title", "cta"]
};
</script>
<style lang="scss">
@import "../styles/colors";
@import "../styles/vars";

.header {
  &__title {
    color: $title;
  }
  &__cta {
    padding: 0 8px;
  }
  &__title,
  &__cta {
    display: inline-block;
    width: 50%;
  }
}
@media screen and (min-width: $mobile + 1) {
}
</style>
