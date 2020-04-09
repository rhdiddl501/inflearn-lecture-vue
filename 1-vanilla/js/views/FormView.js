import View from './View.js'

const tag = "[FormView]"

const FormView = Object.create(View)

FormView.setup = function(el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyUp(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyUp = function (e) {
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if(e.keyCode === enter) this.emit('@submit', {input: this.inputEl.value})
    if(!this.inputEl.value.length) this.emit('@reset')
}

FormView.onClickReset = function() {
    this.emit('@reset')
    this.showResetBtn(false)
}

FormView.setInputValue = function(keyword='') {
    this.inputEl.value = keyword
}

export default FormView