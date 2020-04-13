<template>
    <div>
        <ul class="list">
            <li v-for="(list, index) in lists" :key="list.keyword"
                @click="search(list.keyword)">
                <span v-if="selectedTab==='추천검색어'" class="number">
                    {{index + 1}}
                </span>
                {{list.keyword}}
                <span v-if="selectedTab==='최근검색어'" class="date">
                    {{list.date}}
                </span>
                <button v-if="selectedTab==='최근검색어'" class="btn-remove" @click.stop="remove(list.keyword)"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'lists', 'selectedTab', 'searchedVal' ],
    methods: {
        search(keyword) {
            this.$emit('@search', keyword)
        },
        remove(keyword) {
            this.$emit('@remove', keyword)
        }
    }
}
</script>