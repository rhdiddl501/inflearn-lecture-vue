<template>
    <form @submit.prevent @keyup.enter="submit">
        <input type="text" v-model="searchVal">
        <button v-show="showBtn" type="reset" class="btn-reset"
                @click="reset"/>
    </form>
</template>

<script>
export default {
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
        }
    },
    methods: {
        submit() {
            this.$emit('@submit')
        },
        reset() {
            this.searchVal = ''
            this.$emit('@reset')
        }
    }
}
</script>