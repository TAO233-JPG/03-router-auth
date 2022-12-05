<template>
  <ul v-if="routeItem.children && routeItem.children.length">
    <li>
      <router-link :to="`${routeItem.link || routeItem.path}`">{{
        routeItem.title
      }}</router-link>
    </li>
    <template v-for="child of routeItem.children" :key="child.path">
      <MenuItemComponent :routeItem="child" />
    </template>
  </ul>
  <ul v-else>
    <li>
      <router-link :to="`${routeItem.link || routeItem.path}`">{{
        routeItem.title
      }}</router-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { RouteT } from "@/types/types";

defineProps<{ routeItem: RouteT }>();
</script>
<style></style>
