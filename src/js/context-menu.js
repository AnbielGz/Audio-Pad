
class ContextMenu {
    
    constructor() {
        this.openCurrentMenu = this.openCurrentMenu
    }


    static showMenu(element, options) {
        this.closeMenu()

        var _menuContainer = document.createElement('div')
        var _menu = document.createElement('ul')


        _menuContainer.classList.add('context-menu')
        _menuContainer.style.top = element.pageY + 'px'
        _menuContainer.style.left = element.pageX + 'px'
        
        // Menu List
        _menu.classList.add('context-menu-list')
        
        options.items.forEach(item => { 
            var _menuItem = document.createElement('li')
            _menuItem.classList.add('context-menu-item')
            _menuItem.innerHTML = `<a href="#">${item.text}</a>`
            _menuItem.addEventListener('click', item.action)
            _menu.appendChild(_menuItem)
        })

        _menuContainer.appendChild(_menu)
        document.body.appendChild(_menuContainer)
        this.openCurrentMenu = true
    }

    static closeMenu() {
        let contextMenu = document.getElementsByClassName('context-menu')[0]
        if (contextMenu) { contextMenu.remove() }
        this.openCurrentMenu = false
    }

    static get menuIsOpen() {
        return this.openCurrentMenu;
    }
}