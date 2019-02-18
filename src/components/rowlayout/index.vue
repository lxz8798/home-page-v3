<template>
  <div class="rowlayout_wrap">
    <div class="l">
      <img :src="config.left.img" alt="">
    </div>
    <div class="r">
      <img :src="config.right.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "rowLayout",
  props: ["config"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.rowlayout_wrap {
  width: $boxWidth;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div.l,
  div.r {
    display: flex;
  }
  div.l {
    order: 1;
  }
  div.r {
    order: 2;
  }
}
</style>
