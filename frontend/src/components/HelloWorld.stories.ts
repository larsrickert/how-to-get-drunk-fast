import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./HelloWorld.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = {
  args: {
    msg: "Hello Storybook",
  },
} satisfies Story;
