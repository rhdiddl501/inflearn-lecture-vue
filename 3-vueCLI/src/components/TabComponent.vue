<template>
    <ul class="tabs">
        <li v-for="tab in tabs" :key="tab" :class="{active: tab === tabName}"
            @click="selectTab(tab)">
            {{tab}}
        </li>
    </ul>
</template>

<script>
export default {
    props: [ 'tabs', 'tabName' ],
    methods: {
        selectTab(selectedTab) {
            this.$emit('@changeTab',selectedTab)
        }
    }
}
</script>