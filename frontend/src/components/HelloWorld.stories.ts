import type { VueProps } from "@/types";
import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./HelloWorld.vue";

type Args = VueProps<typeof Component>;

export default { component: Component } as Meta<Args>;

export const Primary = {
  args: {
    msg: "Hello Storybook",
  },
} satisfies StoryObj<Args>;
