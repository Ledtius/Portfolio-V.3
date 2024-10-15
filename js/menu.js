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
  if (window.innerWidth > 1024) {
    // Solo ejecuta en pantallas grandes
    const headerLinks = document.querySelectorAll("header a"); // Selecciona los links del header
    const headerIcon = document.querySelector(".header__icon"); // Selecciona el ícono del header
    const whiteSections = document.querySelectorAll(".proyects, .about-me"); // IDs de las secciones con fondo blanco

    const observerOptions = {
      root: null,
      threshold: 0.5, // Cambia el color cuando el 50% de la sección sea visible
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si la sección blanca está visible
          headerLinks.forEach((link) => {
            link.style.color = "#124f88"; // Cambia el color de los enlaces a azul oscuro
            link.style.setProperty("--line-color", "#124f88"); // Cambia la línea del ::before a azul oscuro
          });
          if (headerIcon) {
            headerIcon.style.fill = "#124f88"; // Cambia el color del ícono a azul oscuro
          }
        } else {
          // Si no está visible (en otras secciones)
          headerLinks.forEach((link) => {
            link.style.color = "#f2f2f2"; // Cambia el color de los enlaces a blanco
            link.style.setProperty("--line-color", "#f2f2f2"); // Cambia la línea del ::before a blanco
          });
          if (headerIcon) {
            headerIcon.style.fill = "#f2f2f2"; // Cambia el color del ícono a blanco
          }
        }
      });
    }, observerOptions);

    whiteSections.forEach((section) => {
      observer.observe(section); // Observa las secciones con fondo blanco
    });
  }
});
