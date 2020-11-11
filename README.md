# image-gallery
MDN Assesment

-----------

Image Gallery

-----------

Project Brief:<br>

You have been provided with some HTML, CSS and image assets and a few lines of JavaScript code; you need to write the necessary JavaScript to turn this into a working program. <br>

The most interesting parts of the example's CSS file:<br>

-It absolutely positions the three elements inside the full-img div — the img in which the full-sized image is displayed, an empty div that is sized to be the same size as the img and put right over the top of it (this is used to apply a darkening effect to the image via a semi-transparent background color), and a button that is used to control the darkening effect.<br>
-It sets the width of any images inside the thumb-bar div (so-called "thumbnail" images) to 20%, and floats them to the left so they sit next to one another on a line.<br><br>
Your JavaScript needs to:<br>

-Loop through all the images, and for each one insert an img element inside the thumb-bar div that embeds that image in the page.<br>
-Attach an onclick handler to each img inside the thumb-bar div so that when they are clicked, the corresponding image is displayed in the displayed-img img element.<br>
-Attach an onclick handler to the button so that when it is clicked, a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.<br>