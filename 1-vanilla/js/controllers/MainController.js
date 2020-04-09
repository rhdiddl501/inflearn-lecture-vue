import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
const tag = "[MainController]"

export default {
    init() {
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset',e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))

        TabView.setup(document.querySelector('#tabs'))
        .on('@tabClicked', e => this.tabChange(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
        .on('@click', e => this.onClickKeyword(e.detail.keyword))
        this.selectedTab = '추천 검색어'
        
        this.renderView()
        
    },

    onClickKeyword(keyword) {
        this.search(keyword)
        FormView.setInputValue(keyword)
    },

    tabChange(tabName){
        console.log(tag,'tabChange()',tabName)
    },

    renderView() {
        if(this.selectedTab === '추천 검색어'){
            KeywordModel.list().then(data => {
                KeywordView.render(data)
            })
        }else {

        }

        TabView.setActiveTab(this.selectedTab)
        ResultView.hide()
    },

    onSubmit(input) {
        console.log(tag,'onSubmit()',input)
        this.search(input)
    },

    search(input) {
        SearchModel.list(input).then(data => {
            this.onSearchResult(data)
        })
        TabView.hide()
        KeywordView.hide()
        ResultView.show()
    },

    onResetForm() {
        console.log(tag,'onResetForm()')
        ResultView.hide();
        TabView.show()
    },
    onSearchResult(data) {
        ResultView.render(data)
    }

}