import { hamburgerMenu , cookiesPopup , subscribeValidation , addEventListeners , pageUpVisibilityHandle } from './functions.js';
import '../css/base.css'
import '../css/header.css'
import '../css/subscribe.css'
import '../css/footer.css'
import '../css/contact.css'
import '../css/media-queries.css'

const messageForm = document.querySelector('.js-contact-form')
const alertText = document.querySelector(".alert-text");
const messageInputs = document.querySelectorAll('.js-message-input')



window.addEventListener('load', async function () {
    const loading = document.getElementById('loading');



    // Megvárjuk, amíg az oldal teljesen betöltődik
    await new Promise(resolve => setTimeout(resolve, 300)); // 0.3 másodperc várakozás

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





// message from
function messageFormHandle() {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
       

        let valid = true;
        
        messageInputs.forEach((input) => {
            if (!input.value) {
                valid = false;
                alertText.classList.add('red-color');
                alertText.innerHTML = "Kérjük töltse ki az összes mezőt!";
            };
        });

        if (valid) {
            alertText.classList.remove('red-color');
            alertText.innerHTML = "Köszönjük az üzenetét!";

            const formData = new FormData(e.target);
            const formEntries = Object.fromEntries(formData.entries());
            console.table(formEntries);

            setTimeout(() => {
                messageForm.reset();
                alertText.innerHTML = "A mezők kitöltése kötelező!";
            }, 2000);
        };


    })
};



pageUpVisibilityHandle();

subscribeValidation();
cookiesPopup();
messageFormHandle();
addEventListeners();