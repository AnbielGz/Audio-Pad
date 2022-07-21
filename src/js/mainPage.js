const menu = new ContextMenu(
  { items: [
    { label: 'Asignar archivo', action: () => { console.log('Abrir dialogo') } },
    { label: 'Volumen', action: () => { console.log('Ajustar Volumen') } },
    { separator: true },
    { label: 'Eliminar', action: () => { console.log('Eliminar') } },
  ]}
)

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
      
      menu.showMenu(e)
    }
      
  })
}
