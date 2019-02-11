<template>
  <div class="update-wrap">
    <Header :active="active"></Header>
    <div class="update-box-wrap">
      <Timeline>
      <Timeline-item>
        <p class="time">1976年</p>
        <p class="content">Apple I 问世</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">1984年</p>
        <p class="content">发布 Macintosh</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2007年</p>
        <p class="content">发布 iPhone</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2010年</p>
        <p class="content">发布 iPad</p>
      </Timeline-item>
      <Timeline-item>
        <p class="time">2011年10月5日</p>
        <p class="content">史蒂夫·乔布斯去世</p>
      </Timeline-item>
    </Timeline>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.update-wrap {
  display: flex;
  justify-content: center;
  margin-top: $distanceHeader + $spancin;
  width: $childBaseWidth;

  div.update-box-wrap {
    width: $boxWidth;
  }
}
</style>

<script>
import { Timeline, TimelineItem } from "iview";
export default {
  name: "update",
  components: { Timeline, TimelineItem },
  data() {
    return {
      active: 6
    };
  }
};
</script>
