<template>
    <form>
        <input v-model="query" type="text" placeholder="검색어를 입력해 주세요">
        <button v-show="isShowBtn" type="reset" class="btn-reset" v-on:click="reset()"/>
    </form>
</template>

<script>
export default {
    data() {
        return {
            query: '',
            isShowBtn: false
        }
    },
    watch: {
        query() {
            if(this.query.length === 0) {
                this.isShowBtn = false
            }
        }
    },
    method: {
        reset() {
            this.query = ''
        }
    }
}
</script>