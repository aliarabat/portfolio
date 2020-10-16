let menuBtn = document.getElementById("menu");
let nav = document.querySelector("header nav");
let header = document.getElementsByTagName("header");
let scrollBtn = document.getElementById("scrolltotop");
let count = 0;

window.onload = () => {
  let fullname = document.getElementById("fullname");
  let unchangedValue = "Arabat Ali";
  setInterval(() => {
    if (unchangedValue.length === count) {
      count = 0;
    }
    fullname.innerHTML = unchangedValue.substr(0, ++count);
  }, 400);
};

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show", !nav.classList.contains("show"));
});

window.onmousewheel = (e) => {
  if (e.deltaY >= 0) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 0);
});
