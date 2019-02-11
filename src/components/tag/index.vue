<template>
<div class="tag-wrap">
  <Tag v-for="(tag, index) in tagList" :key="index" :color="tag.color">{{tag.name}}</Tag>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.tag-wrap {
  display: flex;
  flex-direction: row;
  margin-top: $spancin;
  div.ivu-tag {
    margin: 0;
    margin-right: $spancin;
    height: 0.28rem;
    line-height: 0.28rem;
    span.ivu-tag-text {
      color: white !important;      
    }
    span.ivu-tag-text:hover {
      display: inline-block;
      transition: all 0.3s ease;
      color: lighten($fontColor, 20%) !important;
    }
  }
}
</style>

<script>
import { Tag } from 'iview';
export default {
  name: "tagComp",
  props: ["tagList"],
  components: { Tag },
  data() {
    return {
      
    }
  }
}
</script>
