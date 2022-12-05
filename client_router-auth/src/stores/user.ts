import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { RouteT } from "@/types/types";
import { login } from "@/server";
import { format_route_tree } from "@/utils/utils";

export const useUserStore = defineStore("user", () => {
  const username = ref<string>("");
  const hasAuth = ref(false);
  let routeTree = reactive<RouteT[]>([]);

  const set_username = (name: string) => {
    username.value = name;
  };
  const set_route_list = async function () {
    const lists = await login({ username: username.value });
    const _routeTree = format_route_tree(lists);
    routeTree = _routeTree;
  };

  const set_user_auth = function (auth: boolean) {
    hasAuth.value = auth;
  };

  return {
    username,
    hasAuth,
    routeTree,
    set_route_list,
    set_user_auth,
    set_username,
  };
});
