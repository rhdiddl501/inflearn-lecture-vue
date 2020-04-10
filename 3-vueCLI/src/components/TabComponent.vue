<template>
    <ul class="tabs">
        <li v-for="tab in tabs" :key="tab" :class="{active: tab === selectedTab}"
            @click="selectTab(tab)">
            {{tab}}
        </li>
    </ul>
</template>

<script>
export default {
    props: [ 'tabs' ],
    data () {
        return {
            
            selectedTab: '추천 검색어'
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.selectedTab = selectedTab
            this.$emit('@changeTab',selectedTab)
        }
    }
}
</script>