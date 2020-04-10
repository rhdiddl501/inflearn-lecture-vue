<template>
    <ul class="list">
        <li v-for="(list, index) in lists" :key="list.keyword">
            <span v-if="tabName === '추천 검색어'" class="number">
                {{index+1}}</span>
            {{list.keyword}}
            <span v-if="tabName === '최근 검색어'" class="date"> {{list.date}} </span>
            <span v-if="tabName === '최근 검색어'">
                <button class="btn-remove"/> 
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    props: [
        'lists','tabName'
    ]
}
</script>