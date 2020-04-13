<template>
  <div id="app">
    <header><h2 class="container">검색</h2></header>
    <div class="container">
      <SearchForm :selectedKeyword="selectedKeyword" @@submit="submit" @@reset="reset"/>
      <div class="content">
        <div v-if="submitted">
          <ResultComponent/>
        </div>
        <div v-else>
          <TabComponent/>
          <ListComponent @@search="search"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchFormComponent.vue'
import ResultComponent from './components/SearchResultComponent.vue'
import TabComponent from './components/TabComponent.vue'
import ListComponent from './components/ListComponent.vue'
export default {
  data () {
    return {
      submitted: false,
      selectedKeyword: ''
    }
  },
  methods: {
    submit(){
      this.submitted = true
    },
    reset() {
      this.submitted = false
    },
    search(keyword) {
      this.submit()
      this.selectedKeyword = keyword
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