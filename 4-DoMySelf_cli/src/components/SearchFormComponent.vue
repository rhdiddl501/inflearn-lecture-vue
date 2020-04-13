<template>
    <form @submit.prevent @keyup.enter="submit">
        <input type="text" v-model="searchVal">
        <button v-show="showBtn" type="reset" class="btn-reset"
                @click="reset"/>
    </form>
</template>

<script>
export default {
    props: [ 'searchedVal' ],
    data () {
        return {
            searchVal: '',
            showBtn: false
        }
    },
    watch: {
        searchVal(){
            if(this.searchVal.length) this.showBtn = true
            else {
                this.showBtn = false
                this.reset()
            }
        },
        searchedVal() {
            this.searchVal = this.searchedVal
        }
    },
    methods: {
        submit(inputVal) {
            this.$emit('@search', inputVal)
        },
        reset() {
            this.searchVal = ''
            this.$emit('@reset')
        }
    }
}
</script>