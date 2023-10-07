const navbarIcon = document.querySelector(".short-navbar");
const fullNavbar = document.querySelector(".full-navbar");
const navbarCloseIcon = document.querySelector(".close-navbar");

function showNavbar() {
    fullNavbar.style.display="flex";
    navbarIcon.style.display="none";
    navbarCloseIcon.style.display="flex";
}

function closeNavbar() {
    fullNavbar.style.display="none";
    navbarIcon.style.display="flex";
    navbarCloseIcon.style.display="none";
}