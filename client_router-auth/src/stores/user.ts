import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { RouteT } from "@/types/types";
import { login } from "@/server";
import { format_route_tree } from "@/utils/utils";
import { generate_route } from "@/router/routre";

export const useUserStore = defineStore("user", () => {
  const username = ref<string>("");
  const hasAuth = ref(false);
  const routeTree = ref<RouteT[]>([]);

  const set_username = (name: string) => {
    username.value = name;
  };
  const set_route_tree = async function () {
    const lists = await login({ username: username.value });
    const _routeTree = format_route_tree(lists);
    routeTree.value = _routeTree;
    const routes = generate_route(routeTree.value);
  };

  const set_user_auth = function (auth: boolean) {
    hasAuth.value = auth;
  };

  return {
    username,
    hasAuth,
    routeTree,
    set_route_tree,
    set_user_auth,
    set_username,
  };
});
