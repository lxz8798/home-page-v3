import Vue from "vue";
import Phone from "./phone.vue";
import router from "../../router";
import store from "../../store/index";
import _ from "lodash";
import fly from "../../http";
import flexible from "amfe-flexible";

Vue.use(fly);
Vue.use(_);
Vue.use(flexible);

Vue.config.productionTip = false;

Vue.prototype.$http = fly;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(Phone)
}).$mount("#phone");