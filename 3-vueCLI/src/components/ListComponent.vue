<template>
    <ul class="list">
        <li v-for="(list, index) in lists" :key="list.keyword"
            @click="keyword(list.keyword)">
            <span v-if="tabName === '추천 검색어'" class="number">
                {{index+1}}</span>
            {{list.keyword}}
            <span v-if="tabName === '최근 검색어'" class="date"> {{list.date}} </span>
            <span v-if="tabName === '최근 검색어'">
                <button class="btn-remove" @click.stop="remove(list.keyword)"/> 
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    props: [
        'lists','tabName'
    ],
    methods: {
        keyword(keyword) {
            this.$emit('@keyword', keyword)
        },
        remove(keyword) {
            this.$emit('@remove',keyword)
        }
    }
}
</script>