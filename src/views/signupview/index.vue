<template>
  <div class="signupview_wrap">
    <Header :active="active"></Header>
    <div class="signupview_box_wrap"></div>
    <div class="signup_box" :class="!hasH5 ? 'hasH5_box' : ''">
      <row-layout :config="config">
        <div slot="divL">
          <img class="bigPic" :src="config.left.img" alt="" />
          <img class="qiqiu1" :src="config.left.qiqiu1" alt="" />
          <img class="qiqiu2" :src="config.left.qiqiu2" alt="" />
          <img class="qiqiu3" :src="config.left.qiqiu3" alt="" />
          <img class="qiqiu4" :src="config.left.qiqiu4" alt="" />
          <img class="qiqiu5" :src="config.left.qiqiu5" alt="" />
          <img class="qiqiu6" :src="config.left.qiqiu6" alt="" />
          <img class="qiqiu7" :src="config.left.qiqiu7" alt="" />
          <img class="qiqiu8" :src="config.left.qiqiu8" alt="" />
        </div>
        <div class="input_box" slot="divR">
          <h1>谢谢您观注我的小窝！</h1>
          <div class="usernameInput">
            <label>用户名 / USERNAME</label>
            <div class="input">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhuce1"></use>
              </svg>
              <input type="text" value="" maxlength="20" />
            </div>
          </div>
          <div class="passwordInput">
            <label>密码 / PASSWORD</label>
            <div class="input">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhucedenglumima1"></use>
              </svg>
              <input type="text" value="" maxlength="20" />
            </div>
          </div>
          <div class="phoneNumberInput">
            <label>手机号 / PHONE</label>
            <div class="input">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-phone"></use>
              </svg>
              <input type="text" value="" maxlength="11" />
            </div>
          </div>
          <div class="rememberAndforget">
            <Checkbox style="visibility: hidden;" v-model="single">{{
              rememberText
            }}</Checkbox>
            <p style="visibility: hidden;">忘记密码？</p>
          </div>
          <div class="siginupInput">
            <span>
              <p>注 册</p>
              <p>SIGN UP</p>
            </span>
          </div>
        </div>
      </row-layout>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
$signupBoxWidth: 6.5rem;
$signupBoxHeight: 4rem;
$inputBoxHeight: 0.6rem;
$inputRadius: 0.05rem;
$inputWidth: 2.5rem;
div.signupview_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    to right bottom,
    darken($menuColor, 20%) 50%,
    $menuColor 50
  );
  div.signup_box {
    width: $signupBoxWidth;
    height: $signupBoxHeight;

    background: white;
    border-radius: 0.1rem;

    div.rowlayout_wrap {
      width: $signupBoxWidth;
      height: $signupBoxHeight;
      z-index: 2;
      position: relative;
      div.l {
        flex: 0 0 3rem;
        position: relative;
        perspective: 3rem;
        transform-style: preserve-3d;
        .bigPic {
          position: absolute;
          @include translateAnimate(guangAnimate, 5s, 1s);
          @include polygonSize2(4.5rem, 3.9rem, 0.01rem, -0.6rem, transparent);
        }
        @for $i from 1 through 8 {
          .qiqiu#{$i} {
            position: absolute;
          }
        }
        .qiqiu1 {
          @include translateAnimate(guangAnimate, 5s, 1s);
          @include polygonSize2(0.2rem, 0.8rem, 1.7rem, 2.2rem, transparent);
        }
        .qiqiu2 {
          @include translateAnimate(guangAnimate, 6s, 3s);
          @include polygonSize2(0.12rem, 0.48rem, 2rem, 0.3rem, transparent);
        }
        .qiqiu3 {
          @include translateAnimate(guangAnimate, 6s, 3s);
          @include polygonSize2(0.15rem, 0.6rem, -0.3rem, 0.8rem, transparent);
        }
        .qiqiu4 {
          @include translateAnimate(guangAnimate, 4s, 2s);
          @include polygonSize2(0.2rem, 0.8rem, 0.3rem, 0.1rem, transparent);
        }
        .qiqiu5 {
          @include translateAnimate(guangAnimate, 5s, 2s);
          @include polygonSize2(0.18rem, 0.7rem, 1rem, 1.6rem, transparent);
        }
        .qiqiu6 {
          @include translateAnimate(guangAnimate, 3s, 3s);
          @include polygonSize2(0.2rem, 0.8rem, 1rem, 0.6rem, transparent);
        }
        .qiqiu7 {
          @include translateAnimate(guangAnimate, 5s, 1s);
          @include polygonSize2(0.18rem, 0.7rem, 0.3rem, -0.7rem, transparent);
        }
        .qiqiu8 {
          @include translateAnimate(guangAnimate, 5s, 1s);
          @include polygonSize2(0.27rem, 0.9rem, 0.8rem, 2.7rem, transparent);
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
  div.signupview_box_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: inherit;
    height: inherit;
    mix-blend-mode: overlay;
    background: url("http://pnxgkoyon.bkt.clouddn.com/bg.webp") repeat 0 0;
    background-size: cover;
    opacity: 0.4;
  }
  .hasH5_box {
    max-width: 3rem;
    div.r {
      flex: 0 0 2.8rem !important;
    }
  }
}
</style>

<script>
import {mapState} from "vuex";
import { Checkbox } from "iview";
export default {
  name: "signupview",
  components: { Checkbox },
  data() {
    return {
      active: 8,
      single: false,
      // isSignup: true,
      rememberText: "记住密码",
      config: {
        left: {
          img: require("./../../assets/img/qiqiu/2019.png"),
          qiqiu1: require("./../../assets/img/qiqiu/1.png"),
          qiqiu2: require("./../../assets/img/qiqiu/2.png"),
          qiqiu3: require("./../../assets/img/qiqiu/3.png"),
          qiqiu4: require("./../../assets/img/qiqiu/4.png"),
          qiqiu5: require("./../../assets/img/qiqiu/5.png"),
          qiqiu6: require("./../../assets/img/qiqiu/3.png"),
          qiqiu7: require("./../../assets/img/qiqiu/2.png"),
          qiqiu8: require("./../../assets/img/qiqiu/4.png")
        },
        right: {
          img: require("./../../assets/img/design/jy1.png")
        }
      }
    };
  },
  computed: {
    ...mapState(['hasH5'])
  },
  created() {
    this.signUp();
  },
  mounted() {
    this.$Loading.finish();
  },
  methods: {
    async signUp() {
      let params, res;

      params = {
        username: "123456789",
        password: "123456789",
        phonenumber: "123456789"
      };

      res = await this.$http.get("http://127.0.0.1:7001/api/v1/signup", params);
      console.log(res, "res");
    }
  }
};
</script>
