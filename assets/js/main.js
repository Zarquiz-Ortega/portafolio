const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const bgHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

var typed = new Typed("#profession", {
    strings: ["Desarollador web", "Ingeniero en Tics"],
    typeSpeed: 100,
    loop: true,

});
