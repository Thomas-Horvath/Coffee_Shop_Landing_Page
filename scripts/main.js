const hamburgerBtn = document.querySelector('.js-hamburger-btn');
const nav = document.querySelector(".js-nav");
const menuItems = document.querySelectorAll('.js-menu-item');

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle("nav-active");
    hamburgerBtn.classList.toggle("active-hamburger");
});

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    })
});





// const header = document.querySelector(".header");
// let styles = getComputedStyle(header);
// console.log(styles.fontFamily);


const input = document.querySelector(".search");
let p = document.querySelector(".banner p");
input.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.elements.search.value)
    let text = e.target.elements.search.value;
    console.log(text.length)
    if (text.length > 3) {

        p.innerText = text;
    }


});
