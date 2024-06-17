import { hamburgerMenu , cookiesPopup , subscribeValidation , addEventListeners } from './functions.js';

const messageForm = document.querySelector('.js-contact-form')
const alertText = document.querySelector(".alert-text");
const messageInputs = document.querySelectorAll('.js-message-input')





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




hamburgerMenu();
subscribeValidation();
cookiesPopup();
messageFormHandle();
addEventListeners();