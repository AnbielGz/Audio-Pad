const menu = new ContextMenu(
  { items: [
    { label: 'Asignar archivo', icon: 'fa-file', action: () => { console.log('Abrir dialogo') } },
    { label: 'Volumen', icon: 'fa-music', action: () => { console.log('Ajustar Volumen') } },
    { separator: true },
    { label: 'Eliminar', icon: 'fa-trash', action: () => { console.log('Eliminar') } },
  ]}
)


// Obtenemos los divs con la clase 'pad-item'
const padItems = document.querySelectorAll('.pad-item')

// Iteramos sobre los divs
padItems.forEach(padItem => { 

  padItem.addEventListener('click', (e) => {
    if (padItem.classList.contains('pad-item--pressed')) {
      padItem.classList.remove('pad-item--pressed')
    } else { padItem.classList.add('pad-item--pressed') }
  })

  padItem.addEventListener('mousedown', (e) => {

    e.preventDefault()

    // Compruba que se ha presionado el boton izquierdo
    if (e.button === 2) {
      menu.showMenu(e)
    }
  })
})
