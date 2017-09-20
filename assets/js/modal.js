var close = document.querySelectorAll('.close');
var modalContact = document.getElementById('modal-contact');
var modalAbout = document.getElementById('modal-about');
var modalSoftware = document.getElementById('modal-software');
var modalDesign = document.getElementById('modal-design');
var skills = document.querySelectorAll('.skill-tag');

function openModalContactWindow() {
  modalContact.style.visibility = 'visible';
  modalContact.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalSoftwareWindow() {
  modalSoftware.style.visibility = 'visible';
  modalSoftware.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalDesignWindow() {
  modalDesign.style.visibility = 'visible';
  modalDesign.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalAboutWindow() {
  modalAbout.style.visibility = 'visible';
  modalAbout.style.animation = 'quote-start-transition 0.5s ease';
  animateSkills();
}

contact.addEventListener('click', function() {
  openModalContactWindow();
});

software.addEventListener('click', function() {
  openModalSoftwareWindow();
});

design.addEventListener('click', function() {
  openModalDesignWindow();
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
