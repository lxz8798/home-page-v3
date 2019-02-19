<template>
<div class="signinview_wrap">
  <Header :active="active"></Header>
  <div class="signinview_box_wrap"></div>
  <div class="signin_box">
    <row-layout :config="config">
      <div slot="divL">
        <img class="bigPic" :src="config.left.img" alt="">
        <img class="guang1" :src="config.left.guang1" alt="">
        <img class="gunag2" :src="config.left.gunag2" alt="">
        <img class="guang3" :src="config.left.guang3" alt="">
        <img class="guang4" :src="config.left.guang4" alt="">
        <img class="guang5" :src="config.left.guang5" alt="">
        <img class="guang6" :src="config.left.guang6" alt="">
        <img class="gaung7" :src="config.left.gaung7" alt="">
        <img class="gaung8" :src="config.left.gaung8" alt="">
        <img class="gaung9" :src="config.left.gaung9" alt="">
        <p class="line1"></p>
        <p class="line2"></p>
        <p class="line3"></p>
        <p class="line4"></p>
        <p class="line5"></p>
        <p class="line6"></p>
        <p class="line7"></p>
        <p class="line8"></p>
      </div>
      <div class="input_box" slot="divR">
        <div class="usernameInput">
          <label>用户名 / USERNAME</label>
          <div class="input">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhuce1"></use>
            </svg>
            <input type="text" value="" maxlength="20">
          </div>
        </div>
        <div class="passwordInput">
          <label>密码 / PASSWORD</label>
          <div class="input">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhucedenglumima1"></use>
            </svg>
            <input type="text" value="" maxlength="20">
          </div>
        </div>
        <div class="phoneNumberInput">
          <label>手机号 / PHONE</label>
          <div class="input">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
            </svg>
            <input type="text" value="" maxlength="11">
          </div>
        </div>
        <div class="rememberAndforget">
          <Checkbox v-model="single">{{rememberText}}</Checkbox>
          <p>忘记密码？</p>
        </div>
        <div class="siginupInput">
          <span>
            <p>注   册</p>
            <p>SIGN UP</p>
          </span>
        </div>
        <div class="sigiinpInput">
          <span>
            <p>登   录</p>
            <p>SING IN</p>
          </span>
        </div>
      </div>
    </row-layout>
  </div>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
@import "../../assets/base/mixin";
$signinBoxWidth: 6.5rem;
$signinBoxHeight: 4rem;
$inputBoxHeight: 0.6rem;
$inputRadius: 0.05rem;
$inputWidth: 2.5rem;
$guangban: 0.2rem;
div.signinview_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(   to right bottom,
  darken($menuColor, 20%) 50%,    $menuColor 50); 
  div.signin_box {
    width: $signinBoxWidth;
    height: $signinBoxHeight;

    background: white;
    border-radius: 0.1rem;

    div.rowlayout_wrap {
      width: $signinBoxWidth;
      height: $signinBoxHeight;
      z-index: 2;
      position: relative;
      div.l {
        flex: 0 0 3rem;
        position: relative;
        // perspective: 3rem;
        // transform-style: preserve-3d;
        .bigPic {
          width: 3.5rem;
          height: 3.5rem;
          position: absolute;
          transform: translate3d(-0.3rem, 0.3rem, 0);
        }
        .guang1 {
          width: $guangban;
          height: $guangban;
          animation-delay: 2s;
          transform: translate3d(2.7rem, 1.2rem, 0.1rem);
        }
        .gunag2 {
          width: 0.35rem;
          height: 0.35rem;
          animation-delay: 1s;
          transform: translate3d(2rem, 1.3rem, 0.1rem);
        }
        .guang3 {
          width: 0.3rem;
          height: 0.3rem;
          animation-delay: 2s;
          transform: translate3d(1.2rem, 1.5rem, 0.08rem);
        }
        .guang4 {
          width: $guangban;
          height: $guangban;
          animation-delay: 3s;
          transform: translate3d(-0.6rem, 1.2rem, 0.1rem);
        }
        .guang5 {
          width: 0.18rem;
          height: 0.18rem;
          animation-delay: 1s;
          transform: translate3d(-0.6rem, 2rem, 0.8rem);
        }
        .guang6 {
          width: 0.2rem;
          height: 0.2rem;
          animation-delay: 3s;
          transform: translate3d(0.4rem, 1.9rem, 1rem);
        }
        .gaung7 {
          width: 0.18rem;
          height: 0.18rem;
          animation-delay: 1s;
          transform: translate3d(-0.3rem, 0.5rem, 0.6rem);
        }
        .gaung8 {
          width: 0.27rem;
          height: 0.27rem;
          animation-delay: 2s;
          transform: translate3d(0.5rem, 2.4rem, 0.6rem);
        }
        .gaung9 {
          width: 0.3rem;
          height: 0.3rem;
          animation-delay: 2s;
          transform: translate3d(-1.2rem, 2.7rem, 0.6rem);
        }
        .line1,
        .line2,
        .line3,
        .line4,
        .line5,
        .line6,
        .line7,
        .line8 {
          position: absolute;
          border-radius: 1rem;
        }
        .line1 {
          width: 3.5rem;
          height: 0.03rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 1deg);
        }
        .line2 {
          width: 2rem;
          height: 0.02rem;
          top: 1.4rem;
          left: -0.8rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 310deg);
        }
        .line3 {
          width: 1.3rem;
          height: 0.02rem;
          top: 0.8rem;
          left: -0.8rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 160deg);
        }
        .line4 {
          width: 3rem;
          height: 0.01rem;
          top: 3.8rem;
          left: 0.4rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 70deg);
        }
        .line5 {
          width: 2rem;
          height: 0.02rem;
          top: 2.3rem;
          left: 1.4rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 30deg);
        }
        .line6 {
          width: 2.4rem;
          height: 0.02rem;
          top: 0.2rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 60deg);
        }
        .line7 {
          width: 3.5rem;
          height: 0.02rem;
          top: 3.6rem;
          left: -0.8rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 230deg);
        }
        .line8 {
          width: 0.8rem;
          height: 0.02rem;
          top: 3.2rem;
          left: 1.4rem;
          transform: rotateZ(135deg);
          background: adjust-hue($menuColor, 230deg);
        }
      }
      div.r {
        flex: 0 0 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        div.input_box {
          width: $inputWidth;
          div.usernameInput,
          div.passwordInput,
          div.phoneNumberInput {
            display: flex;
            flex-direction: column;

            height: $inputBoxHeight;
            margin-top: $spancin;
            label {
              margin-bottom: $spancin;
            }
            div.input {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              width: $inputWidth;
              height: 0.5rem;
              padding: 0 $spancin - 0.05rem;

              border-radius: $inputRadius;
              border: 1px solid $fontColor;
              outline: none;
              transition: all 0.3s ease;
              color: $fontColor;
              .icon {
                transition: all 0.3s ease;
              }
              input {
                width: 88%;
                height: 0.3rem;
                border: none;
                outline: none;
              }
            }
            div.input:hover {
              width: 2.6rem;
              border: 1px solid $menuColor;
              box-shadow: 0 0 0.03rem darken($menuColor, 20%);
              background: lighten($menuColor, 42%);
              .icon {
                fill: $menuColor;
              }
              input {
                color: darken($menuColor, 30%);
                background: lighten($menuColor, 42%);
              }
            }
          }
          div.rememberAndforget {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: $spancin;
            span.ivu-checkbox {
              padding-right: $spancin;
            }
          }
          div.siginupInput,
          div.sigiinpInput {
            margin-top: $spancin;
            display: flex;
            justify-content: center;
            align-items: center;
            width: $inputWidth;
            height: 0.35rem;
            border: 1px solid $fontColor;
            border-radius: $inputRadius;
            cursor: pointer;
            transition: all 0.3s ease;
            span {
              width: 80%;
              height: 0.18rem;
              display: inline-flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              p {
                transition: all 0.3s ease;
              }
            }
          }
          div.siginupInput:hover,
          div.sigiinpInput:hover {
            border: 1px solid darken(adjust-hue($menuColor, 160deg), 10%);
            box-shadow: 0 0 0.03rem adjust-hue($menuColor, 160deg);
            background: adjust-hue($menuColor, 160deg);
            span {
              p {
                color: white;
              }
              p:nth-child(1),
              p:nth-child(2) {
                transform: translateY(-0.18rem);
              }
            }
          }
        }
      }
    }
  }
  div.signinview_box_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: inherit;
    height: inherit;
    mix-blend-mode: overlay;
    background: url("http://pmek5nu6x.bkt.clouddn.com/bg.jpg") repeat 0 0;
    background-size: cover;
    opacity: 0.4;
  }
}
</style>

<script>
import { Checkbox } from "iview";
export default {
  name: "signinview",
  components: { Checkbox },
  data() {
    return {
      active: 7,
      single: false,
      isSignup: false,
      rememberText: "记住密码",
      config: {
        left: {
          img: require("./../../assets/img/guang/lifang.png"),
          guang1: require("./../../assets/img/guang/1.png"),
          gunag2: require("./../../assets/img/guang/2.png"),
          guang3: require("./../../assets/img/guang/3.png"),
          guang4: require("./../../assets/img/guang/4.png"),
          guang5: require("./../../assets/img/guang/5.png"),
          guang6: require("./../../assets/img/guang/6.png"),
          gaung7: require("./../../assets/img/guang/7.png"),
          gaung8: require("./../../assets/img/guang/7.png"),
          gaung9: require("./../../assets/img/guang/7.png"),
        },
        right: {
          img: require("./../../assets/img/design/jy1.png")
        }
      }
    };
  }
};
</script>
