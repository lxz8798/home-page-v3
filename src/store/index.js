// types.js 内定义常量，使用常量替代 mutation 事件类型
// user.js 内写该 user 组件内用到的 state 、 getters 、 actions 和 mutations，并最后统一导出（类似上个例子中的 store.js ）
// getters.js 内写原来的 getters ，用来获取属性
// actions.js 内写原来的 actions ，就是要执行的动作，如流程的判断、异步请求
// index.js 是用来组装 actions.js 、 getters.js 、user.js 的，然后进行统一的导出
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import home from "./modules/home";

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    home
  }
});
