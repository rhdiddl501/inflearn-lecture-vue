<template>
  <div id="app">
    <header><h2 class="container">검색</h2></header>
    <div class="container">
      <SearchForm @@submit="submit" @@reset="reset"/>
      <div class="content">
        <div v-if="submitted">
          <ResultComponent/>
        </div>
        <div v-else>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchFormComponent.vue'
import ResultComponent from './components/SearchResultComponent.vue'

export default {
  data () {
    return {
      submitted: false
    }
  },
  methods: {
    submit(){
      this.submitted = true
    },
    reset() {
      this.submitted = false
    }
  },
  components: {
    SearchForm, ResultComponent
  }
}
</script>