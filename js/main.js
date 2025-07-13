// Start Header
const othersLinks = document.querySelector("header nav > ul > li:last-child a");
const menu = document.querySelector(".menu");
othersLinks.addEventListener("click", () => {
  menu.classList.toggle("toggle-show");
});
window.onclick = function (e) {
  if (e.target !== othersLinks && menu.classList.contains("toggle-show")) {
    menu.classList.remove("toggle-show");
  }
};
// End Header
