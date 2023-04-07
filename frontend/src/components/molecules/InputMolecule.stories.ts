import { ArrowRight } from "@element-plus/icons-vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { markRaw } from "vue";
import Component from "./InputMolecule.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
    onButtonClick: { action: "buttonClick" },
  },
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = {
  args: {
    placeholder: "Placeholder...",
  },
} satisfies Story;

export const WithIcon = {
  args: {
    placeholder: "Placeholder...",
    buttonIcon: markRaw(ArrowRight),
  },
} satisfies Story;

export const Loading = {
  args: {
    ...WithIcon.args,
    loading: true,
  },
} satisfies Story;

export const Readonly = {
  args: {
    ...WithIcon.args,
    buttonDisabled: true,
    readonly: true,
  },
} satisfies Story;
