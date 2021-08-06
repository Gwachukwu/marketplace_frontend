import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stores from "../components/Stores.vue";
import EditProfile from "../components/EditProfile.vue";
import StorePage from "../components/StorePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: Stores,
      },
      {
        path: "/edit-profile",
        component: EditProfile,
      },
      {
        path: "/s/:store_slug",
        component: StorePage,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
