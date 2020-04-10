export default {
    data: [
        { keyword: '검색기록1', date: '04.03' },
        { keyword: '검색기록2', date: '04.04' },
        { keyword: '검색기록3', date: '04.05' }
    ],

    list() {
        return Promise.resolve(this.data)
    },

    add(keyword = '') {
        keyword = keyword.trim()
        if(!keyword) return
        if(this.data.some(item => item.keyword === keyword)) {
            this.remove(keyword)
        }

        const date = '12.31'
        this.data = [{keyword, date}, ...this.data]
    },

    remove(keyword) {
        this.data = this.data.filter(item => item.keyword !== keyword)
    }

}