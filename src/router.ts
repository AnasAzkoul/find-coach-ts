import { createRouter, createWebHistory } from "vue-router";
import { type Router } from "vue-router";

import HomePage from "./pages/HomePage.vue";

const routes = [{ path: "/", component: HomePage, name: "home" }];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
