import View from './View.js'

const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
    this.init(el)
    return this
}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length? this.getKeywordHtml(data) : 'No recommended word'
    this.bindEvent()
    this.show()
    return this
}

KeywordView.getKeywordHtml = (data) => {
    return data.reduce((html,item,i) => {
        html += `<li data-keyword="${item.keyword}">
        <span calss="number">${i+1}</span> ${item.keyword}
        </li>`
        return html
    },'<ul class="list">') + '</ul>'
}

KeywordView.bindEvent = function () {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    })
}

KeywordView.onClickKeyword = function (e) {
    const keyword = e.currentTarget.dataset.keyword
    this.emit('@click', {keyword})
}

export default KeywordView