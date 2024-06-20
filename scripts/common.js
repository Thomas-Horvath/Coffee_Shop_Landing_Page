
import { cookiesPopup, hamburgerMenu, addEventListeners, pageUpVisibilityHandle } from './functions.js';
import '../css/base.css'
import '../css/header.css'
import '../css/about.css'
import '../css/booking.css'
import '../css/welcomePage.css'
import '../css/footer.css'
import '../css/media-queries.css'

window.addEventListener('load', async function () {
    const loading = document.getElementById('loading');


    // Megvárjuk, amíg az oldal teljesen betöltődik
    await new Promise(resolve => setTimeout(resolve,300)); // 0.3 másodperc várakozás

    // Az oldal betöltése után elrejtjük a loading spinntert animációval
    if (loading) {
        loading.style.transition = 'opacity 0.5s ease-out'; // Animációs transition hozzáadása
        loading.style.opacity = '0'; // Opacitás csökkentése

        // Elrejtés végrehajtása a transition végén
        setTimeout(() => {
            loading.classList.add('hidden'); // Elrejtjük a loading spinntert
            loading.style.opacity = ''; // Visszaállítjuk az opacitást
        }, 500); // 0.5 másodperc után, hogy a transition befejeződjön
    }

    // Hamburger menü inicializálása
    hamburgerMenu();
});



pageUpVisibilityHandle();
cookiesPopup();

addEventListeners();