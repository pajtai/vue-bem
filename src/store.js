import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slideShown: null
  },
  mutations: {
    updateSlide: function(state, slideShown) {
      Object.assign(state, { slideShown });
    }
  },
  actions: {},
  getters: {
    slideShown: state => {
      return state.slideShown;
    }
  }
});
