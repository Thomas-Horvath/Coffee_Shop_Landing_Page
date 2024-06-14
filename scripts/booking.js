import { hamburgerMenu } from './hamburger.js';
import { cookiesPopup } from './cookies.js';
import { showModal, closeModal, addEventListeners } from './modal.js';


const bookingForm = document.querySelector('.js-booking-form');
const customSelectTriggers = document.querySelectorAll('.custom-select-trigger');
const alertText = document.querySelector(".alert-text");
const phoneInput = document.getElementById('phone');


// booking section 


// Telefonszám formátum ellenőrzése
function validatePhoneNumber() {
    const phonePattern = /\+36|06\s?([1-9][0-9])\s?[0-9]{3}\s?[0-9]{4}/;
    return phoneInput.value.trim() && !phonePattern.test(phoneInput.value.trim());
}

// a form beküldésének kezelése
function submitEventHandler() {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = bookingForm.querySelectorAll('.js-required');
        let isValid = true;


        inputs.forEach(function (input) {
            if (!input.value) {
                isValid = false;
                input.classList.add('invalid-input');
                alertText.classList.add('red-color');
            } else {
                input.classList.remove('invalid-input');
                alertText.classList.remove('red-color');
            }
        });

        if (!isValid ) {
            alertText.innerHTML = 'Kérjük, töltse ki az összes kötelező mezőt!';
            alertText.classList.add('red-color');
        } else if (validatePhoneNumber()) {
            phoneInput.classList.add('invalid-input');
            alertText.textContent = 'A telefonszám formátuma nem megfelelő!';
            alertText.classList.add('red-color');
        } else {
            alertText.innerHTML = 'Foglalását rögzítettük!';
            alertText.classList.add('green-color');


            // elküldött adatok megjelenítése konzolon teszteléskénet
            const formData = new FormData(e.target);
            const formEntries = Object.fromEntries(formData.entries());
            console.table(formEntries);

            setTimeout(() => {
                alertText.innerHTML = 'A *-al jelölt mezőket kötelező kitölteni!';
                alertText.classList.remove('green-color');
                bookingForm.reset();
            }, 3000)
        }

    });
};




// lenyíló menük kezelése
function inputHandler() {
    customSelectTriggers.forEach(trigger => {
        const selectWrapper = trigger.closest('.custom-select');
        const customOptions = selectWrapper.querySelector('.custom-options');

        trigger.addEventListener('click', function () {
            customOptions.classList.toggle('flex');
        });

        selectWrapper.addEventListener('click', function (e) {
            const targetOption = e.target.closest('.custom-option');
            if (targetOption) {
                trigger.value = targetOption.textContent;
                trigger.dataset.value = targetOption.dataset.value;
                customOptions.classList.remove('flex');
            }
        });
    });


    // ha a menün kívül kattintanak akkor bezáródik
    document.addEventListener('click', function (e) {
        customSelectTriggers.forEach(trigger => {
            const selectWrapper = trigger.closest('.custom-select');
            const customOptions = selectWrapper.querySelector('.custom-options');
            if (!selectWrapper.contains(e.target)) {
                customOptions.classList.remove('flex');
            }
        });
    });
};





// booking form , display calendar 
flatpickr("#datePicker", {
    dateFormat: "Y.m.d",
    inline: false, // Naptár folyamatosan látható
    locale: "hu",
    minDate: "today",
    disable: [
        function (date) {
            // Visszatérünk true-val, ha a nap hétfő vagy kedd(mert akkor zárva a shop)
            return (date.getDay() === 1 || date.getDay() === 2);
        }
    ]
});








cookiesPopup();
inputHandler();
hamburgerMenu();
submitEventHandler();
addEventListeners();
