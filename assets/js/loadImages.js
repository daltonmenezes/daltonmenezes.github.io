loadImages = function(imageURL, className) {
  imageURL.map((url, index) => {
    document.querySelectorAll(className)[index].src = url
  })
}