<template>
  <div class="search-bar">
    <!-- Tabs 切换 -->
    <el-tabs v-model="activeTab" type="card" class="search-tabs">
      <el-tab-pane label="General Search" name="general"></el-tab-pane>
      <el-tab-pane label="Fulltext Search" name="fulltext"></el-tab-pane>
    </el-tabs>

    <!-- 搜索输入区 -->
    <div class="search-input-container">
      <el-input
        v-model="query"
        placeholder="Search for title, author, ISBN, publisher, md5..."
        class="search-input"
        @keyup.enter="search"
      ></el-input>
      <el-button type="default" @click="search" class="search-button"
        >Search</el-button
      >
    </div>

    <!-- 搜索选项（未来扩展） -->
    <div class="search-options">
      <span>Search options</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      activeTab: "general", // 默认选择 General Search
      query: "", // 搜索关键词
    };
  },
  methods: {
    search() {
      this.$emit("search", { query: this.query, type: this.activeTab });
    },
  },
};
</script>

<style scoped>
.search-bar {
  text-align: center;
  width: 62vw;
  padding: 20px 0;
  background: #f5f5f5;
}

.search-tabs .el-tabs__item {
  background: #fff;
  border-color: #ccc;
  color: #606266;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px 4px 0 0;
}

.search-tabs /deep/ .el-tabs__header {
  margin: 0px;
}

.search-tabs .el-tabs__item.is-active {
  background: #fff;
  border-color: #ccc;
  color: #409eff;
  font-weight: bold;
}

.search-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  margin-bottom: 10px;
}

.search-input /deep/ .el-input__inner {
  height: 40px;
  font-size: 16px;
  border-radius: 0px;
  border: 1px solid #afafaf;
}

.search-button {
  background: #efefef;
  border: 1px solid #afafaf;
  border-left: 0px;
  color: #333;
  height: 40px;
  width: 15%;
  padding: 0 20px;
  border-radius: 0px;
}

.search-button:hover {
  background: #c5c5c5;
  border-color: #c5c5c5;
}

.search-options {
  width: 100px;
  color: #777;
  font-size: 14.9px;
  border-bottom: 1px dashed #777;
}

.search-options span {
  cursor: pointer;
}

.search-options span:hover {
  color: #409eff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .search-input {
    width: 90%;
  }

  .search-input-container {
    flex-direction: column;
    gap: 5px;
  }

  .search-button {
    width: 90%;
  }
}
</style>
