import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// vue axios
import axios from "axios";
import VueAxios from "vue-axios";

// Import vue3-loading
import VueLoading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { currency, date } from "./methods/filters";

// ----------------------------------
const app = createApp(App);
// 全域註冊
app.component("VueLoading", VueLoading);
app.use(VueAxios, axios);
app.use(router);
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.config.globalProperties.currency = app.mount("#app");
