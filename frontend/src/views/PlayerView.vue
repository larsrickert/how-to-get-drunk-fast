<script lang="ts" setup>
import PlayerTemplate from "@/components/templates/PlayerTemplate.vue";
import { usePlayerStore, type Player } from "@/stores/player";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const playerStore = usePlayerStore();
const { t } = useI18n();
const router = useRouter();

const redirectTo = computed(() => {
  const queryValue = router.currentRoute.value.query.redirectTo;
  const singleValue = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return typeof singleValue === "string" ? singleValue : "";
});

const handleSubmit = async (player: Player) => {
  playerStore.update(player);
  if (redirectTo.value) {
    await router.push(redirectTo.value);
  }
};
</script>

<template>
  <PlayerTemplate
    :headline="
      t(`pages.player.headline.${playerStore.player ? 'edit' : 'add'}`)
    "
    :submit-label="
      playerStore.player ? t('global.save') : t('pages.player.join')
    "
    :initial-value="playerStore.player"
    @submit="handleSubmit"
  />
</template>
