<template>
  <div class="workview-wrap">
    <Header :active="active"></Header>
    <!-- 个人主页项目 -->
    <Inscription :homePageList="homePageList">
      <use slot="h2TitleIcon" xlink:href="#icon-caidanshejishi"></use>
      <h2 slot="h2Title">{{homePageTitle}}</h2>
      <li slot="projectList" v-for="(item, index) in homePageList" :key="index">
        <Badge :count="item.childs.length" v-if="item.childs"></Badge>
        <svg v-if="item.link" class="icon linkIcon" aria-hidden="true">
          <use xlink:href="#icon-link"></use>
        </svg>
        <span class="img-box">
          <p>{{item.imgsize}}</p>
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
    <!-- 参与项目相关 -->
    <Inscription :otherProjectList="otherProjectList">
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
          <p>{{item.imgsize}}</p>
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
    <!-- 移动端相关项目 -->
    <Inscription :moveH5ProjectList="moveH5ProjectList">
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
          <p>{{item.imgsize}}</p>
        </span>
        <h4>{{item.name}}</h4>
        <p>{{item.des}}</p>
      </li>
    </Inscription>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
div.workview-wrap {
  margin-top: $distanceHeader + $spancin;
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
          img: "",
          imgsize: "请上传图片",
          des: "个人首页早期1.0版本，使用的是HTML+CSS+JS...完成。",
          link: "#"
        },
        {
          year: "",
          name: "HomePage2.0",
          img: "",
          imgsize: "请上传图片",
          des:
            "个人首页2.0版本，CLI生成的项目框架，使用的是VUE+AXIOS+CSS3+JS+NOJS/KOA2...完成。",
          link: "#"
        },
        {
          year: "",
          name: "HomePage3.0",
          img: "",
          imgsize: "请上传图片",
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
          img: "",
          imgsize: "请上传图片",
          des:
            "公司里接受北京建工出版社的需求，给其开发出全套解决方案，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台等等。",
          link: "#",
          childs: [
            {
              year: "",
              name: "建工网上书城WEB端",
              img: "",
              imgsize: "请上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "建工内嵌页",
              img: "",
              imgsize: "请上传图片",
              des: "在PAD端，和ANDROID中访问。",
              link: "#"
            }
          ]
        },
        {
          year: "",
          name: "电子社解决方案",
          img: "",
          imgsize: "请上传图片",
          des:
            "公司里接受北京电子出版社的需求，给其开发出全套解决方案，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台等等。",
          link: "#",
          childs: [
            {
              year: "",
              name: "众智采集",
              img: "",
              imgsize: "请上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "国之重器",
              img: "",
              imgsize: "请上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            },
            {
              year: "",
              name: "电子社网上书城WEB端",
              img: "",
              imgsize: "请上传图片",
              des: "微信公众号，主要是在微信和手机浏览器中访问。",
              link: "#"
            }
          ]
        },
        {
          year: "",
          name: "可知",
          img: "",
          imgsize: "请上传图片",
          des:
            "公司自营项目，内容包含WEB端，移动端ANDROID/IOS，移动端H5，管理运营后台/AQR授权分发系统/PMS机构管理系统，知识体系阅读解决方案等等。",
          link: "#"
        },
        {
          year: "",
          name: "项目管理后台",
          img: "",
          imgsize: "请上传图片",
          des:
            "使用ELEMENTUI/IVIEW开发出来专门用于管理网站内容的后台管理平台。",
          link: "#"
        }
      ],
      moveH5ProjectTitle: "移动端相关项目",
      moveH5ProjectList: [
        {
          year: "",
          name: "个人主页移动端",
          img: "",
          imgsize: "请上传图片",
          des: "个人主页3.0兼容移动端，使用vue开发的H5页面。",
          link: "#"
        },
        {
          year: "",
          name: "独产开发的书城小程序",
          img: "",
          imgsize: "请上传图片",
          des:
            "使用部份原生小程序和UNIAPP完成，发布小程序/H5/ANDROID/IOS版本。",
          link: "#"
        },
        {
          year: "",
          name: "书网互动公众号",
          img: "",
          imgsize: "请上传图片",
          des: "微信公众号，主要是在微信和手机浏览器中访问。",
          link: "#"
        },
        {
          year: "",
          name: "可知公众号",
          img: "",
          imgsize: "请上传图片",
          des: "微信公众号，主要是在微信和手机浏览器中访问。",
          link: "#"
        },
        {
          year: "",
          name: "移动端阅读器解决方案",
          img: "",
          imgsize: "请上传图片",
          des:
            "主要是给移动端的电子书资源阅读使用，作为一个单独项目，独立于项目之外专门开发。",
          link: "#"
        }
      ]
    };
  },
  created() {
    this.getWorkViewList();
  },
  methods: {
    async getWorkViewList() {
      let params, res;

      params = {
        username: "123456789",
        password: "123456789",
        phonenumber: "123456789"
      };

      // res = await api.workList(params);
      this.$http.get("http://127.0.0.1:7001/api/v1/signin",params)
      .then(res => {
        console.log(res,'res')
      })      
    }
  }
};
</script>
