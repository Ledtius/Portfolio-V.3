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
