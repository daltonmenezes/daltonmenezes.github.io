var close = document.querySelector('.close');
var modal = document.querySelector('.modal');

contact.addEventListener('click', function() {
  modal.style.visibility = 'visible';
  modal.style.animation = 'quote-start-transition 0.5s ease';
});

close.addEventListener('click', function() {
  modal.style.animation = 'quote-finish-transition 0.8s ease';
  modal.style.visibility = 'hidden';
});
