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
  const scrollYSize = document.documentElement.scrollTop;
  const height = documentYSize - viewportYSize;
  document.querySelector(".width-on-scroll").style.width =
    `${(scrollYSize / height) * 100}%`;
});

const ourSkillSection = document.querySelector(".our-skills");
let isOurSkillsExecuted = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > ourSkillSection.offsetTop - 300) {
    if (!isOurSkillsExecuted) {
      document.querySelectorAll(".progress-holder span").forEach((span) => {
        span.style.width = `${span.dataset.go}%`;
      });
      isExecuted = true;
    }
  }
});

const statsSection = document.querySelector(".stats");
let isStatsExcuted = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!isStatsExcuted) {
      document.querySelectorAll(".number").forEach((num) => {
        const intervalHandler = setInterval(() => {
          +num.textContent++;
          if (+num.textContent === +num.dataset.count) {
            window.clearInterval(intervalHandler);
          }
        }, 500 / num.dataset.count);
      });
      isStatsExcuted = true;
    }
  }
});

// videos-list
let videosList = document.querySelectorAll(".videos-list a");
let videosPrev = document.querySelectorAll(".videos-preview img");
videosList.forEach((videoTarget) => {
  videoTarget.addEventListener("click", (e) => {
    e.preventDefault();
    videosList.forEach((videoLink) => {
      videoLink.classList.remove("active");
    });
    videosPrev.forEach((img) => {
      img.classList.remove("active");
    });
    videoTarget.classList.add("active");
    document
      .querySelector(`#${videoTarget.dataset.target}`)
      .classList.add("active");
  });
});
