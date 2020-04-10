<template>
<div>
  <header>
    <h2 class="container">검색</h2>
  </header>

  <SearchComponent :searchVal="searchValue" v-on:@search="search"
    v-on:@reset="reset"></SearchComponent>
  <div v-if="submitted">
  <SearchResultComponent :datas="searchResultData"></SearchResultComponent>
  </div> 
</div>
</template>

<script>
import SearchComponent from './components/SearchComponent.vue'
import SearchResultComponent from './components/ResultComponent.vue'

import SearchModel from './models/SearchModel.js'
export default {
  name: 'app',
  data () {
    return {
      searchValue: '',
      submitted: false,
      searchResultData: []
    }
  },
  components: {
    SearchComponent, SearchResultComponent
  },
  methods: {
    search(searchVal) {
      this.searchValue = searchVal
      SearchModel.list().then(data => {
        this.searchResultData = data
      })
      this.submitted = true
    },
    reset() {
      this.submitted = false
    }
  }
}
</script>