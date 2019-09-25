import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "../src/routes";
import StoreData from "../src/store";
console.log(router);
Vue.use(Vuex);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.

const store = new Vuex.Store(StoreData);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
