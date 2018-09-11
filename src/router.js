import Vue from "vue";
import Router from "vue-router";
import Archive from "./views/Archive.vue";
import Gallery from "./views/Gallery.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive
    }
  ]
});
