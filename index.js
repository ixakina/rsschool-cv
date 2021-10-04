const btnClose = document.querySelector(".menu-btn-close");
const btnOpen = document.querySelector(".menu-btn-open");
const menu = document.querySelector(".header-aside");

function openMenu() {
  btnClose.style.visibility = "hidden";
  menu.style.left = "0";
  if ((menu.style.left = "0")) {
    document.addEventListener("scroll", closeMenu);

    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav__link")) {
        closeMenu();
      }
    });
  }
}

function closeMenu() {
  btnClose.style.visibility = "visible";
  menu.style.left = "-100%";
}

btnClose.addEventListener("click", openMenu);
btnOpen.addEventListener("click", closeMenu);
