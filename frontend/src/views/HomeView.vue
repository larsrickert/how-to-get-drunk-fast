<script lang="ts" setup>
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isPartyLoading = ref(false);

const handleJoinParty = async (partyCode: string) => {
  isPartyLoading.value = true;
  // TODO: check if party exists
  await router.push({
    path: "/player",
    query: { redirectTo: `/party/${partyCode}` },
  });
  isPartyLoading.value = false;
};

const handleCreateParty = async () => {
  await router.push({ path: "/player", query: { redirectTo: "/party/new" } });
};
</script>

<template>
  <HomeTemplate
    :is-party-loading="isPartyLoading"
    @join-party="handleJoinParty"
    @create-party="handleCreateParty"
  />
</template>
