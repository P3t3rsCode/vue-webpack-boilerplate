import Home from "./components/Home";
import Vue from "vue";
import VueRouter from "vue-router";

const routes = [{ path: "/", component: Home }];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});
export default router;
