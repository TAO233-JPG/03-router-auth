import type { RouteT } from "@/types/types";
import type { RouteRecordRaw } from "vue-router";

export const generate_route = (routeTree: RouteT[]): RouteRecordRaw[] => {
  const newRoutes = routeTree.map((route) => {
    const _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: () => import(`@/views${route.name}View.vue`),
      children: [],
    };

    if (route.children) {
      _route.children = generate_route(route.children);
    }

    return _route;
  });

  return newRoutes;
};
