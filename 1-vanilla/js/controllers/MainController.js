import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'

const tag = "[MainController]"

export default {
    init() {
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset',e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
        
    },
    onSubmit(input) {
        console.log(tag,'onSubmit()',input)
        this.search(input)
    },

    search(input) {
        SearchModel.list(input).then(data => {
            this.onSearchResult(data)
        })
    },

    onResetForm() {
        console.log(tag,'onResetForm()')
        ResultView.hide();
    },
    onSearchResult(data) {
        ResultView.render(data)
    }

}