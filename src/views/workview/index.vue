<template>
  <div class="workview-wrap">
    <Header :active="active"></Header>
    <!-- 个人主页项目 -->
    <Inscription :homePageList="homePageList" class="webBox">
      <use slot="h2TitleIcon" xlink:href="#icon-caidanshejishi"></use>
      <h2 slot="h2Title">{{homePageTitle}}</h2>
      <li slot="projectList" v-for="(item, index) in homePageList" :key="index">
        <Badge :count="item.childs.length" v-if="item.childs"></Badge>
        <svg v-if="item.link" class="icon linkIcon" aria-hidden="true">
          <use xlink:href="#icon-link"></use>
        </svg>
        <span class="img-box">
          <p v-if="item.img == ''">{{item.imgsize}}</p>
          <img v-else :src="item.img" alt="" @click="gotoSize(item.link)">
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
    <!-- 参与项目相关 -->
    <Inscription :otherProjectList="otherProjectList" class="workBox">
      <use slot="h2TitleIcon" xlink:href="#icon-ic_tabbar_planproject_n"></use>
      <h2 slot="h2Title">{{otherProjectTitle}}</h2>
      <li slot="projectList"
          v-for="(item, index) in otherProjectList"
          :key="index">
        <Badge :count="item.childs.length" v-if="item.childs"></Badge>
        <svg v-if="item.link" class="icon linkIcon" aria-hidden="true">
          <use xlink:href="#icon-link"></use>
        </svg>
        <span class="img-box">
          <p v-if="item.img == ''">{{item.imgsize}}</p>
          <img v-else :src="item.img" alt="" @click="gotoSize(item.link)">
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
    <!-- 移动端相关项目 -->
    <Inscription :moveH5ProjectList="moveH5ProjectList" class="phoneBox">
      <use slot="h2TitleIcon" xlink:href="#icon-xiaochengxu"></use>
      <h2 slot="h2Title">{{moveH5ProjectTitle}}</h2>
      <li slot="projectList"
          v-for="(item, index) in moveH5ProjectList"
          :key="index">
        <Badge :count="item.childs.length" v-if="item.childs"></Badge>
        <svg v-if="item.link" class="icon linkIcon" aria-hidden="true">
          <use xlink:href="#icon-link"></use>
        </svg>
        <span class="img-box">
          <p v-if="item.img == ''">{{item.imgsize}}</p>
          <img v-else :src="item.img" alt="" @click="gotoSize(item.link)">
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.workview-wrap {
  margin-top: $distanceHeader + $spancin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .inscription-wrap.webBox,
  > .inscription-wrap.workBox {
    > .inscription-box-wrap {
      > .inscription-content {
        > ul {
          > li {
            flex: 1 1 100%;
          }
        }
      }
    }
  }

  > .inscription-wrap.phoneBox {
    > .inscription-box-wrap {
      > .inscription-content {
        > ul {
          > li {
            flex: unset;
            width: 0 0 calc(100% / 6);
            max-width: 177px;
          }
        }
      }
    }
  }

  .Footer_wrap {
    padding: $spancin;
    padding-right: 0;
    div.footer_box_wrap {
      ul {
        margin-right: $spancin * 2 !important;
      }
    }
  }
}
</style>

<script>
import { Badge } from "iview";
import api from "@/api/workview";
export default {
  name: "workview",
  components: { Badge },
  data() {
    return {
      active: 5,
      homePageTitle: "个人主页项目",
      homePageList: [
        {
          year: "",
          name: "HomePage1.0",
          img: "http://static.lazy-studio.com/work1.webp",
          imgsize: "等待上传图片",
          des: "个人首页早期1.0版本，使用的是HTML+CSS+JS...完成。",
          link: "http://v1.lazy-studio.com"
        },
        {
          year: "",
          name: "HomePage2.0",
          img: "http://static.lazy-studio.com/work2.webp",
          imgsize: "等待上传图片",
          des:
            "个人首页2.0版本，CLI生成的项目框架，使用的是VUE+AXIOS+CSS3+JS+NOJS/KOA2...完成。",
          link: "http://v2.lazy-studio.com"
        },
        {
          year: "",
          name: "HomePage3.0",
          img: "http://static.lazy-studio.com/work3.webp",
          imgsize: "等待上传图片",
          des:
            "个人首页3.0版本，CLI3生成的项目框架，使用的是VUE+FLY/MOCKJS+CSS3+JS+NODEJS/EGGJS...完成。",
          link: "#"
        }
      ],
      otherProjectTitle: "WEB端参与项目",
      otherProjectList: [
        {
          year: "",
          name: "建工社解决方案",
          img: "http://static.lazy-studio.com/work5.webp",
          imgsize: "等待上传图片",
          des:
            "公司里接受北京建工出版社的需求，给其开发出全套解决方案，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台等等。",
          link: "http://exam.cabplink.com",
          childs: [
            {
              year: "",
              name: "建工网上书城WEB端",
              img: "",
              imgsize: "等待上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "建工内嵌页",
              img: "",
              imgsize: "等待上传图片",
              des: "在PAD端，和ANDROID中访问。",
              link: "#"
            }
          ]
        },
        {
          year: "",
          name: "电子社解决方案",
          img: "http://static.lazy-studio.com/work6.webp",
          imgsize: "等待上传图片",
          des:
            "公司里接受北京电子出版社的需求，给其开发出全套解决方案，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台等等。",
          link: "http://www.51zhy.cn",
          childs: [
            {
              year: "",
              name: "众智采集",
              img: "",
              imgsize: "等待上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "国之重器",
              img: "",
              imgsize: "等待上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "电子社网上书城WEB端",
              img: "",
              imgsize: "等待上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            }
          ]
        },
        {
          year: "",
          name: "可知",
          img: "http://static.lazy-studio.com/work4.webp",
          imgsize: "等待上传图片",
          des:
            "公司自营项目，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台/AQR授权分发系统/PMS机构管理系统，知识体系阅读解决方案等等。",
          link: "http://www.keledge.com"
        },
        {
          year: "",
          name: "北京信息技术-国之重器WEB端",
          img: "http://static.lazy-studio.com/work7.webp",
          imgsize: "等待上传图片",
          des: "与北京总公司合作的，信息技术需求，对国之重器WEB端项目进行新需求拓展。",
          link: "http://gzzq.51zhy.cn/#/home",
        },
        {
          year: "",
          name: "各大项目的后台页面",
          img: "http://static.lazy-studio.com/work8.webp",
          imgsize: "等待上传图片",
          des: "针对每个项目都有一个独立的后台管理页面。",
          link: "",
        },
      ],
      moveH5ProjectTitle: "移动端相关项目",
      moveH5ProjectList: [
        {
          year: "",
          name: "个人APP项目【一览书海】",
          img: "http://static.lazy-studio.com/phone1.webp",
          imgsize: "等待上传图片",
          des: "使用UNIAPP开发【正在开发中】,发布页面正在审核中。。。支持小程序、移动H5、公众号、ANDROID和IOS版本。",
          link: ""
        },
        {
          year: "",
          name: "个人主页(旧版H5/新版RN)",
          img: "http://static.lazy-studio.com/phone2.webp",
          imgsize: "等待上传图片",
          des: "缩略图是v3版个人主页以移动端打开后的显示，新版移动端个人主页，正在使用React Native开发中。",
          link: "http://m.lazy-studio.com"
        },
        {
          year: "",
          name: "书网互动公众号",
          img: "http://static.lazy-studio.com/phone6.webp",
          imgsize: "等待上传图片",
          des: "公众号被移除，现在只能通过我电脑上的小程序开发工具打开，主要是在微信和手机浏览器中访问。",
          link: ""
        },
        {
          year: "",
          name: "可知公众号",
          img: "http://static.lazy-studio.com/phone5.webp",
          imgsize: "等待上传图片",
          des: "需要关注微信公众号，主要是在微信和手机浏览器中访问。",
          link: "http://m.keledge.com"
        },
        {
          year: "",
          name: "移动端阅读器解决方案",
          img: "http://static.lazy-studio.com/phone4.webp",
          imgsize: "等待上传图片",
          des:
            "主要是给移动端的电子书资源阅读使用的核心技术，一个EPUB、PDF的通用阅读器，作为一个单独项目，独立于项目之外专门开发。",
          link: ""
        },
        {
          year: "",
          name: "工信书院-小程序&公众号",
          img: "http://static.lazy-studio.com/phone3.webp",
          imgsize: "等待上传图片",
          des: "由本人实名微信授权的开发环境项目。",
          link: ""
        }
      ]
    };
  },
  mounted() {
    this.$Loading.finish();
  },
  methods: {
    gotoSize(link) {
      window.open(link);
    }
  }
};
</script>
