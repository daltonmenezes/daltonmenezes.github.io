const clearModal = () => {
  const modalList = document.querySelectorAll('.modal')

  Array
    .from(modalList)
    .map(modal => modal.style.visibility = 'hidden')
}

const openModal = () => {
  const hash = window.location.hash

  switch (hash) {
    case '#literature': openModalLiteratureWindow(); break;
    case '#supporters': openModalSupportersWindow(); break;
    case '#contact': openModalContactWindow(); break;
    case '#about': openModalAboutWindow(); break;
    case '#software': openModalSoftwareWindow(); break;
    case '#design': openModalDesignWindow(); break;
  }
}

window.addEventListener('hashchange', () => {
  clearModal()
  openModal()
}, false)

window.addEventListener('keydown', keyPressed => {
  if (keyPressed.keyCode == 27) {
      window.location.hash = '#'
      clearModal()
  }
}, false)

openModal()
