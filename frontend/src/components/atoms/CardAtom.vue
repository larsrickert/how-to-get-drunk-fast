<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: #fff;
  box-shadow: var(--el-box-shadow);
  border-radius: var(--el-border-radius-round);
  padding: 16px;
  color: var(--el-text-color-regular);
}
</style>
