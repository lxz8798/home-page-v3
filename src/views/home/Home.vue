<template>
  <section class="home_screen_wrap">
    <!-- 公共头部 -->
    <Header :active="active"></Header>
    <!-- 第一屏内容 -->
    <!-- <div class="first_box_wrap" :class="switchImg ? 'img1' : 'img2'"> -->
    <section class="first_box_wrap">
      <video id="homeVideo" autoplay muted loop poster="http://pmek5nu6x.bkt.clouddn.com/banner2.webp">
        <source src="//pmek5nu6x.bkt.clouddn.com/video.mp4" type="video/mp4">
        您的浏览器不支持video标签，建议更新浏览器版本
      </video>
      <article class="video_des">
        <!-- <h1 class="fadeInLeft animated">懒虫的窝</h1> -->
        <h1 class="noshdow fadeInLeft animated">懒虫的窝</h1>
        <p class="fadeInLeft animated">HTTP://V3.LAZY-STUDIO.COM</p>
        <p class="fadeInRight animated">MORE VERSION: V1 / V2</p>
        <p class="fadeInLeft animated">还有更多项目请看work视图，过段时间才能放链接。。</p>
        <strong class="fadeInRight animated">主页内容不断填充ing...每天更新一点点。</strong>
      </article>
      <!-- <div class="openSounds loader21" @click="openSounds()">
        打开声音
        <div class="loader-21">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> -->
      <div class="polygon fadeInRight animated"></div>
    </section>
    <!-- 第二屏内容 -->
    <section class="second_box_wrap">
      <div class="skills_wrap">
        <!-- JS技能 -->
        <skills-layout>
          <use xlink:href="#icon-socialnodejs" slot="skillsIcon"></use>
          <h2 slot="skillsH2">{{ Javascript.title }}</h2>
          <Rate
            show-text
            allow-half
            v-model="Javascript.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ Javascript.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ Javascript.des }}</p>
        </skills-layout>
        <!-- 书写技能 -->
        <skills-layout>
          <use xlink:href="#icon-html-css" slot="skillsIcon"></use>
          <h2 slot="skillsH2">{{ HtmlCSS.title }}</h2>
          <Rate
            show-text
            allow-half
            v-model="HtmlCSS.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ HtmlCSS.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ HtmlCSS.des }}</p>
        </skills-layout>
        <!-- VUE/EGG技能 -->
        <skills-layout>
          <use xlink:href="#icon-vue" slot="skillsIcon"></use>
          <h2 slot="skillsH2">
            {{ vueFamily.title }}
          </h2>
          <Rate
            show-text
            allow-half
            v-model="vueFamily.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ vueFamily.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ vueFamily.des }}</p>
        </skills-layout>
        <!-- 框架技能 -->
        <skills-layout>
          <use xlink:href="#icon-frame" slot="skillsIcon"></use>
          <h2 slot="skillsH2">{{ frame.title }}</h2>
          <Rate
            show-text
            allow-half
            v-model="frame.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ frame.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ frame.des }}</p>
        </skills-layout>
        <!-- 设计技能 -->
        <skills-layout>
          <use xlink:href="#icon-design" slot="skillsIcon"></use>
          <h2 slot="skillsH2">{{ Design.title }}</h2>
          <Rate
            show-text
            allow-half
            v-model="Design.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ Design.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ Design.des }}</p>
        </skills-layout>
        <!-- 服务端技能 -->
        <skills-layout>
          <use xlink:href="#icon-egg" slot="skillsIcon"></use>
          <h2 slot="skillsH2">
            {{ Service.title }}
          </h2>
          <Rate
            show-text
            allow-half
            v-model="Service.valueCustomText"
            icon="ios-cafe"
            slot="skillsRate"
          >
            <span style="color: #f5a623">{{ Service.valueCustomText }}</span>
          </Rate>
          <p slot="skillsDes">{{ Service.des }}</p>
        </skills-layout>
      </div>
    </section>
    <!-- 公共底部 -->
    <Footer></Footer>
    <!-- 背景层 -->
    <!-- <div class="bg_wrap">
      <div class="bg1">1111111</div>
      <div class="bg2">22222222</div>
      <div class="bg3">333333</div>
    </div> -->
    <!-- 模态框 -->
    <Modal v-model="loading">

    </Modal>
  </section>
</template>
<script>
import { Rate } from "iview";
import { Modal } from "iview";
export default {
  components: { Rate, Modal },
  name: "home",
  data() {
    return {
      active: 0,
      imgLen: 2,
      itemLen: 4,
      loading: false,
      Javascript: {
        title: "JAVASCRIPT / jQUERY / ZEPTO",
        valueCustomText: 4.7,
        des:
          "可以熟练JAVASCRIPT，使用JAVASCRIPT完成页面交互，通过API拿数据做渲染，熟练的书写业务逻辑完成产品需求，可以排除因JS在页面产生的各种问题及BUG。虽然写了jQuery和zepto，但是我在vue项目里面没有特别需求的时候一般不会使用到它，都是通过JAVASCRIPT写原生，在项目里Vue本身提拱各种的方法对开发来说已经绰绰有余了。ES6使用CLASS封装类，TYPESCRIPT的诞生都说明JS开始向更加严谨的语法发展，要学的东西还有很多，给自己打个4.6分。"
      },
      HtmlCSS: {
        title: "HTML&HTML5 / CSS&CSS3 / LESS&SCSS",
        valueCustomText: 4.8,
        des:
          "使用DIV+CSS完成页面这个技能，说是信手拈来也不为过，早期使用CSS的时候，各种浏览器兼容快写吐了，随着前端技术和现代浏览器的发展，现在只需要使用HTML5+CSS3来写符合标准规范的即可，比起以前真的是简单好多，各种布局方法真是熟得不能在熟了。在公司项目里面都是使用的LESS，不过我个人还是比较喜欢SCSS，各种@mixin、@for、@if超好用。页面布局方面我给自己打个4.8分，不写满分是怕自己骄傲。"
      },
      vueFamily: {
        title: "VUE / VUEX / VUEROUTER / AXIOS / FLY / WEBPACK",
        valueCustomText: 4.7,
        des:
          "使用VUE完成的项目已经好些个了，除了公司的项目外，个人主页v2.0和v3.0都是使用的vue，应用级的项目骨架也已经搭建了几个，有对WEB端的，也有对移动端的。VUEX模块化已经在上线的项目在使用，中大型用起来感觉很方便。在早期的项目里都是使用的axios，后来自己封装项目骨架，发现fly用着也挺方便的，比如现在的v3.0用的就是fly，WEBPACK不能说多熟悉，但是应用已经不成问题了， 比如v3.0的个人主页，从2.5m压到只有500多k，我就谦虚点打个4.6分吧。"
      },
      frame: {
        title: "ELEMENTUI / IVIEW / MINTUI / UNIAPP",
        valueCustomText: 4.8,
        des:
          "前端用的框架实在是太多了，都是大同小异，除了市面上最常用的UI框架，什么ELEMENTUI、IVIEW外，针对移动端和公众的框架也在项目里经常使用，但是毕竟还不是最有效的解决方法。所以DCloud又出一个UNIAPP，写一套代码多端运行，类似的还有FLUTTER等，我个人使用UNIAPP的项目正在开发中，过段时间应该就会上线了。"
      },
      Design: {
        title: "PHOTOSHOP / XD / ILLUSTRATOR / PAINTER / OTHER ADOBE",
        valueCustomText: 4.8,
        des:
          "设计就不说了，个人主页1.0~3.0都有链接，在本站的设计展示页面也有效果图，可以看直接看到我的设计和绘画能力，什么WEB设计、移动端UI设计、MG动画、手绘等等。那为什么会转前端哪？因为当初我感觉设计到了瓶颈，到了一定阶段在往进步就很困难了。作为一个有追求的男人，肯定不会止步于此，所以我转到前端，学习了JAVASCRIPT，在结合自己的设计能力，可以实现全栈开发的目的。"
      },
      Service: {
        title: "EGGJS / KOAJS / MONGODB / GITHUB",
        valueCustomText: 4.3,
        des:
          "比起前端的能力，我后端的能力就稍微弱一点，个人主页2.0使用的是KOA2，但是我用了基于JAVASCRIPT开发的EGGJS以后，我发现EGGJS对开发更友好，规范标准已经定好，只需要直接使用就可以了。个人主页3.0使用的接口，都是我使用EGGJS完成的基于RESTFul API的接口服务器。因为服务端能力比其他端弱，所以我就打个4.3分。"
      },
      not3D: true,
      switchImg: true
    };
  },
  mounted() {
    this.switchImgFn();
    this.$Loading.finish();
  },
  methods: {
    /**
     * @Description: 打开声音
     * @Author: 李啸竹
     */
    openSounds() {
      let $dom = document.getElementById("homeVideo");
      $dom.muted = false;
    },
    /**
     * @Description: 首频切换，换成video暂时没用
     * @Author: 李啸竹
     */
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
.ivu-modal {
  display: none;
}
div.bg_wrap {
  width: 2rem;
  height: 4rem;
  overflow: hidden;
  border: 1px solid red;
  background: white;
}
.second_box_wrap {
  width: $childBaseWidth;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  div.skills_wrap {
    width: $boxWidth;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
}
section.home_screen_wrap {
  width: $childBaseWidth;
  height: auto;
  section.first_box_wrap {
    width: 100%;
    height: $childBaseHeight;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    video {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .polygon {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 110vh;
      background:white;
      clip-path: polygon(81% 0, 100% 0%, 100% 100%, 48% 100%);
    }
    .openSounds {
      width: 0.5rem;
      height: 0.4rem;
      position: absolute;
      bottom: $spancin - 0.5rem;
      left: $spancin;
      z-index: 1;
      cursor: pointer;
      color: white;
    }
    .video_des {
      position: relative;
      z-index: 1;
      right: -5rem;
      h1 {
        padding: 0;
        margin: 0;
        font-size: 0.45rem;
        color: transparent;
        text-shadow: 0 0 15px $fontColor;
        mix-blend-mode: overlay;
      }
      h1.noshdow {
        color: $fontColor;
        text-shadow: none;
        animation-delay: 0.5s;
      }
      p,
      strong {
        line-height: 240%;
      }
      p:nth-child(1) {
        animation-delay: 0.5s;
      }
      p:nth-child(2) {
        animation-delay: 0.5s;
      }
      p:nth-child(3) {
        animation-delay: 0.5s;
      }
      strong {
        font-size: 0.16rem;
        animation-delay: 1s;
      }
    }
  }
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
  background: url("http://pmek5nu6x.bkt.clouddn.com/banner2.webp") no-repeat 0
    55%;
  background-size: cover;
}
.img2 {
  background: url("http://pmek5nu6x.bkt.clouddn.com/banner1.webp") no-repeat 0
    0%;
  background-size: cover;
}
</style>
