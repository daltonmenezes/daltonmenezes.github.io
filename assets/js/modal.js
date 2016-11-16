var close = document.querySelectorAll('.close');
var modal = document.querySelector('.modal');
var modalAbout = document.getElementById('modal-about');

contact.addEventListener('click', function() {
  modal.style.visibility = 'visible';
  modal.style.animation = 'quote-start-transition 0.5s ease';
});

about.addEventListener('click', function() {
  modalAbout.style.visibility = 'visible';
  modalAbout.style.animation = 'quote-start-transition 0.5s ease';
});

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(event) {
      _window = event.target.offsetParent;
      _window.style.animation = 'quote-finish-transition 0.8s ease';
      _window.style.visibility = 'hidden';
    });
}
