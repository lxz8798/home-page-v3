<template>
<!-- footer 公共组件 -->
<div class="Footer-wrap">
{{title}}
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
$FooterHeight: 0.8rem;
div.Footer-wrap {
  width: $childBaseWidth;
  height: $FooterHeight;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      title: "这里是公共用的底部!"
    };
  }
};
</script>
