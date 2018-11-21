var close = document.querySelectorAll('.close');
var modalSupporters = document.getElementById('modal-supporters');
var modalContact = document.getElementById('modal-contact');
var modalAbout = document.getElementById('modal-about');
var modalSoftware = document.getElementById('modal-software');
var modalDesign = document.getElementById('modal-design');
var skills = document.querySelectorAll('.skill-tag');

function openModalSupportersWindow() {
  var supportersURL = [
    "https://i.imgur.com/ppGFqSB.png"
  ]
  
  loadImages(supportersURL, '.supporters-img')
  modalSupporters.style.visibility = 'visible';
  modalSupporters.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalContactWindow() {
  modalContact.style.visibility = 'visible';
  modalContact.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalSoftwareWindow() {
  var softwareURL = [
    "assets/img/99notifications-icon.png",
    "assets/img/hyper-init.png",
    "assets/img/netflix-list-exporter-icon.png",
    "assets/img/what-type-is-icon.png",
    "assets/img/recipes-icon.png",
    "assets/img/uni-icon.png",
    "assets/img/orb-icon.png",
    "assets/img/pepper-icon.png",
    "assets/img/youtplayer-icon.png"
  ]
  
  loadImages(softwareURL, '.software-img')
  modalSoftware.style.visibility = 'visible';
  modalSoftware.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalDesignWindow() {
  var imageURL = [
    "assets/img/design/couple-romance-min.jpg",
    "assets/img/design/woman-love-min.jpg",
    "assets/img/design/fantasy-min.jpg",
    "assets/img/design/mermaid-min.jpg",
    "assets/img/design/dark-man-min.jpg",
    "assets/img/design/wolf-min.jpg",
    "assets/img/design/girl-beach-min.jpg",
    "assets/img/design/lotus-min.jpg",
    "assets/img/design/woman-cross-min.jpg",
    "assets/img/design/suicide-min.jpg",
    "assets/img/design/lucifer-min.jpg",
    "assets/img/design/good-evil-boy-min.jpg",
    "assets/img/design/area-militar-min.jpg",
    "assets/img/design/knight-min.jpg",
    "assets/img/design/gothic-woman-min.jpg",
    "assets/img/design/dark-people-min.jpg",
    "assets/img/design/as-fases-da-lua-min.jpg",
    "assets/img/design/city-in-the-blue-mountains-min.jpg",
    "assets/img/design/power-and-destruction-min.jpg",
    "assets/img/design/my-altered-self-min.jpg",
    "assets/img/design/interstice-min.jpg",
    "assets/img/design/odalisca-min.jpg",
    "assets/img/design/roberbills-min.jpg",
    "assets/img/design/medieval-warrior-min.jpg"
  ]  
  
  loadImages(imageURL, '.design-img')
  modalDesign.style.visibility = 'visible';
  modalDesign.style.animation = 'quote-start-transition 0.5s ease';
}

function openModalAboutWindow() {
  modalAbout.style.visibility = 'visible';
  modalAbout.style.animation = 'quote-start-transition 0.5s ease';
  animateSkills();
}

supporters.addEventListener('click', function() {
  openModalSupportersWindow();
})

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
