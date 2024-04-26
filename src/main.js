history.replaceState({}, document.title, window.location.pathname);

const upScrollBtn = document.getElementById("upScroll");

window.addEventListener("scroll", () => {
  window.scrollY > 5
    ? (upScrollBtn.style.display = "flex")
    : (upScrollBtn.style.display = "none");
});

upScrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Splider

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: '10%',
    throttle: 300,
    breakpoints: {
      1440: {
        perPage: 1,
        padding: '30%'
      }
    }
  }).mount();
});
