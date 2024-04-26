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
