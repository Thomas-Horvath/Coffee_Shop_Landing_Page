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
const globalHeader = document.querySelector('.global-header');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');



window.addEventListener('load', async function () {
    const loading = document.getElementById('loading');


    await new Promise(resolve => setTimeout(resolve, 300));


    if (loading) {
        loading.classList.add('loading-fade-out');

            globalHeader.classList.remove('hidden');
            header.classList.remove('hidden');
            main.classList.remove('hidden');
            footer.classList.remove('hidden');
  

        setTimeout(() => {
            globalHeader.classList.remove('hidden');
            header.classList.remove('hidden');
            main.classList.remove('hidden');
            footer.classList.remove('hidden');
            loading.classList.add('hidden');
            loading.classList.remove('loading-fade-out');
        }, 500);
        document.body.classList.remove('fade-out');
    };

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