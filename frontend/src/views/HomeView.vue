<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="page__content">
    <h1 class="headline">{{ t("global.appName") }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins.scss" as *;

.headline {
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;

  @include breakpoint(m) {
    font-size: 2.5rem;
  }
}
</style>
