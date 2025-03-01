<template>
  <el-header class="navBar" style="height: 50px; padding-left: 15px">
    <div class="buttonBox">
      <ul>
        <li style="background: #49afd0">
          <a href="/">22,525,200 Movies</a>
        </li>
        <li style="background: #8ecd51">
          <a href="/book">284,837,643 Books</a>
        </li>
      </ul>
    </div>
  </el-header>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>

<style scoped>
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttonBox {
  height: 50px;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    list-style: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: auto;
    li {
      padding: 2px 10px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        line-height: 20px;
      }
    }
  }
}
</style>
