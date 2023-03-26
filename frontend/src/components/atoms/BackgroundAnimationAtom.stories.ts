import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./BackgroundAnimationAtom.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = { args: {} } satisfies Story;
