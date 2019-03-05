<template>
  <div class="mongoview-wrap">
    <Header :active="active"></Header>
    <div class="mongo_box_wrap">
      <!-- 注册接口信息 -->
      <div class="mongo_api_title">{{ signUpContent.title }}</div>
      <Inscription>
        <li slot="projectList">
          <span>api: {{ signUpContent.api }}</span>
          <br />
          <span v-html="signUpContent.paramsContent"></span>
          <br />
          <span v-html="signUpContent.codeContent"></span>
          <br />
          <span v-html="signUpContent.msg"></span>
          <br />
          <span v-html="signUpContent.dataContent"></span>
        </li>
      </Inscription>
      <!-- 登录接口信息 -->
      <div class="mongo_api_title">{{ signinContent.title }}</div>
      <Inscription>
        <li slot="projectList">
          <span>api: {{ signinContent.api }}</span>
          <br />
          <span v-html="signinContent.paramsContent"></span>
          <br />
          <span v-html="signinContent.codeContent"></span>
          <br />
          <span v-html="signinContent.msg"></span>
          <br />
          <span v-html="signinContent.dataContent"></span>
        </li>
      </Inscription>
      <!-- 登出接口信息 -->
      <div class="mongo_api_title">{{ signOutContent.title }}</div>
      <Inscription>
        <li slot="projectList">
          <span>api: {{ signOutContent.api }}</span>
          <br />
          <span v-html="signOutContent.paramsContent"></span>
          <br />
          <span v-html="signOutContent.codeContent"></span>
          <br />
          <span v-html="signOutContent.msg"></span>
          <br />
          <span v-html="signOutContent.dataContent"></span>
        </li>
      </Inscription>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.mongoview-wrap {
  width: $childBaseWidth;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  div.mongo_box_wrap {
    margin-top: $distanceHeader + $spancin;
    display: flex;
    flex-direction: column;
    width: $boxWidth;
    div.mongo_api_title {
      padding-left: $spancin * 2;
      font-size: 0.12rem;
      font-weight: bold;
    }
    div.inscription-title {
      display: none;
    }
  }
}
</style>

<script>
export default {
  name: "mongoview",
  data() {
    return {
      active: 4,
      signUpContent: {
        title: "POST 注册接口",
        api: "/api/v1/signup [POST]",
        paramsContent: `params: {<br />
          &nbsp;&nbsp;username: String,<br />
          &nbsp;&nbsp;password: String,<br />
          &nbsp;&nbsp;phonenumber: Number,<br />
        }`,
        codeContent: `code: 200、注册成功 40：输入信息不完善或有误 41：注册失败，该用户名已存在`,
        msg: "响应返回的信息说明",
        dataContent: `data: {<br />
          &nbsp;&nbsp;username: 用户名,<br />
          &nbsp;&nbsp;msg: 注册成功,<br />
          &nbsp;&nbsp;accesstoken: 生成的token,<br />
        }`
      },
      signinContent: {
        title: "GET 登录接口",
        api: "/api/v1/signin [GET]",
        paramsContent: `params: {<br />
          &nbsp;&nbsp;username: String,<br />
          &nbsp;&nbsp;password: String,<br />
        }`,
        codeContent: `code: 200、登录成功 40：输入信息不完善或有误 41：注册失败，该用户名已存在`,
        msg: "响应返回的信息说明",
        dataContent: `data: {<br />
          &nbsp;&nbsp;username: 用户名,<br />
          &nbsp;&nbsp;msg: 登录成功,<br />
          &nbsp;&nbsp;lastLoginTime: 上次登录时间,<br />
        }`
      },
      signOutContent: {
        title: "GET 登出接口",
        api: "/api/v1/signout [GET]",
        paramsContent: `params: {}`,
        codeContent: `code: 200、登出成功 40：输入信息不完善或有误 41：注册失败，该用户名已存在`,
        msg: "响应返回的信息说明",
        dataContent: `data: {<br/>
          &nbsp;&nbsp;msg: 登出成功,<br/>
        }`
      }
    };
  },
  mounted() {
    this.$Loading.finish();
  }
};
</script>
