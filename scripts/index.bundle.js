(()=>{"use strict";const e={impresszum:"\n        <h2>Impresszum</h2>\n        <p>Ez az oldal a következő cégről szól:</p>\n        <p><strong>Cég neve:</strong> Példa Kft.</p>\n        <p><strong>Cím:</strong> 1234 Budapest, Példa utca 12.</p>\n        <p><strong>Adószám:</strong> 12345678-1-23</p>\n        <p><strong>Cégjegyzékszám:</strong> 01-23-456789</p>\n        <p><strong>Email:</strong> info@pelda.hu</p>\n        <p><strong>Telefon:</strong> +36 1 234 5678</p>\n        <p>Az oldalon található tartalmak a Példa Kft. tulajdonát képezik, és azok felhasználása csak a cég írásos engedélyével lehetséges.</p>\n        \n    ",aszf:"\n        <h2>Általános Szerződési Feltételek</h2>\n        <p>Az Általános Szerződési Feltételek (ÁSZF) tartalmazzák azokat a feltételeket, amelyek alapján Ön igénybe veheti a szolgáltatásainkat:</p>\n        <ul>\n            <li><strong>Szolgáltatás igénybevétele:</strong> A szolgáltatás igénybevételéhez szükséges a regisztráció.</li>\n            <li><strong>Fizetési feltételek:</strong> A szolgáltatás díját előre kell kifizetni.</li>\n            <li><strong>Elállási jog:</strong> Az igénybevevő a szerződéstől 14 napon belül indoklás nélkül elállhat.</li>\n            <li><strong>Adatkezelés:</strong> Az adatokat bizalmasan kezeljük, és harmadik fél számára nem adjuk át.</li>\n        </ul>\n        <p>Részletesebb információkat az ÁSZF dokumentumban talál.</p>\n       \n    ",cookies:"\n        <h2>Cookie-kra vonatkozó irányelvek</h2>\n        <p>Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében:</p>\n        <ul>\n            <li><strong>Szükséges cookie-k:</strong> Ezek a cookie-k nélkülözhetetlenek az oldal működéséhez.</li>\n            <li><strong>Statisztikai cookie-k:</strong> Ezek a cookie-k segítenek megérteni, hogyan használják a látogatók az oldalt.</li>\n            <li><strong>Marketing cookie-k:</strong> Ezeket a cookie-kat a hirdetések személyre szabására használjuk.</li>\n        </ul>\n        <p>Weboldalunk használatával hozzájárul a cookie-k használatához.</p>\n       \n    ",adatvedelem:"\n        <h2>Adatvédelmi irányelvek</h2>\n        <p>Az Ön adatainak védelme kiemelten fontos számunkra. Az alábbiakban tájékoztatjuk Önt az adatkezelés részleteiről:</p>\n        <ul>\n            <li><strong>Adatkezelés célja:</strong> Az adatokat a szolgáltatásaink nyújtásához és fejlesztéséhez használjuk.</li>\n            <li><strong>Adatkezelés jogalapja:</strong> Az adatkezelés jogalapja az Ön hozzájárulása, illetve a szerződés teljesítése.</li>\n            <li><strong>Adattovábbítás:</strong> Az adatokat harmadik fél számára nem adjuk át.</li>\n            <li><strong>Adatbiztonság:</strong> Az adatokat biztonságos szervereken tároljuk, és megfelelő intézkedéseket teszünk azok védelmére.</li>\n        </ul>\n        <p>Az adatvédelmi irányelvekkel kapcsolatos kérdéseit az info@pelda.hu email címre küldheti el.</p>\n       \n    "},t=document.querySelector(".cookies"),s=document.querySelector(".cookies-btn"),a=document.querySelector(".js-hamburger-btn"),n=document.querySelector(".js-nav"),o=document.querySelectorAll(".js-menu-item, .welcome-card"),l=document.querySelector(".js-modal"),i=document.querySelectorAll(".footer-link"),r=document.querySelector(".modal-text"),c=document.querySelector(".js-subscribe"),d=document.querySelector(".js-validation-text"),m=document.querySelector(".js-checkbox"),u=document.querySelector(".js-input-email"),k=document.querySelector(".js-input-name"),g=document.querySelector(".js-pageUpBtn"),z=document.getElementById("loading");function v(){a.addEventListener("click",(()=>{n.classList.toggle("nav-active"),a.classList.toggle("active-hamburger"),document.body.classList.toggle("no-scroll")})),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href");n.classList.remove("nav-active"),a.classList.remove("active-hamburger"),document.body.classList.remove("no-scroll"),document.body.classList.add("fade-out"),setTimeout((()=>{window.location.href=t,z.classList.remove("hidden")}),350)}))}))}const h=document.querySelector(".favorite-cards"),p=document.querySelector(".slide-container"),f=document.querySelector(".global-header"),y=document.querySelector(".header"),L=document.querySelector(".main"),b=document.querySelector(".footer");window.addEventListener("load",(async function(){const e=document.getElementById("loading");await new Promise((e=>setTimeout(e,300))),e&&(e.classList.add("loading-fade-out"),f.classList.remove("hidden"),y.classList.remove("hidden"),L.classList.remove("hidden"),b.classList.remove("hidden"),setTimeout((()=>{f.classList.remove("hidden"),y.classList.remove("hidden"),L.classList.remove("hidden"),b.classList.remove("hidden"),e.classList.add("hidden"),e.classList.remove("loading-fade-out")}),500),document.body.classList.remove("fade-out")),v()})),window.addEventListener("scroll",(()=>{window.scrollY>600?g.classList.add("pageUpShow"):g.classList.remove("pageUpShow")})),async function(){try{const e=await fetch("https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/testimonials.json"),t=await e.json();!function(e){p.innerHTML=e.map(((e,t)=>`\n        <div class="mySlides ${0===t?"active":""};">\n            <img src="${e.pictureUrl}" alt="vendéh profilkép" class="customerPic">\n            <div class="text">\n                <i class="fa-solid fa-quote-right"></i>\n                <h3 class="customerName">${e.name} <strong>(${e.age})</strong></h3>\n                <p>${e.text}</p>\n            </div>\n        </div>\n    `)).join("")}(t),function(e){let t=0;const s=document.querySelectorAll(".mySlides");s[t].classList.add("active"),setInterval((()=>{s[t].classList.remove("active"),t=(t+1)%e.length,s[t].classList.add("active")}),4e3)}(t)}catch(e){console.error(e)}}(),sessionStorage.getItem("acceptedCookies")||(setTimeout((()=>{t.classList.add("cookie-active")}),2e3),s.addEventListener("click",(()=>{t.classList.remove("cookie-active"),sessionStorage.setItem("acceptedCookies","true")}))),c.addEventListener("submit",(e=>{e.preventDefault();let t=!0;if(""===k.value.trim())return d.classList.add("red-color"),d.innerHTML=" ❌ A név megadása kötelező!",void(t=!1);if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(u.value))return d.classList.add("red-color"),d.innerHTML=" ❌ Érvényes email címet kell megadni!",void(t=!1);if(m.checked&&!0===t){d.classList.remove("red-color"),d.innerHTML="✅ Köszönjük a felíratkozást!";const t=new FormData(e.target),s=Object.fromEntries(t.entries());console.table(s),setTimeout((()=>{c.reset(),d.innerHTML="* A mezők kitöltése kötelező!"}),2e3)}else d.classList.add("red-color"),d.innerHTML=" ❌ Az adatakezelési tájékoztatót el kell fogadni!"})),async function(){!function(e,t){const s=e.map(((e,t)=>function(e,t){let s=function(e){let t=Math.floor(e),s=Math.round(10*(e-t)),a="";for(let e=0;e<5;e++)t>0?(a+='<i class="fa-solid fa-star"></i>',t--):a+=s>0?s<3?' <i class="fa-regular fa-star"></i>':s<7?'<i class="fa-solid fa-star-half-stroke"></i>':'<i class="fa-solid fa-star"></i>':' <i class="fa-regular fa-star"></i>';return a}(e.rate);return`\n        <div class="favorite-card ${1===t?"big-card":""}">\n            <img src="${e.imgUrl}" alt="${e.name}">\n            <div class="content-wrapper">\n                <h3>${e.name}</h3>\n                <div class="rate-container">\n                    <div class="rate-satrs">\n                         ${s}\n                    </div>\n                    <p class="rate">${e.rate}</p>\n                </div>\n                <p class="price">Ár: ${e.price} Ft</p>\n            </div>\n        </div>  \n        `}(e,t))).join("");t.innerHTML=s}((await async function(){try{const e=await fetch("http://localhost:8000/api/products");return await e.json()}catch(e){console.error(e)}}()).slice(0,3),h)}(),i.forEach((t=>{t.addEventListener("click",(function(t){var s;t.preventDefault(),s=this.getAttribute("data-content"),r.innerHTML=e[s],l.classList.add("open-modal"),document.body.classList.add("no-scroll")}))})),document.querySelector(".close").addEventListener("click",(function(){l.classList.remove("open-modal"),document.body.classList.remove("no-scroll")})),window.addEventListener("click",(e=>{e.target===l&&(l.classList.remove("open-modal"),document.body.classList.remove("no-scroll"))}))})();