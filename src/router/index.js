import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../pages/MainPage";
import FilmsPage from "../pages/FilmsPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/filmsPage",
    name: "films",
    component: FilmsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
