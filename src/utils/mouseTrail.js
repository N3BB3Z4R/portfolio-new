// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
let dots = [],
  mouse = {
    x: 0,
    y: 0
  };

// The Dot object used to scaffold the dots
class Dot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      let n = document.createElement("div");
      n.className = "mouse-trail";
      document.body.appendChild(n);
      return n;
    }());
  }
  // The Dot.prototype.draw() method sets the position of 
  // the object's <div> node
  draw() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  }
}

// Creates the Dot objects, populates the dots array
for (const i = 0; i < 12; i++) {
  const d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  let x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function (dot, index, dots) {
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
