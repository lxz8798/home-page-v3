<template>
  <div class="designview_wrap">
    <Header :active="active"></Header>
    <div class="designview_box_wrap">
      <div class="designview-prev" @click="impressPrevStep()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-zuo"></use>
        </svg>
      </div>
      <div class="designview-box-wrap" tabindex="1" ref="designView" @keyup.right.space="impressNextStep"
          @keyup.left="impressPrevStep">
        <impress-viewport ref="impress" :steps="steps" :config="config"></impress-viewport>
      </div>
      <div class="designview-next" @click="impressNextStep()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.designview_wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $childBaseWidth;

  background: url("./../../assets/img/psbg.png") repeat 0 0;
  div.designview_box_wrap {
    width: $boxWidth;
    height: $childBaseHeight;
  }
  div.designview-prev,
  div.designview-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    svg {
      width: 0.6rem;
      height: 0.8rem;

      fill: $fontColor;
      transition: all 0.5s ease;
    }
    svg:hover {
      fill: $menuColor;
    }
  }
  div.designview-prev {
    left: 2%;
  }
  div.designview-next {
    right: 2%;
  }
  div.designview-box-wrap {
    width: $boxWidth;
    height: inherit;
    margin: 0 !important;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    margin-top: $distanceHeader + $spancin;
    outline: none;
    .impress-step {
      width: 500px;
      border: solid 1px;
      text-align: center;
      cursor: pointer;
    }
    .impress-viewport.overview .impress-step:not(.active) {
      opacity: 0;
    }
    .impress-step.active {
      cursor: auto;
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
        width: 1000, // required
        height: 600, // required
        transitionDuration: 1200, // default 1000
        perspective: 800, // default 1000

        /* in fullscreen, only first viewport instance work, others are meaningless
         * 若全屏模式，则只有第一个viewport的实例可以正常工作，大概...
         * 全屏的话，第一个实例会占满窗口，就像impress.js的例子一样，他实例也没有意义 */
        fullscreen: true // default true
      },
      steps: [
        {
          x: 500,
          y: 0,
          /* string content
           * 可以传入普通文本
           */
          content:
            "Hint: press space, right key to next step, left to prev step",
          id: "firstStep"
        },
        {
          x: 0,
          y: -300,
          scale: 2,
          /* content could be vue component
           * 可以传入vue组件
           */
          // component: CustomCom,
          /* props is optional
           * props按需传，没有可不写
           */
          props: {
            myname: "abc"
          },
          transitionDuration: 1000
          // transitionTimingFunction: 'linear', // default 'ease'
        },
        {
          x: 1000,
          y: -200,
          z: 200,
          rotateX: 80,
          scale: 3,
          content: "X axis rotate",
          id: "xRotateStep"
        },
        {
          x: 0,
          y: 0,
          rotate: 720,
          content: "z rotate step",
          id: "zRotateStep"
        },
        {
          x: 0,
          y: 1000,
          z: 900,
          scale: 5,
          content: "overview",
          id: "overview"
        }
      ]
    };
  },
  mounted() {
    this.$refs.designView.focus();
  },
  methods: {
    impressPrevStep() {
      this.$refs.impress.prevStep();
    },
    impressNextStep() {
      this.$refs.impress.nextStep();
    }
  }
};
</script>
