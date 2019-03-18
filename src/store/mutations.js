import { HOME_CURR_PUBLIC_WIDTH, HAS_H5 } from "./mutation-types";

const mutations = {
  [HOME_CURR_PUBLIC_WIDTH](state, value) {
    state.hasH5 = value
  }
};
export default mutations;
