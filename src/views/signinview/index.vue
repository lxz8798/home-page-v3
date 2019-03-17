<template>
  <div class="signinview_wrap">
    <Header :active="active"></Header>
    <div class="signinview_box_wrap"></div>
    <div class="signin_box">
      <row-layout :config="config">
        <div slot="divL">
          <img class="bigPic" :src="config.left.img" alt="" />
          <img class="guang1" :src="config.left.guang1" alt="" />
          <img class="guang2" :src="config.left.guang2" alt="" />
          <img class="guang3" :src="config.left.guang3" alt="" />
          <img class="guang4" :src="config.left.guang4" alt="" />
          <img class="guang5" :src="config.left.guang5" alt="" />
          <img class="guang6" :src="config.left.guang6" alt="" />
          <img class="guang7" :src="config.left.guang7" alt="" />
          <img class="guang8" :src="config.left.guang8" alt="" />
          <img class="guang9" :src="config.left.guang9" alt="" />
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
          <div class="rememberAndforget">
            <Checkbox v-model="single">{{ rememberText }}</Checkbox>
            <p>忘记密码？</p>
          </div>
          <div class="sigiinpInput">
            <span>
              <p>登 录</p>
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
  background: linear-gradient(
    to right bottom,
    darken($menuColor, 20%) 50%,
    $menuColor 50
  );
  div.signin_box {
    width: $signinBoxWidth;
    height: $signinBoxHeight;

    background: white;
    border-radius: 0.1rem;
    div.rowlayout_wrap {
      width: $signinBoxWidth;
      height: $signinBoxHeight;
      div.l {
        flex: 0 0 3rem;
        position: relative;
        .bigPic {
          position: absolute;
          z-index: 1;
          @include translateAnimate(guangAnimate, 8s, 1s);
          @include polygonSize(3rem, 0.2rem, 0, transparent);
        }
        @for $i from 1 through 9 {
          .guang#{$i} {
            position: absolute;
          }
        }
        .guang1 {
          @include translateAnimate(guangAnimate, 8s, 1s);
          @include polygonSize(0.2rem, 0.5rem, 0.6rem, transparent);
        }
        .guang2 {
          @include translateAnimate(guangAnimate, 5s, 3s);
          @include polygonSize(0.35rem, 1.8rem, 2.9rem, transparent);
        }
        .guang3 {
          @include translateAnimate(guangAnimate, 6s, 2s);
          @include polygonSize(0.3rem, 1.5rem, 2.3rem, transparent);
        }
        .guang4 {
          @include translateAnimate(guangAnimate, 6s, 3s);
          @include polygonSize(0.3rem, 2.5rem, 0.3rem, transparent);
        }
        .guang5 {
          @include translateAnimate(guangAnimate, 4s, 1s);
          @include polygonSize(0.3rem, 2.1rem, -0.2rem, transparent);
        }
        .guang6 {
          @include translateAnimate(guangAnimate, 5s, 2s);
          @include polygonSize(0.35rem, 1.4rem, 0.6rem, transparent);
        }
        .guang7 {
          @include translateAnimate(guangAnimate, 5s, 1s);
          @include polygonSize(0.4rem, 0, -0.3rem, transparent);
        }
        .guang8 {
          @include translateAnimate(guangAnimate, 5s, 2s);
          @include polygonSize(0.3rem, 0.6rem, 2.8rem, transparent);
        }
        .guang9 {
          @include translateAnimate(guangAnimate, 5s, 2s);
          @include polygonSize(0.3rem, 2.7rem, -0.7rem, transparent);
        }
        @for $i from 1 through 8 {
          .line#{$i} {
            position: absolute;
            @include polygon(99.4% 0, 100% 0.6%, 0.6% 100%, 0% 99.4%);
          }
        }
        .line1 {
          z-index: 2;
          @include translateAnimate(lineAnimate, 8s, 1s);
          @include polygonSize(
            3.2rem,
            0rem,
            0.6rem,
            adjust-hue($menuColor, 310deg)
          );
        }
        .line2 {
          @include translateAnimate(lineAnimate, 9s, 3s);
          @include polygonSize(
            2rem,
            1.4rem,
            -1.8rem,
            adjust-hue($menuColor, 210deg)
          );
        }
        .line3 {
          @include translateAnimate(lineAnimate, 12s, 2s);
          @include polygonSize(
            1.3rem,
            0.8rem,
            -0.8rem,
            adjust-hue($menuColor, 160deg)
          );
        }
        .line4 {
          @include translateAnimate(lineAnimate, 7s, 1s);
          @include polygonSize(
            3.5rem,
            0.8rem,
            0.2rem,
            adjust-hue($menuColor, 70deg)
          );
        }
        .line5 {
          @include translateAnimate(lineAnimate, 10s, 3s);
          @include polygonSize(
            1.3rem,
            2.1rem,
            1.8rem,
            adjust-hue($menuColor, 30deg)
          );
        }
        .line6 {
          @include translateAnimate(lineAnimate, 11s, 1s);
          @include polygonSize(
            2.4rem,
            0.3rem,
            -0.3rem,
            adjust-hue($menuColor, 60deg)
          );
        }
        .line7 {
          @include translateAnimate(lineAnimate, 9s, 2s);
          @include polygonSize(
            4.5rem,
            -0.6rem,
            -2.8rem,
            adjust-hue($menuColor, 130deg)
          );
        }
        .line8 {
          @include translateAnimate(lineAnimate, 8s, 2s);
          @include polygonSize(
            1rem,
            3.2rem,
            1.4rem,
            adjust-hue($menuColor, 230deg)
          );
        }
      }
      div.r {
        flex: 0 0 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
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
              background: white;
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
    background: url("http://pnxgkoyon.bkt.clouddn.com/bg.webp") repeat 0 0;
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
      rememberText: "记住密码",
      config: {
        left: {
          img: require("./../../assets/img/guang/lifang.png"),
          guang1: require("./../../assets/img/guang/1.png"),
          guang2: require("./../../assets/img/guang/2.png"),
          guang3: require("./../../assets/img/guang/3.png"),
          guang4: require("./../../assets/img/guang/4.png"),
          guang5: require("./../../assets/img/guang/5.png"),
          guang6: require("./../../assets/img/guang/6.png"),
          guang7: require("./../../assets/img/guang/7.png"),
          guang8: require("./../../assets/img/guang/7.png"),
          guang9: require("./../../assets/img/guang/7.png")
        },
        right: {
          img: require("./../../assets/img/design/jy1.png")
        }
      }
    };
  },
  created() {
    this.signIn();
  },
  mounted() {
    this.$Loading.finish();
  },
  methods: {
    async signIn() {
      let params, res;

      params = {
        username: "123456789",
        password: "123456789",
        phonenumber: "123456789"
      };

      res = await this.$http.post("http://127.0.0.1:7001/api/v1/signin", params);
      console.log(res, "res");
      // .then(res => {
      //   console.log(res, 'res');
      // });
    }
  }
};
</script>
