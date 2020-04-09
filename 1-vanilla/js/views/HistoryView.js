import KeywordView from './KeywordView.js'

const HistoryView = Object.create(KeywordView)

HistoryView.getKeywordHtml = function (data) {
    return data.reduce((html,item) => {
        html += `<li data-keyword="${item.keyword}">
        ${item.keyword}
        <span class="date">${item.date}</span>
        <button class="btn-remove"></button>
        </li>`
        return html
    },'<ul class="list">') + '</ul>'
}

HistoryView.bindRemove = function() {
    Array.from(this.el.querySelectorAll('.btn-remove')).forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation()
            this.onClickRemove(btn.parentElement.dataset.keyword)
        })
    })  
}

HistoryView.onClickRemove = function (keyword) {
    this.emit('@clickRemove', {keyword})
}
export default HistoryView