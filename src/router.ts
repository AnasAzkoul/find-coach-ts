import { createRouter, createWebHistory } from "vue-router";
import { type Router } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import SignUpPage from "@/pages/auth/signUpPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/sign-up", component: SignUpPage, name: "signup" },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
