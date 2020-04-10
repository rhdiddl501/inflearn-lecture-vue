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
        <div v-else>
        <TabComponent @@changeTab="selectedTab" :tabs="tabs"></TabComponent>
        <ListComponent :lists="lists" :tabName="tabName"
          @@keyword="clickKeyword" @@remove="removeHistory"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import SearchResultComponent from "./components/ResultComponent.vue";
import TabComponent from "./components/TabComponent.vue";
import ListComponent from './components/ListComponent.vue'

import SearchModel from "./models/SearchModel.js";
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'
export default {
  name: "app",
  data() {
    return {
      tabs: ['추천 검색어','최근 검색어'],
      tabName: '추천 검색어',
      searchValue: "",
      submitted: false,
      searchResultData: [],
      lists: []
    };
  },
  components: {
    SearchComponent,
    SearchResultComponent,
    TabComponent,
    ListComponent
  },
  created() {
    this.fetchKeyword()
  },
  methods: {
    search(searchVal) {
      if(searchVal.trim()==='') return
      this.searchValue = searchVal;
      SearchModel.list().then(data => {
        this.searchResultData = data;
      });
      this.submitted = true;
      HistoryModel.add(searchVal)
    },
    reset() {
      this.submitted = false;
    },
    selectedTab(selectedTab) {
      if(selectedTab == this.tabs[0]){
        this.fetchKeyword()
      } else {
        this.fetchHistory()
      }
      this.tabName = selectedTab
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.lists = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.lists = data
      })
    },
    clickKeyword(keyword){
      this.search(keyword)
    },
    removeHistory(keyword){
      HistoryModel.remove(keyword)
      this.fetchHistory()
    }
  }
};
</script>