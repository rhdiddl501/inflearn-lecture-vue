<template>
    <div>
        <ul class="list">
            <li v-for="(list, index) in lists" :key="list.keyword"
                @click="search(list.keyword)">
                <span class="number"> {{index + 1}} </span>
                {{list.keyword}}
            </li>
        </ul>
    </div>
</template>

<script>
import keywordModel from '../models/KeywordModel.js'

export default {
    data () {
        return {
            lists: []
        }
    },
    created () {
        keywordModel.list().then(data => {
            this.lists = data
        })        
    },
    methods: {
        search(keyword) {
            this.$emit('@search', keyword)
        }
    }
}
</script>