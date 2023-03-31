'use strict';

const despleCard = document.querySelector('.container__event');
const wrapper = document.querySelector('.wrapper');
const selectBtn = document.querySelector('.select-btn');
const searchInp = document.querySelector('.input');
const options = document.querySelector('.options');
const formSearch = document.querySelector('.form__search');
//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('open modal');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    console.log('Close modal');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

despleCard.addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

let countries = [
    'US (Estados Unidos)',
    'BE (Bélgica)',
    'CA (Canadá)',
    'CZ (República Checa)',
    'GB (Gran Bretaña)',
    'IE (Irlanda)',
    'LU (Luxemburgo)',
    'MX (México)',
    'NL (Países Bajos)',
    'AN (Antillas Neerlandesas)',
    'NZ (Nueva Zelanda)',
    'NO (Noruega)',
    'PL (Polonia)',
    'PT (Portugal)',
    'ZA (Sudáfrica)',
    'ES (España)',
    'AE (Emiratos Árabes Unidos)',
];

function addStart(startCountry) {
    despleCard.innerHTML = '';
    const sacar = countries.find(element => element === startCountry);
    console.log(sacar);

    if (startCountry === sacar) {
        let countri = sacar.slice(0, 2);
        console.log(countri);
        formSearch.setAttribute('value', `${countri}`);
        formSearch.removeAttribute('disabled');
        readingAPI(`${countri}`);
    }
}

function addCountry(selectedCountry) {
    options.innerHTML = '';
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? 'selected' : '';
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML('beforeend', li);
    });
}

addCountry();

function updateName(selectedLi) {
    searchInp.value = '';
    addCountry(selectedLi.innerText);
    addStart(selectedLi.innerText);
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener('keyup', () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = countries
        .filter(data => {
            return data.toLowerCase().startsWith(searchedVal);
        })
        .map(data => `<li onclick="updateName(this)">${data}</onclick=>`)
        .join('');
    options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
});

selectBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
//	1m5dSIJyqVAllTWWLaZClHNg62SiKuZx

const readingAPI = async function (search) {
    try {
        const resipient = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${search}&apikey=1m5dSIJyqVAllTWWLaZClHNg62SiKuZx`
        );
        //console.log(resipient);
        if (!resipient.ok) throw new Error('Problem getting location data');
        ////
        const data = await resipient.json();
        //console.log(data);

        const recipe = data._embedded.events;
        console.log(recipe);

        recipe.forEach(element => {
            const {images, name, dates, _embedded, id} = element;
            let image = images[3].url;
            let date = dates.start.localDate;
            let venues = _embedded.venues.at(0).name.slice(0, 23);
            let cortName = name.slice(0, 40);

            const html = `
      <div class="card a1">
            <div class="card__figure">
              <img class="card__picture" src=${image} alt="" id="${id}" />
              <!--<p class="prueba"></p>-->
            </div>
            <div class="card__text">
              <h2 class="card__title">${cortName}</h2>
              <time class="card__time">${date}</time>
              <div class="card__posicion">
                <svg class="card__icon">
                  <use xlink:href="/img/symbol-defs.svg#icon-PosicionSvg"></use>
                </svg>
                <p class="card__lugar">${venues}</p>
              </div>
            </div>
          </div>
      `;

            despleCard.insertAdjacentHTML('afterbegin', html);

        });

    } catch {
        console.error(`${err} 💥`);
    }
};


despleCard.addEventListener('click', function (ev) {
    const id = ev.target.id;

    const recupeId = function () {
        return new Promise(function (resolve, reject) {
            resolve(id);
        })
    }

    const pos = recupeId();
    pos.then(date => readingId(date));
});


const readingId = async function (id) {
    try {
        modal.innerHTML = '';

        const resipientId = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=1m5dSIJyqVAllTWWLaZClHNg62SiKuZx`
        );
        //console.log(resipientId)
        if (!resipientId.ok) throw new Error('Problem getting location data');
        ////
        const data = await resipientId.json();
        console.log(data);

        const arrayObje = {};

        arrayObje.destruc = {
            name: data.name,
            info: data.info,
            // generalInfo: data._embedded.venues[0].generalInfo.generalRule,
            date: data.dates.start.localDate,
            hour: data.dates.start.localTime,
             city: data._embedded.venues[0].city.name,
             country: data._embedded.venues[0].country.name,
            lugar: data._embedded.venues[0].name,
            //priceMin: data.priceRanges[0].min,
            // priceMax: data.priceRanges[0].max,
            // currency: data.priceRanges[0].currency,
            // type: data.priceRanges[0].type,
            image: data.images[6].url,
        }

        console.log(arrayObje.destruc);
        const {name, info, date, hour, city, country, lugar, image} = arrayObje.destruc;

        const html = `
            <!--<button class="close-modal">×</button>-->
    <div class="modal__logo">
    <button class="close-modal">×</button>
        <img class="modal__picture" src="${image}">
    </div>
    <div class="modal__seccion">
        <div class="modal__grid">
            <div class="modal__image">
                <img class="modal__img" src="${image}">
            </div>
            <div class="modal__text">
                <div class="modal__letter modal__letter&#45;&#45;modifi">
                    <h3 class="modal__title">INFO</h3>
                    <p class="modal__parafo">${info ? info.slice(0, 60) : name}</p>
                </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHEN</h3>
                <p class="modal__parafo modal&#45;&#45;paddin">${date}</p>
                  <p class="modal__parafo">${hour} (${city}/${country})</p>
              </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHERE</h3>
                <p class="modal__parafo modal&#45;&#45;paddin">${city}, ${country}</p>
                  <p class="modal__parafo">${lugar}</p>
              </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHO</h3>
                <p class="modal__parafo">${name}</p>
              </div>
                <div class="modal__letter">
                    <h3 class="modal__title">PRICES</h3>
                    <div class="ticket"><img class="img-ticket" src="../img/ticket1.svg" alt="ticket">
                    <p class="modal__parafo">Standart 300-500 UAH</p></div>
                 
                    <button class="modal__btn">BUY TICKETS</button>
                    <div class="ticket"><img class="img-ticket" src="../img/ticket1.svg" alt="ticket">
                    <p class="modal__parafo">VIP 1000-1500 UAH</p></div>
                    <button class="modal__btn">BUY TICKETS</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__author">
        <button class="btn__author">MORE FROM THIS AUTHOR</button>
    </div>
        `;
    modal.insertAdjacentHTML('afterbegin', html);

    } catch {
        console.error(`${err} 💥`);
    }
}





