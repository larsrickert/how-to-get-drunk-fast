<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import { ElButton, ElInput } from "element-plus";
import type { DefineComponent } from "vue";

const props = defineProps<{
  modelValue?: string;
  maxlength?: number;
  readonly?: boolean;
  placeholder?: string;
  buttonIcon?: DefineComponent;
  disabled?: boolean;
  buttonDisabled?: boolean;
  loading?: boolean;
  formatter?: (value: string) => string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
  (event: "buttonClick"): void;
}>();

const model = useVModel(props, "modelValue", emit);

const handleButtonClick = () => {
  if (props.readonly || props.loading || !props.buttonIcon) return;
  emit("buttonClick");
};
</script>

<template>
  <el-input
    v-model="model"
    :maxlength="props.maxlength"
    :formatter="props.formatter"
    :readonly="props.readonly || props.loading"
    :placeholder="props.placeholder"
    size="large"
    :class="{ 'has-btn': !!props.buttonIcon }"
    :disabled="props.disabled"
    @keyup.enter="handleButtonClick"
  >
    <template v-if="props.buttonIcon" #append>
      <el-button
        class="btn"
        :icon="props.buttonIcon"
        :disabled="props.buttonDisabled"
        :loading="props.loading"
        @click="handleButtonClick"
      />
    </template>
  </el-input>
</template>

<style lang="scss" scoped>
.el-input {
  --el-input-height: 48px;

  :deep(.el-input__inner) {
    font-size: 26px;
    color: var(--el-color-primary);
  }

  &.has-btn {
    :deep(.el-input__inner) {
      margin-right: -56px; // width of search button, needed to align the input value
    }
  }
}

.btn {
  font-size: 24px !important;
  display: flex !important;
}
</style>
