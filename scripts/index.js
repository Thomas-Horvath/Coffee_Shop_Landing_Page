import { fetchProduct, cookiesPopup, hamburgerMenu, addEventListeners, createStars, subscribeValidation, pageUpVisibilityHandle } from './functions.js';
import '../css/base.css'
import '../css/header.css'
import '../css/banner.css'
import '../css/welcome.css'
import '../css/hero.css'
import '../css/favorites.css'
import '../css/events.css'
import '../css/testimonial.css'
import '../css/gallery.css'
import '../css/subscribe.css'
import '../css/footer.css'
import '../css/media-queries.css'

const favoriteContainer = document.querySelector('.favorite-cards');
const slidesContainer = document.querySelector(".slide-container");
const fetchUrl = 'https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/testimonials.json';





window.addEventListener('load', async function () {
    const loading = document.getElementById('loading');

    await new Promise(resolve => setTimeout(resolve, 300));

    if (loading) {
        loading.classList.add('loading-fade-out');
        setTimeout(() => {
            loading.classList.add('hidden');
            loading.classList.remove('loading-fade-out');
        }, 500);
        document.body.classList.remove('fade-out');
    };

    hamburgerMenu();
});


// kártyák mintájának létrehozása
function mainProductsCardsTemplate(product, index) {
    let starsHTML = createStars(product.rate)
    return `
        <div class="favorite-card ${index === 1 ? 'big-card' : ''}">
            <img src="${product.imgUrl}" alt="${product.name}">
            <div class="content-wrapper">
                <h3>${product.name}</h3>
                <div class="rate-container">
                    <div class="rate-satrs">
                         ${starsHTML}
                    </div>
                    <p class="rate">${product.rate}</p>
                </div>
                <p class="price">Ár: ${product.price} Ft</p>
            </div>
        </div>  
        `
};



// favorite cards create
function renderMainProductsCards(productsToRender, container) {
    const productCard = productsToRender.map((product, index) =>
        mainProductsCardsTemplate(product, index)).join("");
    container.innerHTML = productCard;
};


// render card
async function renderfavoriteCards() {
    const cards = await fetchProduct();
    const threeCards = cards.slice(0, 3);
    renderMainProductsCards(threeCards, favoriteContainer);
};






// testimonal section 

//  fetch testimonals
async function fetchTestimonials() {
    try {
        const response = await fetch(fetchUrl);
        const testimonials = await response.json();
        renderSlides(testimonials);
        startSlideShow(testimonials);

    } catch (err) {
        console.error(err);
    };
};



// create testimonal cards
function renderSlides(testimonials) {
    slidesContainer.innerHTML = testimonials.map((testimonial, index) => `
        <div class="mySlides ${index === 0 ? 'active' : ''};">
            <img src="${testimonial.pictureUrl}" alt="vendéh profilkép" class="customerPic">
            <div class="text">
                <i class="fa-solid fa-quote-right"></i>
                <h3 class="customerName">${testimonial.name} <strong>(${testimonial.age})</strong></h3>
                <p>${testimonial.text}</p>
            </div>
        </div>
    `).join('');
};

// vélemény kártyák váltogatása 
function startSlideShow(testimonials) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    slides[currentIndex].classList.add('active');
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        slides[currentIndex].classList.add('active');
    }, 4000);
};








pageUpVisibilityHandle();
fetchTestimonials()
cookiesPopup();
subscribeValidation();

renderfavoriteCards();
addEventListeners();









