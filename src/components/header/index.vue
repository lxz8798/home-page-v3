<!-- header 公共组件 -->
<template>
  <!-- header 公共组件 -->
  <div class="Header-wrap">
    <ul>
      <li v-for="(item,index) in menuList" :key="index" :class="{'activeHover':index == active}">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
$HeaderHeight: 0.6rem;

div.Header-wrap {
  width: $childBaseWidth;
  background: rgba(240, 240, 240, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
      menuList: [
        {
          name: "LAZY-STUDIO.COM",
          link: "/",
          key: 1
        },
        {
          name: "JAVASCRIPT/NODE",
          link: "jsview",
          key: 2
        },
        {
          name: "CSS/ANIMATION",
          link: "cssview",
          key: 3
        },
        {
          name: "DESIGN/PS/XD/AI/AE",
          link: "designview",
          key: 4
        },
        {
          name: "MONGODB/EGG/API",
          link: "mongoview",
          key: 5
        },
        {
          name: "WORKS COLLECTION",
          link: "workview",
          key: 6
        },
        {
          name: "UPDATE",
          link: "updateview",
          key: 7
        },
        {
          name: "SIGN IN",
          link: "signinview",
          key: 8
        },
        {
          name: "SIGN UP",
          link: "signupview",
          key: 9
        }
      ]
    };
  }
};
</script>
