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
// End Header
