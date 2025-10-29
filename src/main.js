import Vue from "vue";
import App from "./App.vue";
import {
  PencilIcon,
  SearchIcon,
  UserAddIcon
} from "@vue-hero-icons/outline";

Vue.component("PencilIcon", PencilIcon);
Vue.component("SearchIcon", SearchIcon);
Vue.component("UserAddIcon", UserAddIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
