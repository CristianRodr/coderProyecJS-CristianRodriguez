'use strict';

const despleCard = document.querySelector('.container__event');
//	1m5dSIJyqVAllTWWLaZClHNg62SiKuZx

/* const state = {
    recipe: {},
  }; */

const readingAPI = async function (search) {
  try {
    const resipient = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${search}&apikey=1m5dSIJyqVAllTWWLaZClHNg62SiKuZx`
    );
    console.log(resipient);
    if (!resipient.ok) throw new Error('Problem getting location data');
    ////
    const data = await resipient.json();
    console.log(data);

    const recipe = data._embedded.events;
    console.log(recipe);

    recipe.forEach(element => {
      const { images, name, dates, _embedded } = element;
      let image = images[3].url;
      let date = dates.start.localDate;
      let venues = _embedded.venues.at(0).name.slice(0, 23);
      let cortName = name.slice(0, 40);
      //let names = _embedded.attractions.at(0).name;
      //console.log(names);

      const html = `
      <div class="card a1">
            <div class="card__figure">
              <img class="card__picture" src=${image} alt="" />
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
readingAPI('ES');
