import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: () => import("@/views/loginIndex")
  },
  {
    path: "/login", //登陆
    name: "login",
    component: () => import("@/views/loginIndex")
  },
  {
    path: "/infoConfig", // 个人信息填写
    name: "infoConfig",
    component: () => import("@/views/infoConfig")
  },
  {
    path: "/homeIndex", // 首页
    name: "homeIndex",
    component: () => import("@/views/homeIndex")
  },
  {
    path: "/orderGoods", // 我的订单
    name: "orderGoods",
    component: () => import("@/views/orderGoods")
  },
  {
    path: "/switchChat", // 更换微信
    name: "switchChat",
    component: () => import("@/views/switchChat")
  },
  {
    path: "/editInfo", // 编辑个人信息
    name: "editInfo",
    component: () => import("@/views/editInfo")
  },
  {
    path: "/editPassword", // 编辑密码
    name: "editPassword",
    component: () => import("@/views/editPassword")
  },
  {
    path: "/inputMessage", // 留言
    name: "inputMessage",
    component: () => import("@/views/inputMessage")
  },
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
