
document.body.addEventListener('click', () => {
  if (ContextMenu.menuIsOpen) {
    ContextMenu.closeMenu()
  }
})


let btns = document.getElementsByTagName('button')

// Recorre el array de botones y le añade un evento click
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (e) => {
    if (btns[i].classList.contains('pad-item-pressed')) {
        btns[i].classList.remove('pad-item-pressed')
    } else {
        btns[i].classList.add('pad-item-pressed')
    }
  })

  btns[i].addEventListener('mousedown', (e) => { 
    e.preventDefault()

    if (e.button === 2) {
      ContextMenu.showMenu(e, { items: [
      { text: 'Copiar', action: () => { console.log('Copiar') } },
      { text: 'Pegar', action: () => { console.log('Pegar') } },
      { text: 'Cortar', action: () => { console.log('Cortar') } },
      { text: 'Deshacer', action: () => { console.log('Deshacer') } },
    ]})
    }
    
  })
}
