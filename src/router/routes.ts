import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/LandingView.vue"),
  },
];

export default routes;
