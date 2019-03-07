<template>
<div id="app">
  <router-view />
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
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.minWidth750();
  },
  computed: {
  },
  methods: {
    minWidth750() {
      let currWidth = window.innerWidth || 
              document.documentElement.clientWidth || 
              document.body.clientWidth;
      
    }
  }
}
</script>
