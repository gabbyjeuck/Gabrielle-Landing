// carousel scrolls at 2 second speed, default 5 (5000).
$('.carousel').carousel({
  interval: 2000
});
// fade in site content
$('.fader').hide().fadeIn(1000, "linear");

//load entire document first
$(document).ready(function() {
  // Adds smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevents default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Scroll speed of 750, 800 is default
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function() {

        // Adds the hash to the URL when done scrolling
        window.location.hash = hash;
      }); // end animate
    } // End if
  }); // end click
}); // end doc ready


// back to top nav
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}