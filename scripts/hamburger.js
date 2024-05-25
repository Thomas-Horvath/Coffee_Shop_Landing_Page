const hamburgerBtn = document.querySelector('.js-hamburger-btn');
const nav = document.querySelector(".js-nav");
const menuItems = document.querySelectorAll('.js-menu-item');




export function hamburgerMenu() {

    hamburgerBtn.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        hamburgerBtn.classList.toggle("active-hamburger");
    });

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            nav.classList.remove("nav-active");
            hamburgerBtn.classList.remove("active-hamburger");
        })
    });
};
