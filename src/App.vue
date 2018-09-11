<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav-link" to="/">Gallery</router-link> |
      <router-link class="nav-link" to="/archive">Archive</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  font-family: "Roboto", "sans-serif";
}
.title {
  color: darkgrey;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
}
.page {
  margin: 24px 24px;
}
</style>
