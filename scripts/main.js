function ChangeDisplayImage(e) {
  var imagePath = e.target.src
  displayedImage.src = imagePath
}

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

const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

// Looping through images
const numberOfImages = 5
var count = 1 
while( count <= numberOfImages ) {
  
  var imgName = 'pic' + count
  var filePath = 'images/' + imgName + '.jpg'

  const newImage = document.createElement('img')
  newImage.setAttribute('src', filePath)
  newImage.setAttribute('class', imgName)
  thumbBar.appendChild(newImage)

  newImage.addEventListener('click', ChangeDisplayImage)

  count++
}

// Wiring up the Darken/Lighten button

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

btn.addEventListener('click', ChangeButton )
