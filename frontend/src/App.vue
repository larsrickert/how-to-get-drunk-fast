<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { ElContainer, ElHeader, ElMain } from "element-plus";
import { RouterView } from "vue-router";

// enable automatic dark mode based on user preferences
useDark();
</script>

<template>
  <el-container>
    <el-header>
      <h1>How To Get Drunk - Fast</h1>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="scss">
@use "@/styles/index.scss";

.el-header {
  border-bottom: 1px solid var(--el-border-color-light);
  box-shadow: var(--el-box-shadow);
  display: flex;
  align-items: center;

  h1 {
    font-weight: 600;
  }
}
</style>
