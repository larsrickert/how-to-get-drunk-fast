<script lang="ts" setup>
import { RouterView } from "vue-router";
import BackgroundAnimationAtom from "./components/atoms/BackgroundAnimationAtom.vue";
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
