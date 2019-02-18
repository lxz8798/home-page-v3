<template>
<div class="signupview_wrap">
  <Header :active="active"></Header>
  <div class="signupview_box_wrap"></div>
  <div class="signup_box">
    <row-layout :config="config">
      <div class= "input_box" slot="divR">
        <div class="usernameInput">
          <label>用户名 / USERNAME</label>
          <input type="text" value="">
        </div>
        <div class="passwordInput">
          <label>密码 / PASSWORD</label>
          <input type="text" value="">
        </div>
        <div class="phoneNumberInput">
          <label>手机号 / PHONE</label>
          <input type="text" value="">
        </div>
        <div class="rememberAndforget">
          <Checkbox v-model="single">{{rememberText}}</Checkbox>
          <p>忘记密码？</p>
        </div>
        <div class="siginupInput">
          <input type="button" value="SIGN UP">
        </div>
        <div class="sigiinpInput">
          <input type="button" value="SING IN">
        </div>
      </div>
    </row-layout>
  </div>
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
$signupBoxWidth: 7.5rem;
$signupBoxHeight: 5rem;
$inputBoxHeight: 0.6rem;
$inputRadius: 0.05rem;
div.signupview_wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right bottom, darken($menuColor, 20%) 50%, $menuColor 50); 
  div.signup_box {
    width: $signupBoxWidth;
    height: $signupBoxHeight;

    background: white;
    border-radius: 0.1rem;

    div.rowlayout_wrap  {
      width: $signupBoxWidth;
      height: $signupBoxHeight;
      z-index: 2;
      position: relative;
      div.l {
        width: 2.5rem;
        flex: 0;
      }
      div.r {
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        div.input_box {
          width: 2.5rem;
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
            input {
              height: 0.5rem;
              padding-left: $spancin;
              border-radius: $inputRadius;
              border: 1px solid $fontColor;
              outline: none;
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
            width: inherit;
            height: 0.35rem;
            margin-top: $spancin;
            input {
              width: inherit;
              height: inherit;
              border-radius: $inputRadius;
              background: none;
              border: 1px solid $fontColor;
              outline: none;
              cursor: pointer;
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
    background: url("http://pmek5nu6x.bkt.clouddn.com/bg.jpg") repeat 0 0;
    background-size: cover;
    opacity: 0.4; 
  }
}
</style>

<script>
import {Checkbox} from "iview";
export default {
  name: "signupview",
  components: {Checkbox},
  data() {
    return {
      active: 8,
      single: false,
      rememberText: "记住密码", 
      config: {
        left: {
          img: require("./../../assets/img/design/des1.png")
        },
        right: {
          img: require("./../../assets/img/design/jy1.png")
        }
      }
    };
  }
};
</script>
