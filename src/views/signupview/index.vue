<template>
<div class="signupview_wrap">
  <Header :active="active"></Header>
  <div class="signupview_box_wrap">
  </div>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.signupview_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  
  background: linear-gradient(to right bottom, darken($menuColor, 20%) 50%, $menuColor 50);
  div.signupview_box_wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    mix-blend-mode: overlay;
    background: url("http://pmek5nu6x.bkt.clouddn.com/bg.jpg") repeat 0 0;
    background-size: cover;
    opacity: 0.4;
  }
}
</style>

<script>
export default {
  name: "signupview",
  data() {
    return {
      active: 8,
    }
  }
}
</script>
