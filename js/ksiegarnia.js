const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q='
const list = document.querySelector(".results");
const input = document.getElementById('book-name');
const button = document.getElementById('form__button');

button.addEventListener("click", (e) => {
  e.preventDefault();
  // get value from input
  let localInput = input.value.toString();
  if (localInput !== "") {
    getData(`${API_URL}${localInput}`)
  }

})

function uiList(books) {
  let output = '';
  books.forEach(function(book){
    const {title, imageUrl, bookUrl, author} = book
    output += `
        <li class="entry">
          <img class="entry__image" src="${imageUrl}" alt="Cover">
          <p class="entry__name">${title} - ${author.name}</p>
          <a href="https://www.goodreads.com/${bookUrl}">Link</a>
        </li>
      `;
    // Output li
    list.innerHTML = output;
  });
}



function getData(url) {
  fetch(url, {
    method: 'POST'
  })
    .then(res => {
      if (res.ok) {
        console.log('success with url fetch response');
        return res.json();
      } else {
        console.log('not successfull')
      }
    })
  // pass data to UI
    .then(data => uiList(data))
    .catch(err => console.log(err));
}
