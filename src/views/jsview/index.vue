<template>
<div class="jsview-wrap">
  <div class="jsview-box-wrap">
    <!-- 公共头部 -->
    <Header :active="1"></Header>
    <!-- 图文左右布局 -->
    <layout></layout>
    <Footer></Footer>
  </div>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.jsview-wrap {
  width: $childBaseWidth;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div.layout-wrap {
    margin-top: 0.8rem;
  }
  div.jsview-box-wrap {
    width: $boxWidth;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "jsview",
  data() {
    return {
      active: 1
    };
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>
