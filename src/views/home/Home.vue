<template>
  <div class="first_screen_wrap">
    <!-- 公共头部 -->
    <Header :active="active"></Header>
    <div class="first_box_wrap" :class="switchImg ? 'img1' : 'img2'">
      <div :class="switchImg ? 'offsetNeg' : 'offsetPos'">
        <h1>懒虫的窝</h1>
        <p>LAZY-STUDIO.COM</p>
      </div>
      <ul class="banner_button_ul">
        <li :class="switchImg ? 'ifOpacityA' : 'ifOpacityB'"></li>
        <li :class="switchImg ? 'ifOpacityB' : 'ifOpacityA'"></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 0,
      imgLen: 2,
      switchImg: true
    };
  },
  mounted() {
    this.switchImgFn();
    this.$Loading.finish();
  },
  methods: {
    switchImgFn() {
      setInterval(() => {
        this.switchImg = !this.switchImg;
      }, 6000);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.first_screen_wrap {
  width: $childBaseWidth;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul.banner_button_ul {
    display: inline-flex;
    flex-direction: row;
    transform: translateY(2.4rem);
    .ifOpacityA,
    .ifOpacityB {
      transition: all 0.3s ease;
    }
    .ifOpacityA {
      opacity: 0.3;
    }
    .ifOpacityB {
      opacity: 1;
    }
    li {
      width: 0.3rem;
      height: 0.05rem;
      background: white;
      margin-right: $spancin;
      cursor: pointer;
      
    }
  }
  div.first_box_wrap {
    width: $childBaseWidth;
    height: $childBaseHeight;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }
  div.offsetPos,
  div.offsetNeg {
    transition: all 0.3s ease;
    opacity: 1;
    h1,
    p {
      color: rgba(255, 255, 255, 0.8);
      mix-blend-mode: overlay;
    }
    h1 {
      font-size: 1rem;
      margin: 0;
      font: 0.8rem sans-serif;
    }
    p {
      font: 0.3rem sans-serif;
      border-top: 2px solid rgba(255, 255, 255, 0.6);
      transform: translateX(3%);
    }
  }
  div.offsetPos {
    margin-right: -4.5rem;
  }
  div.offsetNeg {
    margin-right: 4.5rem;
  }
}
.img1 {
  background: url("http://pmek5nu6x.bkt.clouddn.com/banner2.webp")
    no-repeat 0 55%;
  background-size: cover;
}
.img2 {
  background: url("http://pmek5nu6x.bkt.clouddn.com/banner1.webp") no-repeat 0 0%;
  background-size: cover;
}
</style>
