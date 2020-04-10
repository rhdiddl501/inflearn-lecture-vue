<template>
<div>
  <header>
    <h2 class="container">검색</h2>
  </header>

  <SearchForm></SearchForm>
</div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SearchForm
  }
}
</script>