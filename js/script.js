"use strict";
const menuButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const year = document.querySelector(".year");
// menu toggle button
menuButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
// copy right year dynamic
const currentDate = new Date();
year.textContent = currentDate.getFullYear();

// scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll other links
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
////////////////////////////////////////////////////////////////////////
//STICKY NAVIGATION
const heroSec = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSec);
