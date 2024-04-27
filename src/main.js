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

consultation.addEventListener("change", () => {
  consultationVal = consultation.checked;
});

rate.addEventListener("change", () => {
  rateVal = rate.checked;
});

access.addEventListener("change", () => {
  accessVal = access.checked;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = {
    name: userName.value,
    site: site.value,
    description: taskDescription.value,
    consultation: consultationVal,
    rate: rateVal,
    access: accessVal,
  };
  document.getElementById("modal-1").checked = true;
  form.reset();
  console.log(result);
});
