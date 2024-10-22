import "../css/general.css";
import "../css/header.css";
import "../css/hero.css";
import "../css/job-exp.css";
import "../css/proyects.css";
import "../css/skills.css";
import "../css/about-me.css";
import "../css/footer.css";
import "../css/flooting-btns.css";
import "../image/favicon.ico";
import "../image/hero-bg.webp";
import "../image/image-job-exp.svg";
import "../image/photo-about-me.png";
import "../image/photo-hero.webp";
import "../image/proyect.webp";

/* Menu resposive */
const headerMenu = document.querySelector(".header__menu");
const openMenuBtton = document.querySelector(".header__open-menu-bttn");
const closeMenuBtton = document.querySelector(".header__close-menu-bttn");
const headerLinkItems = document.querySelectorAll(".header__link-item");

function toggleMenu() {
  headerMenu.classList.toggle("menu__opened");
}

openMenuBtton.addEventListener("click", toggleMenu);

closeMenuBtton.addEventListener("click", toggleMenu);

headerLinkItems.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

/* Letters color - Header */

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth) {
    const headerLinks = document.querySelectorAll("header a");
    const headerIcon = document.querySelector(".header__icon");
    const headerBtns = document.querySelector(".header__icon-menu-bttn ");
    const whiteSections = document.querySelectorAll(".proyects, .about-me");

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerLinks.forEach((link) => {
            link.style.color = "#124f88";
            link.style.setProperty("--line-color", "#124f88");
          });
          if (headerIcon) {
            headerIcon.style.fill = "#124f88";
          }
          if (headerBtns) {
            headerBtns.style.fill = "#124f88";
          }
        } else {
          headerLinks.forEach((link) => {
            link.style.color = "#f2f2f2";
            link.style.setProperty("--line-color", "#f2f2f2");
          });
          if (headerIcon) {
            headerIcon.style.fill = "#f2f2f2";
          }
          if (headerBtns) {
            headerBtns.style.fill = "#f2f2f2";
          }
        }
      });
    }, observerOptions);

    whiteSections.forEach((section) => {
      observer.observe(section);
    });
  }
});
