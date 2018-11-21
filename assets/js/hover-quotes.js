var photo = document.getElementById('photo');
var topQuotes = document.getElementById('top-quotes');
var bottomQuotes = document.getElementById('bottom-quotes');
var blog = document.getElementById('blog');
var software = document.getElementById('software');
var design = document.getElementById('design');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var supporters = document.getElementById('supporters');

blog.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -100px';
  bottomQuotes.style.backgroundPosition = '0 -100px';
  photo.style.backgroundPosition = '-620px 0';
});

blog.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});

software.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -250px';
  bottomQuotes.style.backgroundPosition = '0 -250px';
  photo.style.backgroundPosition = '-1550px 0';
});

software.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});

design.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -50px';
  bottomQuotes.style.backgroundPosition = '0 -150px';
  photo.style.backgroundPosition = '-310px 0';
});

design.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});

about.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -150px';
  bottomQuotes.style.backgroundPosition = '0 -50px';
  photo.style.backgroundPosition = '-1240px 0';
});

about.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});

contact.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -200px';
  bottomQuotes.style.backgroundPosition = '0 0';
  photo.style.backgroundPosition = '-930px 0';
});

contact.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});

supporters.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -200px';
  bottomQuotes.style.backgroundPosition = '0 0';
  photo.style.backgroundPosition = '-930px 0';
});

supporters.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
  photo.style.backgroundPosition = '0 0';
});
