// Header Events
// Start Header
const allNavLinks = document.querySelectorAll(
  "header .container nav > ul > li > a",
);
const otherLink = document.querySelector(
  "header .container nav > ul > li:last-child a",
);
const menu = document.querySelector(".menu");
allNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    allNavLinks.forEach((link) => link.classList.remove("active-link"));
    e.currentTarget.classList.toggle("active-link");
  });
});
otherLink.addEventListener("click", () => {
  menu.classList.toggle("toggle-show");
});
window.onclick = function (e) {
  if (e.target !== otherLink && menu.classList.contains("toggle-show")) {
    menu.classList.remove("toggle-show");
  }
};

// Scroll Events
// Scroll To Top
let scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > document.documentElement.scrollHeight / 2) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Start width-on-scroll
window.addEventListener("scroll", () => {
  const documentYSize = document.documentElement.scrollHeight;
  const viewportYSize = document.documentElement.clientHeight;
  const scrollYSize = window.scrollY;
  const height = documentYSize - viewportYSize;
  document.querySelector(".width-on-scroll").style.width =
    `${(scrollYSize / height) * 100}%`;
});
