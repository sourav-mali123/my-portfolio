$(document).ready(function () {

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 700,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": ""
        }
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": false,
        "distance": 40,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 8
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    },
    "retina_detect": true
  });

});