// (function () {
//   window.addEventListener('scroll', function (event) {
//     let depth, i, layer, layers, len, movement, topDistance, translate3d;
//     topDistance = window.scroll.pageYOffset;
//     layers = document.querySelectorAll('[data-type="parallax"]');
//     for (i = 0, len = layers.length; i < len; i++) {
//       layer = layers[i];
//       depth = layer.getAttribute('data-depth');
//       movement = -(topDistance * depth);
//       translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//       layer.style['-webkit-transform'] = translate3d;
//       layer.style['-moz-transform'] = translate3d;
//       layer.style['-ms-transform'] = translate3d;
//       layer.style['-o-transform'] = translate3d;
//       layer.style.transform = translate3d;
//       console.log(layers, depth)
//     }
//   });

// }).call(this);
// make a function to scroll parallax effect slow down on layers with data-depth attribute

const makeScrollParallax = () => {
  window.addEventListener('scroll', () => {
    const topDistance = window.scrollY;
    const layers = document.querySelectorAll('[data-type="parallax"]');
    layers.forEach(layer => {
      const depth = layer.getAttribute('data-depth');
      const movement = -(topDistance * depth);
      const translate3d = `translate3d(0, ${movement}px, 0)`;
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    });
  });
}