import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
