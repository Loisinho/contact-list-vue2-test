import Vue from "vue";
import App from "./App.vue";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
  SearchIcon,
  UserAddIcon
} from "@vue-hero-icons/outline";

Vue.component("ChevronDownIcon", ChevronDownIcon);
Vue.component("ChevronUpIcon", ChevronUpIcon);
Vue.component("PencilIcon", PencilIcon);
Vue.component("SearchIcon", SearchIcon);
Vue.component("UserAddIcon", UserAddIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
