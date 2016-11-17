var close = document.querySelectorAll('.close');
var modalContact = document.getElementById('modal-contact');
var modalAbout = document.getElementById('modal-about');
var modalProjects = document.getElementById('modal-projects');
var skills = document.querySelectorAll('.skill-tag');

function openModalContactWindow() {
  modalContact.style.visibility = 'visible';
  modalContact.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalProjectsWindow() {
  modalProjects.style.visibility = 'visible';
  modalProjects.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalAboutWindow() {
  modalAbout.style.visibility = 'visible';
  modalAbout.style.animation = 'quote-start-transition 0.5s ease';
  animateSkills();
}

contact.addEventListener('click', function() {
  openModalContactWindow();
});

projects.addEventListener('click', function() {
  openModalProjectsWindow();
});

about.addEventListener('click', function() {
  openModalAboutWindow();
});

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(event) {
      resetSkillsAnimation();
      _window = event.target.offsetParent;
      _window.style.animation = 'quote-finish-transition 0.8s ease';
      _window.style.visibility = 'hidden';
    });
}
