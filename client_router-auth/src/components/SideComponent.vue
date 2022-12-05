<template>
  <ul>
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li v-for="route of userStore.routeTree" :key="route.path">
      <MenuItemComponent :route-item="route" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import MenuItemComponent from "./MenuItemComponent.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<style></style>
