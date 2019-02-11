<template>
  <div class="first_screen_wrap" :class="switchImg ? 'img1' : 'img2'">
    <!-- 公共头部 -->
    <Header :active="active"></Header>
    <div :class="switchImg ? 'offsetNeg' : 'offsetPos'">
      <h1>懒虫的窝</h1>
      <p>LAZY-STUDIO.COM</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 0,
      switchImg: true
    }
  },
  mounted() {
    this.switchImgFn();
  },
  methods: {
    switchImgFn() {
      setInterval(() => {
        this.switchImg = !this.switchImg;
      },6000)
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.first_screen_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    transition: all 0.3s ease;
  }
  div.offsetPos {
    opacity: 1;
    margin-left: 4.5rem;
  }
  div.offsetNeg {
    opacity: 1;
    margin-left: -4.5rem;
  }
  h1,
  p {
    color: rgba(255,255,255,0.8);
    mix-blend-mode: overlay;
  }
  h1 {
    font-size: 1rem;
    margin: 0;
    font: 0.8rem sans-serif;
  }
  p {
    font: 0.3rem sans-serif;
    border-top: 2px solid rgba(255,255,255,0.6);;
    transform: translate(2%, 2%);
  }
}
.img1 {
  background: url("http://pmek5nu6x.bkt.clouddn.com/girl-on-the-meadow,-yellow-meadow,-high-grass-204975.jpg")
    no-repeat 0 50% / cover;
}
.img2 {
  background: url("http://pmek5nu6x.bkt.clouddn.com/timg.jpg") no-repeat 10% 0 / cover;
}
</style>