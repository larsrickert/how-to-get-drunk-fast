import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";

import "@/styles/element-plus.scss";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
