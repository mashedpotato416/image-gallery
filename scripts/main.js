function ChangeDisplayImage(e) {
  var imagePath = e.target.src
  displayedImage.src = imagePath
}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Looping through images
const numberOfImages = 5
var count = 1 
while( count <= numberOfImages ) {
  
  var imgName = 'pic' + count
  var filePath = 'images/' + imgName + '.jpg'

  const newImage = document.createElement('img');
  newImage.setAttribute('src', filePath);
  newImage.setAttribute('class', imgName);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', ChangeDisplayImage)

  count++
}
  

// Wiring up the Darken/Lighten button
