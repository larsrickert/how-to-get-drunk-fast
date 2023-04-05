<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { ElLink } from "element-plus";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CardAtom from "../atoms/CardAtom.vue";
import InputMolecule from "../molecules/InputMolecule.vue";

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

    <CardAtom class="page__card">
      <h2>{{ t("pages.home.joinParty") }}</h2>

      <InputMolecule
        v-model="partyCode"
        :maxlength="partyCodeLength"
        :readonly="props.isPartyLoading"
        :placeholder="t('pages.home.partyCodePlaceholder')"
        :button-icon="ArrowRight"
        :button-disabled="partyCode.trim().length !== partyCodeLength"
        :formatter="(value: string) => value.toUpperCase()"
        :loading="props.isPartyLoading"
        @button-click="handleJoinParty"
      />

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

.page {
  &__card {
    margin: 64px auto 0;
  }
}
</style>
