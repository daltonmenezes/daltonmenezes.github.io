var hash = window.location.hash;

switch (hash) {
  case '#contact': openModalContactWindow(); break;
  case '#about': openModalAboutWindow(); break;
  case '#software': openModalSoftwareWindow(); break;
  case '#design': openModalDesignWindow(); break;
}