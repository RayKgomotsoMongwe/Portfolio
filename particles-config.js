particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas", // detects mouse on the particle canvas
    events: {
      onhover: {
        enable: true,    // enable hover interaction
        mode: "repulse"  // particles repel away from cursor on hover
      },
      onclick: {
        enable: true,    // enable click interaction
        mode: "push"     // adds more particles on click
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,   // how far particles move from cursor
        duration: 0.4
      },
      push: {
        quantity: 4      // number of particles added on click
      }
    }
  },
  retina_detect: true
});
