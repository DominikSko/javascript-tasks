const catBtn = document.querySelector('.cat-btn');
const dogBtn = document.querySelector('.dog-btn');
const catContainer = document.querySelector('.cat-container');
const catId = document.querySelector('.cat-id');
const dogContainer = document.querySelector('.dog-container');
const dogId = document.querySelector('.dog-id');
const catPoints = document.querySelector('.cat-points');
const dogPoints = document.querySelector('.dog-points');

let catCounter = 0;
let dogCounter = 0;

const catAPI = 'https://api.thecatapi.com/v1/images/search';
const dogAPI = 'https://api.thedogapi.com/v1/images/search';

function fetchData (api) {
  fetch(api)
  .then(response => response.json())
  .then(data => {
    displaImage(data)
  })
  .catch(error => console.log('error: ',error.message))
}

function displaImage (data) {
  if (data[0].url.includes('dog')) {
    dogContainer.innerHTML = `<div>
              <img class="rounded-md" src=${data[0].url} alt="" />
            </div>`
    dogId.textContent = `Pies #${data[0].id}`
  }
  else {
    catContainer.innerHTML = `<div>
              <img class="rounded-md" src=${data[0].url} alt="" />
            </div>`
    catId.textContent = `Kot #${data[0].id}`
  }
}

function countDogPoints () {
  dogCounter++;
  dogPoints.textContent = dogCounter;
  if(dogCounter === 5) {
    dogContainer.innerHTML = `<p class="counter">Wygrałeś!!!</p>`;
    dogBtn.style.display = 'none';
    catBtn.style.display = 'none';
    setTimeout(() => {
      fetchData(dogAPI)
      dogCounter = 0;
      dogPoints.textContent = dogCounter;
      dogBtn.style.display = 'inline';

      fetchData(catAPI)
      catCounter = 0;
      catPoints.textContent = catCounter;
      catBtn.style.display = 'inline';
    },4000)}
}

function countCatPoints () {
  catCounter++;
  catPoints.textContent = catCounter;
  if(catCounter === 5) {
    catContainer.innerHTML = `<p class="counter">Wygrałeś!!!</p>`;
    catBtn.style.display = 'none';
    dogBtn.style.display = 'none';
    setTimeout(() => {
      fetchData(catAPI)
      catCounter = 0;
      catPoints.textContent = catCounter;
      catBtn.style.display = 'inline';

      fetchData(dogAPI)
      dogCounter = 0;
      dogPoints.textContent = dogCounter;
      dogBtn.style.display = 'inline';
    },4000)}
}


fetchData(dogAPI);
fetchData(catAPI);

dogBtn.addEventListener('click', () => {
  event.preventDefault();
  countDogPoints();
  if (dogCounter < 5) {
    fetchData(catAPI);
  }
})

catBtn.addEventListener('click', () => {
  event.preventDefault();
  countCatPoints();
  if (catCounter < 5) {
    fetchData(dogAPI);
  }
});
