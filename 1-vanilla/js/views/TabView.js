import View from './View.js'

const TabView = Object.create(View)

TabView.setup = function(el) {
    this.init(el)
    this.bindClick()
    return this
}

TabView.setActiveTab = function(tabName) {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        if(li.innerHTML === tabName) li.className='active'
        else li.className=''
    })
}

TabView.bindClick = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e=> this.onClick(li.innerHTML))
    })
}

TabView.onClick = function(tabName) {
    this.setActiveTab(tabName)
    this.emit('@tabClicked', {tabName})
}

export default TabView