<template>
<div>
    <ul>
    <div v-if="datas.length ">
        <li v-for="data in datas" :key="data.name">
            <img :src="data.image"/>
            {{data.name}}
        </li>
    </div>
    <div v-else>
        <li>검색결과가 없습니다.</li>
    </div>
    </ul>
</div>
</template>

<script>
import SearchModel from '../models/SearchModel.js'

export default {
    props: [
        'datas'
    ]
}
</script>