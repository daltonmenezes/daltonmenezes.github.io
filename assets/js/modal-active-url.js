function clearModal() {
  var modalList = document.querySelectorAll('.modal');
  for (i = 0; i < modalList.length; i++) {
      modalList[i].style.animation = 'quote-finish-transition 0.8s ease';
      modalList[i].style.visibility = 'hidden';
  }  
}

function openModal() {
  var hash = window.location.hash;
  switch (hash) {
    case '#contact': openModalContactWindow(); break;
    case '#about': openModalAboutWindow(); break;
    case '#software': openModalSoftwareWindow(); break;
    case '#design': openModalDesignWindow(); break;
  }
}

openModal();

window.addEventListener("hashchange", function() {
  clearModal();
  openModal();
}, false);

