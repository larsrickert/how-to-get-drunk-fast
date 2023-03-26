import "@/styles/element-plus.scss";
import "@/styles/index.scss";
import { setup, type Preview } from "@storybook/vue3";
import i18n from "../src/i18n";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

setup((app) => {
  app.use(i18n);
});
