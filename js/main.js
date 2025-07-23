// Header Events
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

// Scroll To Top
const scrollToTop = document.querySelector(".scroll-to-top");
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

const ourSkillSection = document.querySelector(".our-skills");
const statsSection = document.querySelector(".stats");
let isOurSkillsExecuted = false;
window.addEventListener("scroll", () => {
  if (!isOurSkillsExecuted) {
    if (window.scrollY > ourSkillSection.offsetTop - 300) {
      document.querySelectorAll(".progress-holder span").forEach((span) => {
        span.style.width = `${span.dataset.go}%`;
        isExecuted = true;
      });
    }
  }
});

let isStatsExcuted = false;
window.addEventListener("scroll", () => {
  if (!isStatsExcuted) {
    if (window.scrollY >= statsSection.offsetTop - 300) {
      document.querySelectorAll(".number").forEach((num) => {
        const interval = setInterval(() => {
          +num.innerHTML < num.dataset.count
            ? +num.innerHTML++
            : windw.clearInterval(interval);
        }, 1000 / num.dataset.count);
      });
      isStatsExcuted = true;
    }
  }
});
