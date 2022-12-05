import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUserStore } from "@/stores/user";
import { generate_route } from "./routre";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const userStore = useUserStore();
  if (to.path === "/login" || userStore.hasAuth) {
    return true;
  }
  if (!userStore.hasAuth) {
    return {
      path: "/login",
    };
  }
});
export default router;
