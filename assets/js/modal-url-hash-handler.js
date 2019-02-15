function clearModal() {
  var modalList = document.querySelectorAll('.modal');

  for (i = 0; i < modalList.length; i++) {
      modalList[i].style.visibility = 'hidden';
  }
}

function openModal() {
  var hash = window.location.hash;

  switch (hash) {
    case '#literature': openModalLiteratureWindow(); break;
    case '#supporters': openModalSupportersWindow(); break;
    case '#contact': openModalContactWindow(); break;
    case '#about': openModalAboutWindow(); break;
    case '#software': openModalSoftwareWindow(); break;
    case '#design': openModalDesignWindow(); break;
  }
}

window.addEventListener("hashchange", function() {
  clearModal();
  openModal();
}, false);

window.addEventListener("keydown", function(keyPressed) {
  if (keyPressed.keyCode == 27) {
      window.location.hash = "#";
      clearModal();
  }
}, false);

openModal();
