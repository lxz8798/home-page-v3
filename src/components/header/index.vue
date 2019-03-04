<template>
  <!-- header 公共组件 -->
  <header class="Header-wrap" :class="scrollHidden ? 'displayTop' : 'hiddenTop'">
    <ul>
      <li v-for="(item,index) in menuList" :key="index" :class="{'activeHover':index == active}">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </header>
  <!-- <header class="Header-wrap_mini" v-else>
    <ul class="iconfont icon-mulu">
      <li v-for="(item,index) in menuList" :key="index" :class="{'activeHover':index == active}">
        <router-link :to="item.link">
          <img src="#" :class="item.icon" alt="">
        </router-link>
      </li>
    </ul>
  </header> -->
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
.hiddenTop {
  top: -100% !important;
}
.displayTop {
  top: 0 !important;
}
header.Header-wrap,
header.Header-wrap_mini {
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
        color: darken($menuColor, 30%);
      }
    }

    li.activeHover {
      border-top: 0.02rem solid $menuColor;
      a {
        color: darken($menuColor, 30%);
      }
    }
  }
}
// header.Header-wrap_mini {

// }
div.Header-wrap:hover {
  background: rgba(255, 255, 255, 1);
  transition: all 0.3s ease;

  ul {
    li {
      a {
        color: $menuColor;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Header",
  props: ["active"],
  data() {
    return {
      prev: "",
      next: "",
      scrollHidden: true,
      menuList: [
        {
          name: "LAZY-STUDIO.COM",
          link: "/",
          icon: "iconfont icon-ERP_shouye",
          key: 1
        },
        {
          name: "JAVASCRIPT/NODE",
          link: "jsview",
          icon: "iconfont icon--java-script",
          key: 2
        },
        {
          name: "CSS/ANIMATION",
          link: "cssview",
          icon: "iconfont icon-css",
          key: 3
        },
        {
          name: "DESIGN/PS/XD/AI/AE",
          link: "designview",
          icon: "iconfont icon-caidanshejishi",
          key: 4
        },
        {
          name: "MONGODB/EGG/API",
          link: "mongoview",
          icon: "",
          key: 5
        },
        {
          name: "WORKS COLLECTION",
          link: "workview",
          icon: "iconfont icon-3dcube",
          key: 6
        },
        {
          name: "UPDATE",
          link: "updateview",
          icon: "iconfont icon-gengxin",
          key: 7
        },
        {
          name: "SIGN IN",
          link: "signinview",
          icon: "iconfont icon-iddenglufanbai",
          key: 8
        },
        {
          name: "SIGN UP",
          link: "signupview",
          icon: "iconfont icon-signout",
          key: 9
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
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
