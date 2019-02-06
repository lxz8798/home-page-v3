/* eslint-disable */
/**
 * 路由，引入路由懒加载，如果有需要的话可以解开注释
 * @author 李啸竹
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home"

Vue.use(VueRouter);

const getComponent = name => () => import(`./views/${name}/index.vue`);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component:Home
    },
    {
      path:"/example",
      name:'example',
      component:getComponent("example"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/jsview",
      name:'jsview',
      component:getComponent("jsview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/cssview",
      name:'cssview',
      component:getComponent("cssview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/designview",
      name:'designview',
      component:getComponent("designview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/mongoview",
      name:'mongoview',
      component:getComponent("mongoview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/linkview",
      name:'linkview',
      component:getComponent("linkview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/updateview",
      name:'updateview',
      component:getComponent("updateview"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/web",
      beforeEnter(to, from, next) {
        window.location = "/web.html"
      }
    },
    {
      path:"/home",
      beforeEnter(to, from, next) {
        window.location = "/home.html"
      }
    }
  ]
});

/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
    // 合法性校验
    if (to.meta.auth) {
        next();
    }
    next();
});
export default router;