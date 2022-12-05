<template>
  <div>username: <input type="text" v-model="username" /></div>
  <button @click="login_Handle">登录</button>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const userStore = useUserStore();

const username = ref("");
const login_Handle =async () => {
  // eslint-disable-next-line no-undef
  userStore.set_username(username.value);
  await userStore.set_route_tree();
};
</script>
<style></style>
