import { fetchProduct , cookiesPopup ,hamburgerMenu , addEventListeners , createStars , pageUpVisibilityHandle } from "./functions.js";

const noResultsMessage = document.querySelector('.no-results-message');



function createProductsCardsTemplate(product) {
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

 cookiesPopup();
pageUpVisibilityHandle();
hamburgerMenu();
addEventListeners();






