import { createApp } from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Store from "./store";

createApp(App).use(Store, Router).mount("#app");