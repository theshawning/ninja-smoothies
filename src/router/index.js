import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddSmoothieView from '../views/AddSmoothieView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-smoothie",
    name: 'AddSmoothie',
    component: AddSmoothieView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
