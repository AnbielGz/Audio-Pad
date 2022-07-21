class ContextMenu {
    constructor(options) { 
        this.menuIsOpen = false
        this.cmWrapper = document.createElement('div')
        this.menuWrapper = document.createElement('ul')
        this.options = options
        this.create()
    }

    create() { 
        
        let menu = this.cmWrapper
        menu.classList.add('context-menu')
        
        this.menuWrapper.classList.add('context-menu-list')

        this.options.items.forEach(item => {

            if (item.separator) {
                let separator = document.createElement('li')
                separator.classList.add('context-menu-separator')
                this.menuWrapper.appendChild(separator)

            } else {
                let menuItem = document.createElement('li')
                menuItem.classList.add('context-menu-item')

                if (item.icon) { 
                    menuItem.appendChild(document.createElement('img').src(item.icon))
                }

                if (item.label.length > 0) { 
                    let menuLabel = document.createElement('span')
                    menuLabel.classList.add('context-menu-text')
                    menuLabel.innerHTML = item.label
                    menuItem.appendChild(menuLabel)
                }

                if (item.action && typeof item.action === 'function') { 
                    menuItem.addEventListener('click', () => {
                        item.action()
                        this.closeMenu()
                    })
                }
                this.menuWrapper.appendChild(menuItem)
            }
        })

        document.body.onclick = () => { 
            // comprueba si se clickeado fuera del menu
            if (this.menuIsOpen) { this.closeMenu() }
        }
        menu.appendChild(this.menuWrapper)
        document.body.appendChild(menu)
    }

    closeMenu() {
        this.menuIsOpen = false
        this.cmWrapper.classList.remove('context-menu-open')
    }

    showMenu(elem) {
        //this.closeMenu()
        this.menuIsOpen = true

        this.cmWrapper.classList.add('context-menu-open')
        this.cmWrapper.style.top = elem.clientY + 'px'
        this.cmWrapper.style.left = elem.clientX + 'px'
    }
}