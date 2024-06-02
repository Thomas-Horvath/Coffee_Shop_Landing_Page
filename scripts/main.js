import { hamburgerMenu } from './hamburger.js';
import { fetchProduct } from './fetch.js';

// hamburger menu function
hamburgerMenu();


//  selected elements
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies-btn');
const favoriteContainer = document.querySelector('.favorite-cards');








// management of cookies
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






// favorite cards
function renderMainProductsCards(productsToRender, container) {
    const productCard = productsToRender.map((product , index) => `
        <div class="favorite-card ${index === 1 ? 'big-card' : ''}">
            <img src="${product.imgUrl}" alt="${product.name}">
            <div class="content-wrapper">
                <h3>${product.name}</h3>
                <div class="rate-container">
                    <div class="rate-satrs">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p class="rate">${product.rate}</p>
                </div>
                <p class="price">Ár: ${product.price} Ft</p>
            </div>
        </div>  
        `).join("");
    container.innerHTML = productCard;
};


// render card
async function renderfavoriteCards() {

    const cards = await fetchProduct();
    const threeCards = cards.slice(0, 3);
    renderMainProductsCards(threeCards, favoriteContainer);
}
renderfavoriteCards();