<template>
  <div class="rowlayout_wrap">
    <div v-if="hasH5" class="l">
      <slot name="divL">
        <img :src="config.left.img" alt="">
      </slot>
    </div>
    <div class="r">
      <slot name="divR">
        <img :src="config.right.img" alt="">
      </slot>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "rowLayout",
  props: ["config"],
  data() {
    return {};
  },
  computed: {
    ...mapState(['hasH5'])
  }
};
</script>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.rowlayout_wrap {
  width: $boxWidth;
  padding: $spancin;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div.l,
  div.r {
    height: 100%;
    display: flex;
    img {
      width: inherit;
    }
  }
  div.l {
    order: 1;
  }
  div.r {
    order: 2;
    padding: 0 $spancin;
  }
}
</style>
