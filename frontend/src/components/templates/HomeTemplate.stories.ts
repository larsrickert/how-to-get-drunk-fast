import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./HomeTemplate.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
  argTypes: {
    onJoinParty: { action: "joinParty" },
    onCreateParty: { action: "createParty" },
  },
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = { args: {} } satisfies Story;

export const Loading = {
  args: {
    isPartyLoading: true,
  },
} satisfies Story;
