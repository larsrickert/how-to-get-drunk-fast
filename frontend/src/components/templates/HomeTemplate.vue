<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { ElButton, ElInput, ElLink } from "element-plus";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CardAtom from "../atoms/CardAtom.vue";

const props = defineProps<{
  isPartyLoading?: boolean;
}>();

const emit = defineEmits<{
  (event: "joinParty", code: string): void;
  (event: "createParty"): void;
}>();

const { t } = useI18n();

const partyCode = ref("");
const partyCodeLength = 4 as const;

const handleJoinParty = () => {
  const code = partyCode.value.trim();
  if (code.length !== partyCodeLength) return;
  emit("joinParty", code);
};
</script>

<template>
  <div class="page__content">
    <h1 class="headline">{{ t("global.appName") }}</h1>

    <CardAtom class="join-party">
      <h2>{{ t("pages.home.joinParty") }}</h2>

      <el-input
        v-model="partyCode"
        :maxlength="partyCodeLength"
        :formatter="(value: string) => value.toUpperCase()"
        size="large"
        :readonly="props.isPartyLoading"
        :placeholder="t('pages.home.partyCodePlaceholder')"
        @keyup.enter="handleJoinParty"
      >
        <template #append>
          <el-button
            class="join-party__btn"
            :icon="ArrowRight"
            :disabled="partyCode.trim().length !== partyCodeLength"
            :loading="props.isPartyLoading"
            @click="handleJoinParty"
          />
        </template>
      </el-input>

      <div>
        <el-link :disabled="props.isPartyLoading" @click="emit('createParty')">
          {{ t("pages.home.createParty") }}
        </el-link>
      </div>
    </CardAtom>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins.scss" as *;

.headline {
  font-size: 3.5rem;
  font-weight: 600;
  text-align: center;

  @include breakpoint(m) {
    font-size: 2.5rem;
  }
}

.join-party {
  text-align: center;
  display: grid;
  gap: 16px;
  max-width: 400px;
  margin: 64px auto 0;

  h2 {
    font-size: 1.75rem;
    color: var(--el-text-color-primary);
  }

  .el-input {
    --el-input-height: 48px;

    :deep(.el-input__inner) {
      font-size: 26px;
      color: var(--el-color-primary);
      margin-right: -56px; // width of search button, needed to align the input value
    }
  }

  &__btn {
    font-size: 24px !important;
    display: flex !important;
  }
}
</style>
