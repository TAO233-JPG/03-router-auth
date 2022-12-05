<script setup lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import PageComponent from "../components/PageComponent.vue";
import SideComponent from "../components/SideComponent.vue";
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <SideComponent />
    <PageComponent />
  </div>
</template>

<style>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
