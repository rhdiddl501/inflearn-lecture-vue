<template>
    <div>
        <ul class="search-result">
            <li v-for="data in data" :key="data.name">
                <img :src="data.image"/> {{data.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import ResultModel from '../models/SearchModel.js'
export default {
    data () {
        return {
            data: []
        }
    },
    created() {
        ResultModel.list().then(data => {
            this.data = data
        })
    }
}
</script>