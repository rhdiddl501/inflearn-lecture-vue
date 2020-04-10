<template>
    <form @submit.prevent="emitSearch">
        <input v-model="query" type="text" placeholder="검색어를 입력해 주세요">
        <button v-show="isShowBtn" type="reset" class="btn-reset" @click="reset"/>
    </form>
</template>

<script>
export default {
    prop:[
        'searchVal'
    ],
    data() {
        return {
            query: this.searchVal,
            isShowBtn: false
        }
    },
    watch: {
        query() {
            if(this.query.length === 0) {
                this.isShowBtn = false
                this.reset()
            } else this.isShowBtn = true
        }
    },
    methods: {
        reset() {
            this.query = ''
            this.$emit('@reset')
        },
        emitSearch() {
            this.$emit('@search', this.query.trim())
        }
    }
}
</script>