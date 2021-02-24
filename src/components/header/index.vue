<template>
  <!-- header 公共组件 -->
  <header v-if="hasH5" class="Header-wrap" :class="scrollHidden ? 'displayTop' : 'hiddenTop'">
    <ul>
      <li v-for="(item,index) in menuList" :key="index" :class="{'activeHover':index == active}">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </header>
  <header class="Header_wrap_mini" v-else>
    <svg class="icon" aria-hidden="true" @click="openTocList = !openTocList">
      <use xlink:href="#icon-mulu1"></use>
    </svg>
    <p :class="openTocList ? 'circle_bg' : 'bg_scale'"  @click="openTocList = !openTocList"></p>  
    <div class="Menu_List">
      <transition name="fade">
        <ul class="iconfont" :class="openTocList ? 'close' : 'open'">
          <li v-for="(item,index) in menuList" :key="index" :class="{'mini_activeHover':index == active}" @click.stop="$goPath(item.link)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
          </li>
          <li class="closeMenu" @click.stop="openTocList = true">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantouarrow498"></use>
            </svg>
          </li>
        </ul>
      </transition>
    </div>    
  </header>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
$circleSize: 1.8rem;
.hiddenTop {
  top: -100% !important;
}
.displayTop {
  top: 0 !important;
}
header.Header-wrap {
  width: $childBaseWidth;
  background: rgba(240, 240, 240, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all 0.5s ease;
}
header.Header-wrap {
  ul {
    width: $boxWidth;
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    li {
      display: inline-flex;
      align-items: center;
      height: $distanceHeader;
      line-height: $distanceHeader;
      border-top: 2px solid rgba(240, 240, 240, 0);
      a {
        width: 100%;
        display: inline-block;
        color: rgba(220, 220, 220, 1);
        display: inline-block;
        transition: all 0.3s ease;
      }
    }

    li:hover {
      border-top: 0.02rem solid $menuColor;
      a {
        color: #9cd42d;
      }
    }

    li.mini_activeHover {
      border-top: 0.02rem solid $menuColor;
      a {
        color: #9cd42d;
      }
    }
  }
}
header.Header_wrap_mini {
  z-index: 99;
  svg {
    width: 0.4rem;
    height: 0.4rem;
    fill: $fontColor;
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    z-index: 2;
    background: transparent;
  }
  .circle_bg {
    position: fixed;
    top: -($circleSize / 2);
    left: -($circleSize / 2);
    z-index: 1;
    width: $circleSize;
    height: $circleSize;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.5s ease-in-out;
  }
  .bg_scale {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: $childBaseWidth / 2;
    height: $childBaseHeight / 2;
    transform: scale(2, 2);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  div.Menu_List {
    position: fixed;
    top: -($circleSize / 2);
    left: -($circleSize / 2);
    width: $h5Width;
    height: $childBaseHeight;
    z-index: 3;
    ul.close {
      opacity: 0;
      height: 0;
    }
    ul.open {
      opacity: 1;
      height: $childBaseHeight;
    }
    
    ul {
      position: absolute;
      top: $h5Width + 0.1rem;
      left: $h5Width;
      z-index:2;
      width: $h5Width;
      height: inherit;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease-in-out;
      li {
        flex: 1;
        width: $h5Width;
        height: 0.4rem;
        background: white;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.3 ease-in-out;
        svg {
          position: static;
          top: 0;
          left: 0;
          transform: translateX(60%);
          width: 0.4rem;
          height: 0.4rem;
          transition: all 0.3s ease-in-out;
          fill: $fontColor;
        }
      }
      li:hover {
        width: $childBaseWidth / 2.5;
        transition: all 0.3s ease-in-out;
        svg {
          fill: $menuColor;
        }
      }
      li.closeMenu {
        background: $menuColor;
        svg {
          fill: rgba(255, 255, 255, 1);
        }
      }
      li.closeMenu:hover {
        width: $h5Width;
      }
      li.mini_activeHover {
        svg {
          fill: $menuColor;
        }
      }
    }
  }
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  props: ["active"],
  data() {
    return {
      openTocList: true,
      scrollHidden: true,
      menuList: [
        {
          name: "LAZY-STUDIO.COM",
          link: "/",
          icon: "#icon-home",
          key: 1
        },
        {
          name: "JAVASCRIPT/NODE",
          link: "jsview",
          icon: "#icon-socialnodejs",
          key: 2
        },
        {
          name: "CSS/ANIMATION",
          link: "cssview",
          icon: "#icon-html-css",
          key: 3
        },
        {
          name: "DESIGN/PS/XD/AI/AE",
          link: "designview",
          icon: "#icon-design",
          key: 4
        },
        {
          name: "MONGODB/EGG/API",
          link: "mongoview",
          icon: "#icon-mongo",
          key: 5
        },
        {
          name: "WORKS COLLECTION",
          link: "workview",
          icon: "#icon-vue",
          key: 6
        },
        {
          name: "UPDATE",
          link: "updateview",
          icon: "#icon-update",
          key: 7
        },
        {
          name: "SIGN IN",
          link: "signinview",
          icon: "#icon-id",
          key: 8
        },
        {
          name: "SIGN UP",
          link: "signupview",
          icon: "#icon-out",
          key: 9
        }
      ],
      currWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    };
  },
  computed: {
    ...mapState(['hasH5'])
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.onresize = () => {
      return (() => {
        window.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.currWidth = window.screenWidth
      })()
    }
  },
  watch: {
    currWidth: function(newVal, oldVal) {
      if (newVal < 750) {
        this.HOME_CURR_PUBLIC_WIDTH(false);
      } else {
        this.HOME_CURR_PUBLIC_WIDTH(true);      
      }
    }
  },
  methods: {
    ...mapMutations(["HOME_CURR_PUBLIC_WIDTH"]),
    /**
     * @Description: 有滑动的时候隐藏导航
     * @Author: 李啸竹
     * @Date: 2019-03-11 01:11:28
     */
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 200) {
        this.scrollHidden = false;
      } else if (scrollTop < 200 || scrollTop == 0) {
        this.scrollHidden = true;
      }
    }
  }
};
</script>
