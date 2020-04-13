<template>
  <div id="app">
    <header><h2 class="container">검색</h2></header>
    <div class="container">
      <SearchForm :searchedVal="searchedVal" @@search="search" @@reset="reset"/>
      <div class="content">
        <div v-if="searched">
          <ResultComponent/>
        </div>
        <div v-else>
          <TabComponent :tabs="tabs" :selectedTab="selectedTab" @@changeTab="changeTab"/>
          <ListComponent @@remove="remove" :lists="lists" :searchedVal="searchedVal" :selectedTab="selectedTab" @@search="search"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import keywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import SearchForm from './components/SearchFormComponent.vue'
import ResultComponent from './components/SearchResultComponent.vue'
import TabComponent from './components/TabComponent.vue'
import ListComponent from './components/ListComponent.vue'
import KeywordModel from '../../3-vueCLI/src/models/KeywordModel'

export default {
  data () {
    return {
      searched: false,
      searchedVal: '',
      tabs: ['추천검색어', '최근검색어'],
      selectedTab: '추천검색어',
      lists: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    reset() {
      this.searched = false
      this.getList()
    },
    search(inputVal) {
      this.searched = true
      this.searchedVal = inputVal
      HistoryModel.add(inputVal)
    },
    changeTab(tabName){
      this.selectedTab = tabName
      this.getList()
    },
    remove(keyword) {
      HistoryModel.remove(keyword)
    },
    getList() {
      if( this.selectedTab === '최근검색어') {
        HistoryModel.list().then(data => {
        this.lists = data
        })
      }
      else {
        keywordModel.list().then(data => {
        this.lists = data
        })
      }
    }
  },
  components: {
    SearchForm,
    ResultComponent,
    TabComponent,
    ListComponent
  }
}
</script>