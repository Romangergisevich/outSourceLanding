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

const form = document.querySelector("form");
const userName = document.getElementById("userName");
const site = document.getElementById("siteAdres");
const consultation = document.getElementById("consultation");
const rate = document.getElementById("rate");
const access = document.getElementById("access");

let consultationVal = false;
let rateVal = false;
let accessVal = false;

consultation.addEventListener("change", (e) => {
  if (e.target.checked) {
    consultationVal = true;
  } else {
    consultationVal = false;
  }
});

rate.addEventListener("change", (e) => {
  if (e.target.checked) {
    rateVal = true;
  } else {
    rateVal = false;
  }
});

access.addEventListener("change", (e) => {
  if (e.target.checked) {
    accessVal = true;
  } else {
    accessVal = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = {};
  result.name = userName.value;
  result.site = site.value;
  result.description = taskDescription.value;
  result.consultation = consultationVal;
  result.rate = rateVal;
  result.access = accessVal;

  form.reset();
  console.log(result);
});
