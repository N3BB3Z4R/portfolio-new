//Get the button:
// const goUp = document.querySelector(".goUp");
const headerNav = document.querySelector(".header");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ||
    window.pageYOffset > 500 || document.documentElement.pageYOffset > 500) {
    headerNav.style.opacity = "1";
    headerNav.style.transform = "translateY(0%)";
    headerNav.style.transition = "all 0.5s ease-in-out";
  } else {
    headerNav.style.opacity = "0";
    headerNav.style.transform = "translateY(-100%)";
    headerNav.style.transition = "all 0.5s ease-in-out";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}