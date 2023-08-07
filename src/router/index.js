import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashBoard.vue"),
    children: [
      {
        path: "productlist",
        name: "productlist",
        component: () => import("../views/ProductList.vue"),
      },
      {
        path: "orderlist",
        name: "orderlist",
        component: () => import("../views/OrderList.vue"),
      },
      {
        path: "couponlist",
        name: "couponlist",
        component: () => import("../views/CouponList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
