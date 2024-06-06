import { hamburgerMenu } from './hamburger.js';
import { cookiesPopup } from './cookies.js';
import { subscribeValidation } from './subscribeValidation.js';


document.addEventListener("DOMContentLoaded", () => {
    cookiesPopup();
});

hamburgerMenu();
subscribeValidation();