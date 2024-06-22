
import { cookiesPopup, hamburgerMenu, addEventListeners, pageUpVisibilityHandle } from './functions.js';
import '../css/base.css'
import '../css/header.css'
import '../css/about.css'
import '../css/booking.css'
import '../css/welcomePage.css'
import '../css/footer.css'
import '../css/media-queries.css'

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




pageUpVisibilityHandle();
cookiesPopup();

addEventListeners();