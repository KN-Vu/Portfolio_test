particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#42294d" },
      shape: { type: "circle" },
      opacity: { value: 1, random: true },
      size: { value: 2, random: true },
      line_linked: {
        enable: true,
        distance: 50,
        color: "#5c2075",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 15,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
  });