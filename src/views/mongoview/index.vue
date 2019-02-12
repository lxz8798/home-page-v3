<template>
<div class="cssview-wrap">
  <Header :active="active"></Header>
  <!-- markdown -->
  <i-editor v-model="content"></i-editor>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.cssview-wrap {

}
</style>

<script>
export default {
  name: "cssview",
  data() {
    return {
      active: 4,
      content: ''
    };
  }
};
</script>
