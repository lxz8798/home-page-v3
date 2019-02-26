/* eslint-disable */
/**
 * 路由，引入路由懒加载，如果有需要的话可以解开注释
 * @author 李啸竹
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home";
import { LoadingBar } from "iview";
Vue.use(VueRouter);
Vue.use(LoadingBar);
Vue.prototype.$Loading = LoadingBar;
const getComponent = name => () => import(/* webpackChunkName: "home" */ `./views/${name}/index.vue`);
const homeComponent = name => () => import(/* webpackChunkName: "home" */ `./views/${name}/Home.vue`);
const jsComponent = name => () => import(/* webpackChunkName: "jsview" */ `./views/${name}/index.vue`);
const cssComponent = name => () => import(/* webpackChunkName: "cssview" */ `./views/${name}/index.vue`);
const designComponent = name => () => import(/* webpackChunkName: "designview" */ `./views/${name}/index.vue`);
const mongoComponent = name => () => import(/* webpackChunkName: "mongoview" */ `./views/${name}/index.vue`);
const workComponent = name => () => import(/* webpackChunkName: "workview" */ `./views/${name}/index.vue`);
const updateComponent = name => () => import(/* webpackChunkName: "updateview" */ `./views/${name}/index.vue`);
const userComponent = name => () => import(/* webpackChunkName: "user" */ `./views/${name}/index.vue`);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: homeComponent("home"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    // {
    //   path: "/example",
    //   name: 'example',
    //   component: getComponent("example"),
    //   meta: {
    //     auth: true,
    //     keepAlive: false // 是否缓存
    //   }
    // },
    {
      path: "/jsview",
      name: 'jsview',
      component: jsComponent("jsview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/cssview",
      name: 'cssview',
      component: cssComponent("cssview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/designview",
      name: 'designview',
      component: designComponent("designview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/mongoview",
      name: 'mongoview',
      component: mongoComponent("mongoview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/workview",
      name: 'workview',
      component: workComponent("workview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/updateview",
      name: 'updateview',
      component: updateComponent("updateview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/signupview",
      name: 'signupview',
      component: userComponent("signupview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/signinview",
      name: 'signinview',
      component: userComponent("signinview"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    // {
    //   path: "/web",
    //   beforeEnter(to, from, next) {
    //     window.location = "/web.html"
    //   }
    // },
    // {
    //   path: "/home",
    //   beforeEnter(to, from, next) {
    //     window.location = "/home.html"
    //   }
    // }
  ]
});

/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
  // 合法性校验
  if (to.meta.auth) {
    LoadingBar.start();
    next();
  };
  // next();
});
// router.afterEach(route => {
//   LoadingBar.finish();
// });
export default router;