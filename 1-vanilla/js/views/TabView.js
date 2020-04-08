import View from './View.js'

const TabView = Object.create(View)

TabView.setup = function(el) {
    this.init(el)

}

TabView.setActiveTab = function(tabName) {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        if(li.innerHTML === tabName) li.className='active'
        else li.className=''
    })
}

export default TabView