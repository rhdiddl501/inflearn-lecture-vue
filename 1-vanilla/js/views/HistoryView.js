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

export default HistoryView