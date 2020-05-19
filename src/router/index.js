import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddSmoothieView from '../views/AddSmoothieView.vue'
import EditSmoothieView from '../views/EditSmoothieView.vue'

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
  },
  {
    path: '/edit-smoothie/:smoothie_slug',
    name: 'EditSmoothie',
    component: EditSmoothieView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
