<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "./assets/base/base";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "MSYH";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    window.onresize = () => {
      this.HOME_CURR_PUBLIC_WIDTH();
    };
  },
  methods: {
    ...mapMutations(["HOME_CURR_PUBLIC_WIDTH"]),
  }
};
</script>
