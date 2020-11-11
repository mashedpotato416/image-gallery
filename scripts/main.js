// Change the display image based on clicked thumbnail
function ChangeDisplayImage(e) {
  var imagePath = e.target.src
  displayedImage.src = imagePath
}

// Change text of the button and alpha(rgba) of the overlay
function ChangeButton(e) {
  var currentButton = e.target.textContent
  switch (currentButton) {
    case 'Darken':
      newContent = 'Lighten'
      newAlpha = 0.5
      break;
    case 'Lighten':
      newContent = 'Darken'
      newAlpha = 0.
      break;
    default:
      newContent = "Error"
      newAlpha = 1.0
  }
  e.target.textContent = newContent
  overlay.style.backgroundColor = 'rgba(0,0,0,' + newAlpha + ')'
}

// Loop through images in directory

const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')
const numberOfImages = 5
var count = 1 // Initialize
while( count <= numberOfImages ) {
  
  // Create containers for image name and file path
  var imgName = 'pic' + count
  var filePath = 'images/' + imgName + '.jpg'

  // Create html img element
  const newImage = document.createElement('img')
  newImage.setAttribute('src', filePath)
  newImage.setAttribute('class', imgName)
  thumbBar.appendChild(newImage)

  // Event listener for thumbnails
  newImage.addEventListener('click', ChangeDisplayImage)

  count++ // Final Expression
}

// Darken/Lighten button

const btn = document.querySelector('button') 
const overlay = document.querySelector('.overlay')

// Event listener for button
btn.addEventListener('click', ChangeButton )
