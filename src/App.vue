<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav__link" to="/">Gallery</router-link>
      <router-link class="nav__link" to="/archive">Archive</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style lang="scss">
@import "styles/reset";
@import "styles/colors";
@import "styles/css-only-blocks";
.nav {
  background-color: $nav-background;
  padding: 4px 24px 2px;
  &__link {
    color: $nav-color;
    text-decoration: none;
  }
  &__link + &__link {
    margin-left: 8px;
  }
}
</style>
