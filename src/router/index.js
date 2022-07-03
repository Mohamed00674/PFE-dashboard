import Vue from "vue";
import Router from "vue-router";

import layout from "../layout";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  mode: "history",
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/pages/dashboard"),
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/pages/dashboard/profile"),
        },
      ],
    },
    {
      path: "/basic",
      component: layout,
      children: [
        {
          path: "facebook",
          name: "facebook",
          component: () => import("@/pages/basic-ui/facebook"),
        },
        {
          path: "instagram",
          name: "instagram",
          component: () => import("@/pages/basic-ui/Instagram"),
        },
        {
          path: "linkedin",
          name: "linkedin",
          component: () => import("@/pages/basic-ui/linkedin"),
        },
        {
          path: "twitter",
          name: "twitter",
          component: () => import("@/pages/basic-ui/twitter"),
        },
      ],
    },
    {
      path: "/charts",
      component: layout,
      children: [
        {
          path: "chartjs",
          name: "chartjs",
          component: () => import("@/pages/charts/chartjs"),
        },
      ],
    },
    {
      path: "/tables",
      component: layout,
      children: [
        {
          path: "basic-tables",
          name: "basic-tables",
          component: () => import("@/pages/tables/basic-tables"),
        },
      ],
    },
    {
      path: "/auth",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/pages/samples/auth-pages/login"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/pages/samples/auth-pages/register"),
        },
        {
          path: "forget",
          name: "forget",
          component: () => import("@/pages/samples/auth-pages/forget"),
        },
        {
          path: "reset",
          name: "reset",
          component: () => import("@/pages/samples/auth-pages/reset"),
        },
      ],
    },
    {
      path: "/error-pages",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "error-404",
          name: "error-404",
          component: () => import("@/pages/samples/error-pages/error-404"),
        },
        {
          path: "error-500",
          name: "error-500",
          component: () => import("@/pages/samples/error-pages/error-500"),
        },
      ],
    },
    {
      path: "/icons",
      component: layout,
      children: [
        {
          path: "mdi-icons",
          name: "mdi-icons",
          component: () => import("@/pages/icons/mdi-icons"),
        },
      ],
    },
    {
      path: "*",
      redirect: "/error-404",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "error-404",
          component: () => import("@/pages/samples/error-pages/error-404"),
        },
      ],
    },
  ],
});
