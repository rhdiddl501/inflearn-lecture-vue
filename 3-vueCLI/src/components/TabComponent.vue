<template>
    <ul class="tabs">
        <li v-for="tab in tabs" :key="tab">
            {{tab}}
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            tabs: ['추천 검색어','최근검색어']
        }
    }
}
</script>