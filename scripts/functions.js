import content from '../data/policyData.js'

const url = "https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/products.json";
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies-btn');
const hamburgerBtn = document.querySelector('.js-hamburger-btn');
const nav = document.querySelector(".js-nav");
const menuItems = document.querySelectorAll('.js-menu-item');
const modal = document.querySelector(".js-modal");
const links = document.querySelectorAll(".footer-link")
const modalText = document.querySelector(".modal-text");
const subscribeForm = document.querySelector('.js-subscribe')
const validationText = document.querySelector('.js-validation-text');
const checkbox = document.querySelector('.js-checkbox')
const emailInput = document.querySelector('.js-input-email');
const nameInput = document.querySelector('.js-input-name');
const pageUp = document.querySelector('.js-pageUpBtn');
const loading = document.getElementById('loading');



// products fetch 
export async function fetchProduct() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.error(err);
    }
};


// cookies handler
export function cookiesPopup() {
    const acceptedCookies = sessionStorage.getItem("acceptedCookies");
    // elmentjük a sessionStorege acceptCookies kulcshoz tartozó értéket. (nincs értéke még itt)

    if (!acceptedCookies) { // ha az érték nem true  akkor futnak a függvények
        setTimeout(() => {
            cookies.classList.add("cookie-active");
        }, 2000);

        cookiesBtn.addEventListener("click", () => {
            cookies.classList.remove("cookie-active");
            sessionStorage.setItem("acceptedCookies", "true"); // itt true-ra állítjuk az értéket.
        });
    };
};





// hamburger menu
export function hamburgerMenu() {

    hamburgerBtn.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        hamburgerBtn.classList.toggle("active-hamburger");
    });

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (e) => {
            e.preventDefault();

            const targetUrl = e.currentTarget.getAttribute('href');
            console.log(targetUrl)

            
            nav.classList.remove("nav-active");
            hamburgerBtn.classList.remove("active-hamburger");



            setTimeout(() => {
                window.location.href = targetUrl;
                loading.classList.remove('hidden');
            }, 350);
        });
    });
};













// policy felugró alakok kezelése

// Felugró ablak megjelenítése
export function showModal(contentKey) {
    modalText.innerHTML = content[contentKey];
    modal.classList.add('open-modal');
    document.body.classList.add('no-scroll');
}

// Felugró ablak bezárása
export function closeModal() {
    modal.classList.remove('open-modal');
    document.body.classList.remove('no-scroll');
}

// Eseménykezelők hozzáadása
export function addEventListeners() {
    // Eseménykezelők hozzáadása a lábléc linkekhez
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const contentKey = this.getAttribute("data-content");
            showModal(contentKey);
        });
    });

    // Eseménykezelő hozzáadása a bezáró gombhoz
    document.querySelector(".close").addEventListener("click", closeModal);

    // Felugró ablak bezárása ha bárhová kattintunk az ablakon kívül
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove('open-modal');
            document.body.classList.remove('no-scroll');
        }
    });
};




// csillagok generálása a product kártyákon
export function createStars(productRating) {
    // Megkapjuk a reating egész értékét.  Ennyi teljes csillagot biztos meg kell jeleníteni.
    let rating = Math.floor(productRating);

    // Megkapjuk a rating tizedees értékét. 
    let rest = Math.round((productRating - rating) * 10);

    let starsHTML = '';
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






//  felíratkozás validálása
export function subscribeValidation() {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ A név megadása kötelező!`;
            isValid = false;
            return;
        };

        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ Érvényes email címet kell megadni!`;
            isValid = false;
            return;
        };



        if (checkbox.checked && isValid === true) {
            validationText.classList.remove('red-color');
            validationText.innerHTML = `✅ Köszönjük a felíratkozást!`


            // elküldött adatok megjelenítése konzolon teszteléskénet
            const formData = new FormData(e.target);
            const formEntries = Object.fromEntries(formData.entries());
            console.table(formEntries);



            setTimeout(() => {
                subscribeForm.reset();
                validationText.innerHTML = "* A mezők kitöltése kötelező!";

            }, 2000)
        } else {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ Az adatakezelési tájékoztatót el kell fogadni!`
        };

        //TODO  küldés a szervernek 
        // const formData = {
        //     name: nameInput.value,
        //     email: emailInput.value,
        //     checkbox: checkbox.checked
        // };

        // fetch('http://localhost:3000/subscribe', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
    });
};



// pageUp nyíl megjelenésének kezelése
export function pageUpVisibilityHandle() {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 600) {
            pageUp.classList.add('pageUpShow');
        } else {
            pageUp.classList.remove('pageUpShow');
        }
    }
    );
};