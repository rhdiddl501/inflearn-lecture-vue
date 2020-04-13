<template>
    <div>
        <ul class="tabs">
            <li v-for="tab in tabs" :key="tab" :class="{active: tab===selectedTab}" @click="changeTab(tab)">
                {{tab}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'tabs', 'selectedTab' ],
    methods: {
        changeTab(tabName) {
            this.$emit('@changeTab',tabName)
        }
    }
}
</script>