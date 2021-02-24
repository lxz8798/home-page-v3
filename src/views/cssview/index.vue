<template>
  <div class="cssview-wrap">
    <Header :active="active"></Header>
    <div class="cloud-wrap">
      <ul>
        <li v-for="(cloud, index) in clouds" :key="index" :class="cloud.class">
          <img :src="cloud.url" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/mixin";
div.cssview-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: $childBaseWidth;
  background: linear-gradient(to bottom, #21468c, #8aaee2);

  div.cloud-wrap {
    width: $childBaseWidth - 1vw;
    height: $childBaseHeight;
    overflow: hidden;
    ul {
      position: relative;
      height: $childBaseHeight;
      transform-style: preserve-3d;
      perspective: 6rem;
      li {
        position: absolute;
        opacity: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      li.animate1 {
        width: 4.5rem;
        height: 2rem;
        animation: cloudTranslateAnimate 60s linear 1s infinite normal;
      }
      li.animate2 {
        animation: cloudTranslateAnimate3 210s linear 3s infinite normal;
      }
      li.animate3 {
        animation: cloudTranslateAnimate2 30s linear 5s infinite normal;
      }
      li.animate4 {
        animation: cloudTranslateAnimate4 40s linear 2s infinite normal;
      }
      li.animate5 {
        animation: cloudTranslateAnimate5 100s linear 4s infinite normal;
      }
      li.animate6 {
        animation: cloudTranslateAnimate6 140s linear 8s infinite normal;
      }
      li.animate7 {
        width: 5rem;
        height: 7rem;
        bottom: 0;
        right: -0.5rem;
        opacity: 1;
        z-index: 99;
        animation-delay: 0.6s;
      }
      li.animate8 {
        width: 11rem;
        height: 2.5rem;
        bottom: 0;
        left: -0.5rem;
        opacity: 1;
        z-index: 98;
        animation-delay: 0.3s;
      }
      li.animate9 {
        width: 10rem;
        height: 12rem;
        bottom: 0.6rem;
        opacity: 1;
        transform: translate3d(1.8rem, 0, 1rem);
      }
      li.animate10 {
        width: 7rem;
        height: 7rem;
        bottom: 1.2rem;
        left: 1rem;
        opacity: 0.8;
      }
      li.animate11 {
        width: 2.3rem;
        height: 1.4rem;
        animation: cloudTranslateAnimate7 20s linear 4s 1 normal;
      }
    }
  }

  div.footer-box-wrap {
    ul {
      li {
        h3 {
          color: lighten($menuColor, 30%) !important;
        }
        svg {
          fill: lighten($menuColor, 30%) !important;
        }
        svg:hover {
          fill: darken($menuColor, 30%) !important;
        }
      }
      li:hover {
        color: lighten($menuColor, 30%) !important;
      }
    }
    ul:hover {
      background: darken(#8aaee2, 5%) !important;
    }
  }
}
</style>

<script>
export default {
  name: "cssview",
  data() {
    return {
      active: 2,
      clouds: [
        {
          url: require("../../assets/img/cloud/1.png"),
          name: "cloud1",
          class: "animate1"
        },
        {
          url: require("../../assets/img/cloud/2.png"),
          name: "cloud2",
          class: "animate2"
        },
        {
          url: require("../../assets/img/cloud/3.png"),
          name: "cloud3",
          class: "animate3"
        },
        {
          url: require("../../assets/img/cloud/4.png"),
          name: "cloud4",
          class: "animate4"
        },
        {
          url: require("../../assets/img/cloud/5.png"),
          name: "cloud5",
          class: "animate5"
        },
        {
          url: require("../../assets/img/cloud/6.png"),
          name: "cloud6",
          class: "animate6"
        },
        {
          url: "http://static.lazy-studio.com/shan.webp",
          name: "cloud7",
          class: "bounceInRight animated animate7"
        },
        {
          url: "http://static.lazy-studio.com/shan3.webp",
          name: "cloud8",
          class: "bounceInLeft animated animate8"
        },
        {
          url: "http://static.lazy-studio.com/xiake.webp",
          name: "xiake",
          class: "animate9"
        },
        {
          url: "http://static.lazy-studio.com/jianghu.webp",
          name: "jianghu",
          class: "flipInX animated animate10"
        },
        {
          url: require("../../assets/img/niao/1.png"),
          name: "niao1",
          class: "animate11"
        }
      ]
    };
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>
