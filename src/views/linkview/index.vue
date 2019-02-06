<template>
<div class="cssview-wrap">
<Header :active="active"></Header>
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
      active: 5
    };
  }
}
</script>
