import Vue from "vue";
import App from "./App.vue";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  UserAddIcon,
  XIcon
} from "@vue-hero-icons/outline";

Vue.component("ChevronDownIcon", ChevronDownIcon);
Vue.component("ChevronUpIcon", ChevronUpIcon);
Vue.component("PencilIcon", PencilIcon);
Vue.component("PlusIcon", PlusIcon);
Vue.component("SearchIcon", SearchIcon);
Vue.component("UserAddIcon", UserAddIcon);
Vue.component("XIcon", XIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
