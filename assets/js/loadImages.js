const loadImages = (imageURL, className) => {
  imageURL.map((url, index) => {
    const image = document.querySelectorAll(className)[index]
    if (image) {
      image.src = url
    }
  })
}