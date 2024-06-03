// management of cookies
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies-btn');

export function cookiesPopup() {
    const acceptedCookies = sessionStorage.getItem("acceptedCookies");
    // elmentjük a sessionStorege acceptCookies kulcshoz tartozó értéket. (nincs értéke még itt)

    if (!acceptedCookies) { // ha az érték nem true  akkor futnak a függvények
        setTimeout(() => {
            cookies.classList.add("cookie-active");
        }, 2000);

        cookiesBtn.addEventListener("click", () => {
            cookies.classList.remove("cookie-active");
            sessionStorage.setItem("acceptedCookies", "true"); // itt true-ra állítjuk az értéket.
        });
    };
};
