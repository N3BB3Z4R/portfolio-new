//Get the button:
const goUp = document.querySelector(".goUp");
const headerNav = document.querySelector(".header");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goUp.style.display = "block";
    goUp.style.height = "50px";
    goUp.style.width = "50px";
    headerNav.style.display = "block";
    headerNav.style.height = "50px";
  } else {
    goUp.style.display = "none";
    headerNav.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}