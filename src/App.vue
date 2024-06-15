<script setup lang="ts">
import BaseHeader from "./components/layout/BaseHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <BaseHeader />
  <main>
    <RouterView />
  </main>
</template>
