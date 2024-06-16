import { fetchProduct } from "./fetch.js";
import { hamburgerMenu } from "./hamburger.js";
import { cookiesPopup } from './cookies.js';
import { addEventListeners } from './modal.js';


const noResultsMessage = document.querySelector('.no-results-message');





export function createStars(productRating) {
    let rating = Math.floor(productRating); // Megkapjuk a reating egész értékét.  Ennyi teljes csillagot biztos meg kell jeleníteni.
    let rest = Math.round((productRating - rating) * 10); // Megkapjuk a rating tizedees értékét. 
    console.log(productRating, rating, rest);

    let starsHTML = '';

    //half star =  <i class="fa-solid fa-star-half-stroke"></i>

    for (let i = 0; i < 5; i++) {
        if (rating > 0) {
            starsHTML += `<i class="fa-solid fa-star"></i>`
            rating--
        } else if (rest > 0) {
            if (rest < 3) { // ha kissebb mint három a tizeds akkor egy üres csillagit kap
                starsHTML += ` <i class="fa-regular fa-star"></i>`
            } else if (rest < 7) { // ha nagyobb mint 3 de kissebb mint akkor egy fél csillaot kap
                starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`
            } else { // különben ha nagyobb int 7 akkor egy egész csillagot kap
                starsHTML += `<i class="fa-solid fa-star"></i>`
            }

        } else {
            starsHTML += ` <i class="fa-regular fa-star"></i>`
        }

    };

    return starsHTML;
};

function createProductsCardsTemplate(product) {
    console.log(product)
    const starsHTML = createStars(product.rate);
    return `<div class="product-card">
        <img src="${product.imgUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="content-wrapper">
            <div class="content-top">
                <div class="rate-container">
                    <div class="rate-satrs">
                         ${starsHTML}
                    </div>
                    <p class="rate">${product.rate}</p>
                </div>
                <p class="calories">${product.calories} Kcla</p>
                <p>${product.description}</p>
            </div>
            <p class="price">Ár: ${product.price} Ft</p>
        </div>
    </div>  
`

};


// a kártyák létrehozása
function renderProductsCards(productsToRender, container) {
    if (productsToRender.length === 0) {
        noResultsMessage.classList.add('d-flex')
        container.innerHTML = '';
    } else {
        noResultsMessage.classList.remove('d-flex');
        const productCard = productsToRender.map(product => 
            createProductsCardsTemplate(product)
        ).join("");
        container.innerHTML = productCard;
    }
};


// Szűri a termékeket kategória alapján
function filterProducts(products, category) {
    if (category === 'all') {
        return products;
    } else {
        return products.filter(product => product.categoryName === category);
    }
};



// az urlben lévő categória név megszerzése a gombokra kattintásnál
function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'all';

};

// az urlben lévő keresési kifejezés megszerzése a keresőmezőbe írt adatok alapján
function getSearchTermFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('search') || '';
};




// Event listener az össze filtered-btn osztályú gombhoz
function setupEventListener(products, container) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.getAttribute('data-category');
            const filteredProducts = filterProducts(products, category);
            renderProductsCards(filteredProducts, container);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })
};




// Keresési funkció

function searchProducts(products, searchTerm) {
    return products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
};


function setupSearchListener(products, container) {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value;
        if (searchTerm.length >= 3) {
            const searchResults = searchProducts(products, searchTerm);
            renderProducts(searchResults, container);
        } else {
            const initialCategory = getCategoryFromUrl();
            const filteredProducts = filterProducts(products, initialCategory);
            renderProducts(filteredProducts, container);
        };
    });
};




document.addEventListener('DOMContentLoaded', async () => {
    cookiesPopup();

    const productContainer = document.querySelector(".js-products-container");
    if (productContainer) { //megvizsgáljuk létezik e a konténer

        const products = await fetchProduct(); // megkapjuk az adatot
        const initialCategory = getCategoryFromUrl();
        const searchTerm = getSearchTermFromUrl();
        let filteredProducts;

        if (searchTerm) {
            filteredProducts = searchProducts(products, searchTerm);
        } else {
            filteredProducts = filterProducts(products, initialCategory);
        };

        // const filteredProducts = filterProducts(products, initialCategory);
        renderProductsCards(filteredProducts, productContainer);
        setupEventListener(products, productContainer);
        setupSearchListener(products, productContainer);
    };
});



hamburgerMenu();
addEventListeners();






