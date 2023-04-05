<script lang="ts" setup>
import PlayerTemplate from "@/components/templates/PlayerTemplate.vue";
import { usePlayerStore } from "@/stores/player";
import { useI18n } from "vue-i18n";

const playerStore = usePlayerStore();
const { t } = useI18n();
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
    @submit="playerStore.update"
  />
</template>
