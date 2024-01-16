import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/LandingView.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/CheckoutView.vue"),
  },
];

export default routes;
