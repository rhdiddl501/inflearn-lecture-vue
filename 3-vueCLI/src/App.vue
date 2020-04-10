<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>

    <div class="container">
      <SearchComponent :searchVal="searchValue" v-on:@search="search" v-on:@reset="reset"></SearchComponent>

      <div class="content">
        <div v-if="submitted">
          <SearchResultComponent :datas="searchResultData"></SearchResultComponent>
        </div>

        <TabComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import SearchResultComponent from "./components/ResultComponent.vue";
import TabComponent from "./components/TabComponent.vue";

import SearchModel from "./models/SearchModel.js";
export default {
  name: "app",
  data() {
    return {
      searchValue: "",
      submitted: false,
      searchResultData: []
    };
  },
  components: {
    SearchComponent,
    SearchResultComponent,
    TabComponent
  },
  methods: {
    search(searchVal) {
      this.searchValue = searchVal;
      SearchModel.list().then(data => {
        this.searchResultData = data;
      });
      this.submitted = true;
    },
    reset() {
      this.submitted = false;
    }
  }
};
</script>