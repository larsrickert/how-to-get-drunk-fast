<script lang="ts" setup>
import { PENALTY_LEVELS, type Player } from "@/stores/player";
import { UserFilled } from "@element-plus/icons-vue";
import { ElAvatar, ElButton, ElSlider } from "element-plus";
import { computed, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import CardAtom from "../atoms/CardAtom.vue";
import InputMolecule from "../molecules/InputMolecule.vue";

const props = defineProps<{
  headline?: string;
  submitLabel: string;
  initialValue?: Player;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (event: "submit", value: Player): void;
}>();

const { t } = useI18n();

const player = ref<Player>({ name: "", penaltyLevel: "default" });

const marks = computed(() => ({
  1: t("pages.player.penaltyLevel.low"),
  2: t("pages.player.penaltyLevel.default"),
  3: t("pages.player.penaltyLevel.high"),
}));

const handleSubmit = () => {
  emit("submit", { ...player.value });
};

watchEffect(() => {
  if (!props.initialValue) return;
  player.value = { ...props.initialValue };
});
</script>

<template>
  <div class="page__content">
    <div class="wrapper">
      <h1 class="page__headline">{{ props.headline }}</h1>

      <el-avatar :src="player.avatar" :icon="UserFilled" :size="128" />

      <CardAtom class="page__card">
        <h2>{{ t("pages.player.enterName") }}</h2>
        <InputMolecule
          v-model="player.name"
          :maxlength="24"
          :disabled="props.loading"
        />
      </CardAtom>

      <div class="penalty-level">
        <h2>{{ t("pages.player.penaltyLevel.headline") }}</h2>
        <el-slider
          :model-value="
            PENALTY_LEVELS.findIndex((i) => i === player.penaltyLevel) + 1 ?? 2
          "
          :min="1"
          :max="Object.keys(marks).length"
          :marks="marks"
          :show-tooltip="false"
          :disabled="props.loading"
          show-stops
          show-marks
          @update:model-value="
            player.penaltyLevel = PENALTY_LEVELS[($event as number) - 1]
          "
        />
      </div>

      <el-button
        type="primary"
        size="large"
        :loading="props.loading"
        :disabled="player.name.length < 3"
        @click="handleSubmit"
      >
        {{ props.submitLabel.toUpperCase() }}
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  text-align: center;

  .el-avatar {
    --el-avatar-icon-size: 64px;
    background-color: rgba(#c0c4cc, 0.5);
  }

  :deep(.el-slider__marks-text) {
    color: #fff;
    font-size: var(--el-font-size-large);
  }

  .penalty-level {
    width: calc(100% - 64px);
  }
}
</style>
