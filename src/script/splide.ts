import Splide from "@splidejs/splide";

import "../styles/splide.css";

export const splide = new Splide(".splide", {
  arrows: false,
  pagination: false,
  type: "fade",
  pauseOnFocus: false,
  pauseOnHover: false,
  rewind: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
}).mount();
