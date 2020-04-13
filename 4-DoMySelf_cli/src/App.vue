<template>
  <div id="app">
    <header><h2 class="container">검색</h2></header>
    <div class="container">
      <SearchForm/>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchFormComponent.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    SearchForm
  }
}
</script>