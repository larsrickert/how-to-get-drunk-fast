import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./PlayerTemplate.vue";

type Story = StoryObj<typeof Component>;

const meta = {
  component: Component,
  argTypes: {
    onSubmit: { action: "submit" },
  },
} satisfies Meta<typeof Component>;
export default meta;

export const Primary = {
  args: {
    headline: "Create new player",
    submitLabel: "Join",
  },
} satisfies Story;

export const WithInitialData = {
  args: {
    headline: "Edit player",
    submitLabel: "Save",
    initialValue: {
      name: "John Doe",
      avatar: "",
      penaltyLevel: "high",
    },
  },
} satisfies Story;

export const Loading = {
  args: {
    ...WithInitialData.args,
    loading: true,
  },
} satisfies Story;
