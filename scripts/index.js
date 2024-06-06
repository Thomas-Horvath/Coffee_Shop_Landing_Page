import { hamburgerMenu } from './hamburger.js';
import { fetchProduct } from './fetch.js';
import { cookiesPopup } from './cookies.js';
import { subscribeValidation } from './subscribeValidation.js';

//  selected elements

const favoriteContainer = document.querySelector('.favorite-cards');








document.addEventListener("DOMContentLoaded", () => {
    cookiesPopup();
});

subscribeValidation();




// favorite cards
function renderMainProductsCards(productsToRender, container) {
    const productCard = productsToRender.map((product, index) => `
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
};



hamburgerMenu();
renderfavoriteCards();



// console.log(1)
// fetch('http://dummyjson.com/users')
// .then(res => res.json())
// .then((data) => {console.log(data), console.log(2)});

// console.log(3)


// const response = await fetch('http://dummyjson.com/users');
// const data = await response.json();
// console.log(data);


// console.log(document.querySelector('.checkbox').checked);
// const subscribeForm = document.querySelector('.js-subscribe')
// const validationText = document.querySelector('.js-validation-text');
// const checkbox = document.querySelector('.js-checkbox')
// const emailInput = document.querySelector('.js-input-email');
// const nameInput = document.querySelector('.js-input-name');





// subscribeForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let isValid = true;
    
    

//     console.log(nameInput)
//     if (nameInput.value.trim() === '' ) {
//         validationText.classList.add('red-color');
//         validationText.innerHTML = ` ❌ A név megadása kötelező!`;
//         isValid = false;
//         return;
//     };

//     let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(emailInput.value)) {
//         validationText.innerHTML = ` ❌ Érvényes email címet kell megadni!`;
//         isValid = false;
//         return;
//     };


//     if (checkbox.checked && isValid === true) {
//         validationText.classList.remove('red-color');
//         validationText.innerHTML = `✅ Köszönjük a felíratkozást!`
//         setTimeout(() => {
//             subscribeForm.reset();
//             validationText.innerHTML = "* A mezők kitöltése kötelező!";

//         }, 2000)
//     } else {
//         validationText.innerHTML = ` ❌ Az adatakezelési tájékoztatót el kell fogadni!`
//     }



// })