import { HOME_CURR_PUBLIC_WIDTH, HAS_H5 } from "./mutation-types";

const mutations = {
  [HOME_CURR_PUBLIC_WIDTH](state, value) {
    let currW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    state.currWidth = currW;
    if(currW < 750) {
      state.hasH5 = false;
    } else {
      state.hasH5 = true;
    }
  }
};
export default mutations;
