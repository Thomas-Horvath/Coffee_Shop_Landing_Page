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





// products fetch 
export async function fetchProduct() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(err) {
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
        menuItem.addEventListener("click", () => {
            nav.classList.remove("nav-active");
            hamburgerBtn.classList.remove("active-hamburger");
        })
    });
};






// Felugró ablak tartalmai
const content = {
    impresszum: `
        <h2>Impresszum</h2>
        <p>Ez az oldal a következő cégről szól:</p>
        <p><strong>Cég neve:</strong> Példa Kft.</p>
        <p><strong>Cím:</strong> 1234 Budapest, Példa utca 12.</p>
        <p><strong>Adószám:</strong> 12345678-1-23</p>
        <p><strong>Cégjegyzékszám:</strong> 01-23-456789</p>
        <p><strong>Email:</strong> info@pelda.hu</p>
        <p><strong>Telefon:</strong> +36 1 234 5678</p>
        <p>Az oldalon található tartalmak a Példa Kft. tulajdonát képezik, és azok felhasználása csak a cég írásos engedélyével lehetséges.</p>
        
    `,
    aszf: `
        <h2>Általános Szerződési Feltételek</h2>
        <p>Az Általános Szerződési Feltételek (ÁSZF) tartalmazzák azokat a feltételeket, amelyek alapján Ön igénybe veheti a szolgáltatásainkat:</p>
        <ul>
            <li><strong>Szolgáltatás igénybevétele:</strong> A szolgáltatás igénybevételéhez szükséges a regisztráció.</li>
            <li><strong>Fizetési feltételek:</strong> A szolgáltatás díját előre kell kifizetni.</li>
            <li><strong>Elállási jog:</strong> Az igénybevevő a szerződéstől 14 napon belül indoklás nélkül elállhat.</li>
            <li><strong>Adatkezelés:</strong> Az adatokat bizalmasan kezeljük, és harmadik fél számára nem adjuk át.</li>
        </ul>
        <p>Részletesebb információkat az ÁSZF dokumentumban talál.</p>
       
    `,
    cookies: `
        <h2>Cookie-kra vonatkozó irányelvek</h2>
        <p>Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében:</p>
        <ul>
            <li><strong>Szükséges cookie-k:</strong> Ezek a cookie-k nélkülözhetetlenek az oldal működéséhez.</li>
            <li><strong>Statisztikai cookie-k:</strong> Ezek a cookie-k segítenek megérteni, hogyan használják a látogatók az oldalt.</li>
            <li><strong>Marketing cookie-k:</strong> Ezeket a cookie-kat a hirdetések személyre szabására használjuk.</li>
        </ul>
        <p>Weboldalunk használatával hozzájárul a cookie-k használatához.</p>
       
    `,
    adatvedelem: `
        <h2>Adatvédelmi irányelvek</h2>
        <p>Az Ön adatainak védelme kiemelten fontos számunkra. Az alábbiakban tájékoztatjuk Önt az adatkezelés részleteiről:</p>
        <ul>
            <li><strong>Adatkezelés célja:</strong> Az adatokat a szolgáltatásaink nyújtásához és fejlesztéséhez használjuk.</li>
            <li><strong>Adatkezelés jogalapja:</strong> Az adatkezelés jogalapja az Ön hozzájárulása, illetve a szerződés teljesítése.</li>
            <li><strong>Adattovábbítás:</strong> Az adatokat harmadik fél számára nem adjuk át.</li>
            <li><strong>Adatbiztonság:</strong> Az adatokat biztonságos szervereken tároljuk, és megfelelő intézkedéseket teszünk azok védelmére.</li>
        </ul>
        <p>Az adatvédelmi irányelvekkel kapcsolatos kérdéseit az info@pelda.hu email címre küldheti el.</p>
       
    `
};




// Felugró ablak megjelenítése
export function showModal(contentKey) {
    modalText.innerHTML = content[contentKey];
    modal.style.display = "flex";
}



// Felugró ablak bezárása
export function closeModal() {
    modal.style.display = "none";
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
            modal.style.display = "none";
        }
    });
};




// csillagok generálása a product kártyákon
export function createStars(productRating) {
    let rating = Math.floor(productRating); // Megkapjuk a reating egész értékét.  Ennyi teljes csillagot biztos meg kell jeleníteni.
    let rest = Math.round((productRating - rating) * 10); // Megkapjuk a rating tizedees értékét. 
    // console.log(productRating, rating, rest);

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