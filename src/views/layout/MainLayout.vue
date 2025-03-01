<template>
  <div class="main-layout">
    <!-- 顶部导航栏 -->
    <NavBar />

    <!-- 动态内容（路由视图） -->
    <main class="main-content">
      <slot></slot>
    </main>

    <!-- 底部版权信息 -->
    <el-footer>© 2025 Z-Movie by Jaelyn</el-footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "MainLayout",
  components: {
    NavBar,
  },
  methods: {},
};
</script>

<style scoped>
.main-layout {
  background: #f5f5f5; /* 浅灰背景，与 Z-Library 风格一致 */
  min-height: 100vh; /* 确保覆盖整个视口 */
  min-width: 100vw; /* 确保覆盖整个视口 */
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1; /* 内容区填充剩余空间 */
  padding: 20px; /* 内容与边界的间距 */
}

.el-footer {
  color: #666;
  text-align: center;
  line-height: 60px;
  padding: 0;
  border-top: 1px solid #eee;
}
</style>
