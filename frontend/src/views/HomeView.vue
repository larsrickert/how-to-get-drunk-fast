<script lang="ts" setup>
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { promiseTimeout } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { ref } from "vue";

const isPartyLoading = ref(false);

const handleJoinParty = async (partyCode: string) => {
  isPartyLoading.value = true;
  await promiseTimeout(1000);
  ElMessage({
    message: `Not implemented yet. Party code: ${partyCode}`,
    type: "warning",
    grouping: true,
  });
  isPartyLoading.value = false;
};

const handleCreateParty = () => {
  ElMessage({
    message: "Not implemented yet.",
    type: "warning",
    grouping: true,
  });
};
</script>

<template>
  <HomeTemplate
    :is-party-loading="isPartyLoading"
    @join-party="handleJoinParty"
    @create-party="handleCreateParty"
  />
</template>
