<template>
    <div>
        <ul class="tabs">
            <li v-for="tab in tabs" :key="tab" :class="{active: tab===selectedTab}" @click="changeTab(tab)">
                {{tab}}
            </li>
        </ul>
        <div v-if="selectedTab === '추천검색어'">
            추천검색어 리스트
        </div>
        <div v-else>
            최근검색어 리스트
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabs: ['추천검색어', '최근검색어'],
            selectedTab: '추천검색어'
        }
    },
    methods: {
        changeTab(tabName) {
            this.selectedTab = tabName
        }
    }
}
</script>