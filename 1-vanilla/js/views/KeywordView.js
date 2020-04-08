import View from './View.js'

const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
    this.init(el)

}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length? this.getKeywordHtml(data) : 'No recommended word'
    this.show()
}

KeywordView.getKeywordHtml = function(data) {
    return data.reduce((html,item,i) => {
        html += `<li>
        <span calss="number">${i+1}</span> ${item.keyword}
        </li>`
        return html
    },'<ul class="list">') + '</ul>'
}

export default KeywordView