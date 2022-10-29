// make a function to make appear each element with .load when scrolling down
function appearOnScroll() {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    // div.classList.add(' opacity-0 ');
    const divTop = div.getBoundingClientRect().top;
    const screenPosition = window.scrollY + window.innerHeight;
    if (divTop < screenPosition) {
      div.classList.add(' opacity-100 ');
    } else {
      div.classList.remove(' opacity-100 ');
    }
    console.log(divTop, screenPosition);
  })
}