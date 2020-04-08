import View from './View.js'

const ResultView = Object.create(View)

ResultView.setup = function(el) {
    this.init(el)

}

ResultView.render = function (data = []) {
    this.el.innerHTML = data.length? this.getSearchResult(data) : 'No Data'
}

ResultView.getSearchResult = function (data) {
    debugger
}

export default ResultView