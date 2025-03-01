<template>
  <div class="search-page">
    <div class="title">
      <span style="color: grey; font-size: 72px" class="roboto-slab-title">
        Z-Movie
      </span>
    </div>
    <div class="quote">
      Part of Z-Library project. The world's largest movie library
    </div>
    <SearchBar />
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "SearchPage",
  components: {
    SearchBar,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.search-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.quote {
  display: flex;
  justify-content: center;
  color: #90a5a8;
  font-weight: 400;
  font-style: italic;
}

.roboto-slab-title {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
