import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

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
        
        HistoryView.setup(document.querySelector('#search-history'))
        .on('@click',e => this.onClickHistory(e.detail.keyword))
        .on('@clickRemove', e => this.onRemoveHistory(e.detail.keyword))
        
        this.selectedTab = '최근 검색어'
        this.renderView()
    },

    onClickKeyword(keyword) {
        this.search(keyword)
        FormView.setInputValue(keyword)
    },

    tabChange(tabName){
        console.log(tag,'tabChange()',tabName)
        this.selectedTab = tabName
    },

    renderView() {
        if(this.selectedTab === '추천 검색어'){
            KeywordModel.list().then(data => {
                KeywordView.render(data)
            })
        }else {
            HistoryModel.list().then(data => {
                HistoryView.render(data).bindRemove()
            })
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
        HistoryModel.add(input)
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
    },

    onClickHistory(keyword) {
        this.search(keyword)
    },

    onRemoveHistory(keyword) {
        HistoryModel.remove(keyword)
        this.renderView()
    }

}