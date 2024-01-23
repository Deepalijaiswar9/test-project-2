const mobile_nav = document.querySelector(".menuBtn");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

nav_header.addEventListener("click", toggleNavbar);
