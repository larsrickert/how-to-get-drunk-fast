import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./CardAtom.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
  render: () => ({
    components: { Component },
    template: `<Component style="width: 400px;">Slot content</Component>`,
  }),
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = { args: {} } satisfies Story;
