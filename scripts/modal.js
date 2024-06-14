
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `
};



const modal = document.querySelector(".js-modal");




// Felugró ablak megjelenítése
export function showModal(contentKey) {
    const modalText = document.querySelector(".modal-text");
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
    document.querySelectorAll(".footer-link").forEach(link => {
        link.addEventListener("click", function(event) {
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
}
