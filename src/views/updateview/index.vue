<template>
  <div class="update_wrap">
    <Header :active="active"></Header>
    <div class="update_box_wrap">
      <div class="update_title">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-guiji"></use>
        </svg>
        <h2>人生轨迹</h2>
      </div>
      <Timeline>
        <Timeline-item v-for="(item, index) in timelineItem"
                       :key="index">
          <p class="time">{{item.time}}</p>
          <p class="content" v-html="item.content">{{item.content}}</p>
        </Timeline-item>
      </Timeline>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
div.update_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $distanceHeader + $spancin;
  width: $childBaseWidth;

  div.update_box_wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: $spancin;
    width: $boxWidth;
    div.update_title {
      width: inherit;
      height: 0.27rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: $spancin;
      h2 {
        margin-left: $spancin;
      }
    }
  }
}
</style>

<script>
import { Timeline, TimelineItem } from "iview";
export default {
  name: "update",
  components: { Timeline, TimelineItem },
  data() {
    return {
      active: 6,
      timelineItem: [
        {
          time: "2013年7月",
          content: "个人主页1.0版完成，使用的是HTML4+CSS2+JS。",
          cover: ""
        },
        {
          time: "至2014年1月",
          content: "一直从事UI/UE/WEB前端相关工作。",
          cover: ""
        },
        {
          time: "至2016年未",
          content: "个人投资开了个实体店，创业失败。",
          cover: ""
        },
        {
          time: "2017年11月",
          content:
            "个人主页2.0版完成，使用的CLI生成的项目框架，使用的技术栈是VUE全家桶（VUE2.0+AXIOS+SCSS+JS+WEBPACK...），并使用NOJS/KOA2采用前后端分离完成，当时技术不是很成熟，所以站点性能不是很强。",
          cover: ""
        },
        {
          time: "2018年至今",
          content: "具体请看WORK COLLECTION视图。",
          cover: ""
        },
        {
          time: "2019年2月",
          content:
            "个人主页3.0版完成，使用的CLI3.0生成的项目框架，使用的技术栈是VUE全家桶（VUE2.0+FLY+SCSS+JS+WEBPACK3.0+MOCKJS...），且使用了FLEX布局、API集中管理、请求接口类的封装、全局注册插件等等实际工作中的技术完成集中管理和为后期迭代更新维护做准备，在一定程序上有适配能力，并使用NOJS/EGGJS采用前后端分离完成RESTful API服务器。",
          cover: ""
        },
        {
          time: "即将更新内容",
          content:
            `
            1、后台管理系统。<br />
            2、RESTful API服务器。<br />
            3、新增接口注册、登录、登出...。<br />
            4、TypeScript支持-需要重构组件script里面的内容。<br />
            5、完成注册，登录，登录API。<br/>
            6、FLEX布局页面适配。<br/>
            7、DESIGNVIEW 增加以前项目基其他项目设计图、手绘CG图等等。<br/>
            8、WORKVIEW 增加连接。<br/>
            9、首页增加内容，排版重新设计。<br/>
            10、完成注册和登录页面。
            `,
          cover: ""
        }
      ]
    };
  }
};
</script>
