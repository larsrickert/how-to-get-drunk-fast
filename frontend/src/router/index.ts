import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/player",
      name: "player",
      component: () => import("@/views/PlayerView.vue"),
    },
    {
      path: "/party/:id",
      name: "party",
      component: () => import("@/views/PartyView.vue"),
    },
  ],
});

export default router;
