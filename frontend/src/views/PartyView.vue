<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const partyCode = computed(() => {
  const value = router.currentRoute.value.params.id;
  const singleValue = Array.isArray(value) ? value[0] : value;
  return singleValue === "new" ? "" : singleValue;
});
</script>

<template>
  <div class="page__content">
    <h1>Not implemented yet.</h1>

    <div v-if="partyCode">Party Code: {{ partyCode }}</div>
  </div>
</template>
