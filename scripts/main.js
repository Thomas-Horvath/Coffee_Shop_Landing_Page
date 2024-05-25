import { hamburgerMenu } from './hamburger.js';



//  selected elements
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies-btn');



// hamburger menu function
hamburgerMenu();





// const input = document.querySelector(".search");
// let p = document.querySelector(".banner p");
// input.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.search.value)
//     let text = e.target.elements.search.value;
//     console.log(text.length)
//     if (text.length > 3) {

//         p.innerText = text;
//     }


// });



// cookies 
document.addEventListener("DOMContentLoaded", () => {
//az oldal betöltődésekor -> lefut a cookiesPopup függvény

    function cookiesPopup() {
        const acceptedCookies = sessionStorage.getItem("acceptedCookies");
        // elmentjük a sessionStorege acceptCookies kulcshoz tartozó értéket. (nincs értéke még itt)

        if (!acceptedCookies) { // ha az érték nem true  akkor futnak a függvények
            setTimeout(() => {
                cookies.classList.add("cookie-active");
            }, 3000);

            cookiesBtn.addEventListener("click", () => {
                cookies.classList.remove("cookie-active");
                sessionStorage.setItem("acceptedCookies", "true"); // itt true-ra állítjuk az értéket.
            });
        };
    };

    cookiesPopup();
});


