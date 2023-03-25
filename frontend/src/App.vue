<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { RouterView } from "vue-router";
import BackgroundAnimationAtom from "./components/atoms/BackgroundAnimationAtom.vue";

// enable automatic dark mode based on user preferences
useDark();
</script>

<template>
  <div>
    <BackgroundAnimationAtom />
    <router-view />
  </div>
</template>

<style lang="scss">
@use "@/styles/index.scss";
</style>
