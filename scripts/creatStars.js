export default function createStars(productRating) {
    let rating = Math.floor(productRating); // Megkapjuk a reating egész értékét.  Ennyi teljes csillagot biztos meg kell jeleníteni.
    let rest = Math.round((productRating - rating) * 10); // Megkapjuk a rating tizedees értékét. 
    console.log(productRating, rating, rest);

    let starsHTML = '';

    //half star =  <i class="fa-solid fa-star-half-stroke"></i>

    for (let i = 0; i < 5; i++) {
        if (rating > 0) {
            starsHTML += `<i class="fa-solid fa-star"></i>`
            rating--
        } else if (rest > 0) {
            if (rest < 3) { // ha kissebb mint három a tizeds akkor egy üres csillagit kap
                starsHTML += ` <i class="fa-regular fa-star"></i>`
            } else if (rest < 7) { // ha nagyobb mint 3 de kissebb mint akkor egy fél csillaot kap
                starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`
            } else { // különben ha nagyobb int 7 akkor egy egész csillagot kap
                starsHTML += `<i class="fa-solid fa-star"></i>`
            }

        } else {
            starsHTML += ` <i class="fa-regular fa-star"></i>`
        }

    };

    return starsHTML;
};
