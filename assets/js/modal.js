var close = document.querySelectorAll('.close');
var modal = document.querySelector('.modal');
var modalAbout = document.getElementById('modal-about');
var modalProjects = document.getElementById('modal-projects');
var skills = document.querySelectorAll('.skill-tag');

contact.addEventListener('click', function() {
  modal.style.visibility = 'visible';
  modal.style.animation = 'quote-start-transition 0.5s ease';
});

projects.addEventListener('click', function() {
  modalProjects.style.visibility = 'visible';
  modalProjects.style.animation = 'quote-start-transition 0.5s ease';
});

about.addEventListener('click', function() {
  modalAbout.style.visibility = 'visible';
  modalAbout.style.animation = 'quote-start-transition 0.5s ease';
  animateSkills();
});

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(event) {
      resetSkillsAnimation();
      _window = event.target.offsetParent;
      _window.style.animation = 'quote-finish-transition 0.8s ease';
      _window.style.visibility = 'hidden';
    });
}
