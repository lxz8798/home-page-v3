<template>
  <div class="skills_box_wrap">
    <div class="skills_icon">
      <svg class="qq-icon" aria-hidden="true">
        <slot name="skillsIcon">
          <use xlink:href="#icon-socialnodejs" slot="skillsIcon"></use>
        </slot>
      </svg>
    </div>
    <div class="skills_rage">
      <slot name="skillsH2"
        ><h2>{{ config.title }}</h2></slot
      >
      <slot name="skillsRate">
        <Rate
          show-text
          allow-half
          v-model="config.valueCustomText"
          icon="ios-cafe"
        >
          <span style="color: #f5a623">{{ config.valueCustomText }}</span>
        </Rate>
      </slot>
    </div>
    <span class="skills_des">
      <slot name="skillsDes">{{ config.des }}</slot>
    </span>
  </div>
</template>

<script>
import { Rate } from "iview";
export default {
  name: "skillsLayout",
  components: { Rate },
  data() {
    return {
      config: {
        title: "占位标题!",
        valueCustomText: 5,
        des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero cum et quisquam repellendus voluptas ipsum molestias. Doloremque ad aliquam totam maxime voluptatibus officia, quod, tenetur, hic nisi laborum repudiandae."
      }
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/base/base";
div.skills_box_wrap {
  flex: 1 1 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-all;
  padding: $spancin;
  margin-bottom: $spancin;
  transition: all 0.5s ease;
  cursor: pointer;
  div.skills_icon,
  div.skills_rage,
  span.skills_des {
    width: 100%;
  }
  div.skills_icon {
    width: 100%;
    display: flex;
    svg {
      width: 0.5rem;
      height: 0.5rem;
      fill: lighten($fontColor, 15%);
      transition: all 0.5s ease;
    }
  }
  div.skills_rage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      height: 0.55rem;
      line-height: 0.55rem;
      margin-top: $spancin;
      color: lighten($fontColor, 15%);
      transition: all 0.5s ease;
    }
  }
  span.skills_des {
    height: 1.4rem;
    line-height: 180%;
    margin-top: $spancin;
    font-size: 0.12rem;
  }
}
div.skills_box_wrap:hover {
  background: lighten($fontColor, 35%);
  div.skills_icon {
    svg {
      fill: $menuColor;
    }
  }
  div.skills_rage {
    h2 {
      color: $menuColor;
    }
  }
}
</style>
