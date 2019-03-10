<template>
  <div class="loading_wrap loader21">
    <div class="loader-21">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
    data() {
      return {};
    }
  }
</script>

<style lang="scss" scoped>
@import "./../../assets/base/base";
div.loading_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  background: white;
}
</style>