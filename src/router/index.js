import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    // route level code-splitting
    // this generates a separate chunk (catalogue.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Catalogue.vue"),
  },
  {
    path: "/submit",
    name: "Submit Form",
    // route level code-splitting
    // this generates a separate chunk (submit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SubmitForm.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
