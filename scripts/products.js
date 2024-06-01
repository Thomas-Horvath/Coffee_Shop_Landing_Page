import { hamburgerMenu } from "./hamburger.js";
const url = "https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/products.json"



// adatok betöltése a json fájlból
async function productsRender() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
// a kártyák létrehozása
function renderProducts(productsToRender, container) {
    const productCard = productsToRender.map(product =>`
        <div class="product-card"><img src="${product.imgUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Ár: ${product.price} Ft</p>
            <p>Kalória: ${product.calories}</p>
        </div>  
        `).join("");
    container.innerHTML = productCard;
};


// Szűri a termékeket kategória alapján
function filterProducts(products, category) {
    if (category === 'all') {
       return products;
    } else {
       return products.filter(product => product.categoryName === category);
    }
};

// az urlben lévő categória név megszerzése
function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'all';
   
};


// Event listener a gombokhoz

function setupEventListener(products, container) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.getAttribute('data-category');
            const filteredProducts = filterProducts(products, category);
            renderProducts(filteredProducts, container);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })
};



document.addEventListener('DOMContentLoaded', async () => {
  
    const productContainer = document.querySelector(".js-products-container");
    if (productContainer) { //megvizsgáljuk létezik e a konténer
      

        const products = await productsRender();
        const initialCategory = getCategoryFromUrl();
        const filteredProducts = filterProducts(products, initialCategory);

        renderProducts(filteredProducts, productContainer);
        setupEventListener(products, productContainer);

    }
});

hamburgerMenu();
