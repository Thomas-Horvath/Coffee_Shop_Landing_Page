import { hamburgerMenu } from './hamburger.js';
import { cookiesPopup } from './cookies.js';
import { addEventListeners } from './modal.js';


document.addEventListener("DOMContentLoaded", () => {
    cookiesPopup();
});

hamburgerMenu();
addEventListeners();