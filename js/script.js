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
      const { images, name, dates, _embedded, id} = element;
      let image = images[3].url;
      let date = dates.start.localDate;
      let venues = _embedded.venues.at(0).name.slice(0, 23);
      let cortName = name.slice(0, 40);

      //let names = _embedded.attractions.at(0).name;
      //console.log(names);

      const html = `
      <div class="card a1">
            <div class="card__figure">
              <img class="card__picture" src=${image} alt="" id="${id}" />
              <p class="prueba"></p>
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

despleCard.addEventListener('click', function (ev){
  const id = ev.target.id;
  readingId(id);
})

const state = {
  recipe: {},
};

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

    const {accessibility, images, name } = data;
    const info = accessibility.info ? accessibility.info : name;
    let image = images[3].url;


    const html = `
     <div class="modal__logo">
        <img class="modal__picture" src="${image}">
    </div>
    <div class="modal__seccion">
        <div class="modal__grid">
            <div class="modal__image">
                <img class="modal__img" src="${image}">
            </div>
            <div class="modal__text">
                <div class="modal__letter modal__letter--modifi">
                    <h3 class="modal__title">INFO</h3>
                    <p class="modal__parafo">${info.slice(0, 132)}</p>
                </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHEN</h3>
                <p class="modal__parafo modal--paddin">2021-06-09</p>
                  <p class="modal__parafo">20:00 (Kyiv/Ukraine)</p>
              </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHERE</h3>
                <p class="modal__parafo modal--paddin">Kyiv, Ukraine</p>
                  <p class="modal__parafo">VDNH</p>
              </div>
              <div class="modal__letter">
                <h3 class="modal__title">WHO</h3>
                <p class="modal__parafo">${name}</p>
              </div>
                <div class="modal__letter">
                    <h3 class="modal__title">PRICES</h3>
                    <p class="modal__parafo">Standart 300-500 UAH</p>
                    <button class="modal__btn">BUY TICKETS</button>
                    <p class="modal__parafo">VIP 1000-1500 UAH</p>
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


