<template>
<div class="jsview-wrap">
<!-- 公共头部 -->
<Header :active="1"></Header>
<!-- 图文左右布局 -->
<layout></layout>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.jsview-wrap {
  width: $childBaseWidth;
}
</style>

<script>
export default {
  name: "jsview",
  data() {
    return {
      active: 1
    };
  }
};
</script>
