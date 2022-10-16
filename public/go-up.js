//Get the button:
const headerNav = document.querySelector(".header");
const sun = document.querySelector(".sun");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
const width = window.innerWidth;

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ||
    window.pageYOffset > 80 || document.documentElement.pageYOffset > 80) {
    sun.style.opacity = "0";
    sun.style.transform = "translateY(0rem) translateX(2rem)";
    sun.style.transition = "all 0.5s ease-in-out";
  } else {
    sun.style.opacity = "1";
    sun.style.transform = "translateY(-16rem) translateX(-4rem)";
    sun.style.transition = "all 3s cubic-bezier(0.075, 0.82, 0.165, 1)";
  }
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ||
    window.pageYOffset > 500 || document.documentElement.pageYOffset > 500) {
    headerNav.style.opacity = "1";
    headerNav.style.transform = "translateY(0%)";
    headerNav.style.transition = "all 0.5s ease-in-out";
  } else {
    headerNav.style.opacity = "0";
    headerNav.style.transform = "translateY(0rem)";
    headerNav.style.transition = "all 0.5s ease-in-out";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}