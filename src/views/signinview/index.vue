<template>
<div class="signinview_wrap">
  <Header :active="active"></Header>
  <div class="signinview_box_wrap">
    <div class="l">
      <h1>页面制作中，更新时间请看UPDATE。。。</h1>
    </div>
    <div class="r">
      <img src="./../../assets/img/logo/logo-cg.png" alt="">
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.signinview_wrap {
  width: $childBaseWidth;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div.signinview_box_wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: $boxWidth;
    height: 5rem;
    margin-top: $distanceHeader + $spancin;
  }
}
</style>

<script>
export default {
  name: "signinview",
  data() {
    return {
      active: 7,
    }
  }
}
</script>
