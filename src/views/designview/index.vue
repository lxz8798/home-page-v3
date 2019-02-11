<template>
<div class="designview-wrap">
  <Header :active="active"></Header>
  <!-- <div @click="impress().next()">上一步</div> -->
  <div class="designview-box-wrap">
    <div id="impress">
      <div class="step">第一屏</div>
      <div class="step">第二屏</div>
      <div class="step">第三屏</div>
    </div>
  </div>
  <!-- <div @click="api.next()">下一步</div> -->
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.designview-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  width: $childBaseWidth;
  height: $childBaseHeight;

  background: url("./../../assets/img/psbg.png") repeat 0 0;

  div.designview-box-wrap {
    width: $boxWidth;
    padding: $spancin;

    margin-top: $distanceHeader + $spancin;
  }
}
</style>

<script>
export default {
  name: "designview",
  data() {
    return {
      active: 3,
      prev: {},
      next: {}
    };
  }
};
</script>
