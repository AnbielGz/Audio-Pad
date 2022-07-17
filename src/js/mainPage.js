

let btns = document.getElementsByTagName('button')

// Recorre el array de botones y le añade un evento click
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    if (btns[i].classList.contains('pad-item-pressed')) {
        btns[i].classList.remove('pad-item-pressed')
    } else {
        btns[i].classList.add('pad-item-pressed')
    }
  })
}
