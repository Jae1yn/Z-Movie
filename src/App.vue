<template>
  <div id="app">
    <MainLayout>
      <!-- <router-view /> 会根据当前 URL（比如 http://localhost:5173/）查找 routes 中匹配的路径（/），然后渲染对应的组件（SearchPage.vue）。-->
      <!-- 如果 URL 变成 /other，而路由表没定义 /other，<router-view /> 会渲染空白（除非有默认路由或重定向）。 -->
      <router-view />
    </MainLayout>
  </div>
</template>
<script>
import MainLayout from "./views/layout/MainLayout.vue";

export default {
  components: { MainLayout },
};
</script>
<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
