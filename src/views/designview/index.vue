<template>
  <div class="designview_wrap">
    <Header :active="active"></Header>
    <div class="designview_box_wrap">
      <row-layout :config="config"></row-layout>
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
    
    div.rowlayout_wrap {
      
      div.l {
        border-right: 0;
      }
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
      config: {
        left: {
          img: require("./../../assets/img/design/des1.png")
        },
        right: {
          img: require("./../../assets/img/design/jy1.png")
        }
      }
    };
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>
