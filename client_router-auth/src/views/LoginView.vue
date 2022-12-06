<template>
  <div>username: <input type="text" v-model="username" /></div>
  <button @click="login_Handle">登录</button>
</template>
<script setup lang="ts">
import { generate_route } from "@/router/routre";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const username = ref("");
const login_Handle = async () => {
  userStore.set_username(username.value);
  try {
    await userStore.set_route_tree();
    if (userStore.routeTree.length) {
      const routes = generate_route(userStore.routeTree);
      routes.forEach((route) => {
        router.addRoute("home", route);
      });
      userStore.set_user_auth(true);
      router.replace("/");

      window.localStorage.setItem("username", username.value);
    } else {
      alert(`The user(${username.value}) has no access to the system`);
    }
  } catch (err) {
    alert(err);
    console.log(err, "error");
  }
};
</script>
<style></style>
