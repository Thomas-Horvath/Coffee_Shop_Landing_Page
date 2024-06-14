const subscribeForm = document.querySelector('.js-subscribe')
const validationText = document.querySelector('.js-validation-text');
const checkbox = document.querySelector('.js-checkbox')
const emailInput = document.querySelector('.js-input-email');
const nameInput = document.querySelector('.js-input-name');




export function subscribeValidation() {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ A név megadása kötelező!`;
            isValid = false;
            return;
        };

        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ Érvényes email címet kell megadni!`;
            isValid = false;
            return;
        };



        if (checkbox.checked && isValid === true) {
            validationText.classList.remove('red-color');
            validationText.innerHTML = `✅ Köszönjük a felíratkozást!`


            // elküldött adatok megjelenítése konzolon teszteléskénet
            const formData = new FormData(e.target);
            const formEntries = Object.fromEntries(formData.entries());
            console.table(formEntries);




            setTimeout(() => {
                subscribeForm.reset();
                validationText.innerHTML = "* A mezők kitöltése kötelező!";

            }, 2000)
        } else {
            validationText.classList.add('red-color');
            validationText.innerHTML = ` ❌ Az adatakezelési tájékoztatót el kell fogadni!`
        };

        //TODO  küldés a szervernek 
        // const formData = {
        //     name: nameInput.value,
        //     email: emailInput.value,
        //     checkbox: checkbox.checked
        // };

        // fetch('http://localhost:3000/subscribe', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
    });
};