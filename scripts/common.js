import { hamburgerMenu } from './hamburger.js';
import { cookiesPopup } from './cookies.js';
import { showModal, closeModal, addEventListeners } from './modal.js';


document.addEventListener("DOMContentLoaded", () => {
    cookiesPopup();
});

hamburgerMenu();
addEventListeners();