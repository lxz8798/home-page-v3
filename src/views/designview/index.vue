<template>
  <div class="designview_wrap">
    <Header :active="active"></Header>
    <div class="designview_box_wrap">
      <layout>
        <div slot="layoutContent">
          <h2 slot="layoutLP">
            <img :src="img1L.src" alt="">
          </h2>
        </div>
        <div slot="layoutR" class="changeImg">
          <img slot="layoutRImg" :src="img1R.src" alt="">
        </div>
      </layout>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.designview_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $childBaseWidth;
  height: auto;
  background: url("./../../assets/img/psbg.png") repeat 0 0;
  div.designview_box_wrap {
    display: flex;
    flex-direction: row;
    width: $boxWidth;
    margin-top: $distanceHeader + $spancin;
    
    div.l,
    div.r {
      flex: 0;
      margin: 0;
      padding: 0;
    }
    div.changeImg {
      transform: translateY(-1rem);
    }
  }
}
</style>

<script>
export default {
  name: "designview",
  data() {
    return {
      active: 3,
      img1L: {
        src: require("./../../assets/img/design/des1.png")
      },
      img1R: {
        src: require("./../../assets/img/design/jy1.png")
      }
    };
  }
};
</script>
