import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "../views/pages/SearchPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: SearchPage }, // 指定了当浏览器 URL 为 / 时，渲染 SearchPage.vue 组件
  { path: "/test", component: () => import("../views/pages/test.vue") }, // 懒加载
];

export default new VueRouter({
  mode: "history",
  routes,
});
