import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI);

// 将路由实例注入到 Vue 根实例，使整个应用具备路由功能
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
