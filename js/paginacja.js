const container = document.querySelector(".container");
const contacts = document.querySelectorAll(".contact-item");
const prevBtn = document.querySelector(".prev-link");
const nextBtn = document.querySelector(".next-link");
const pagination = document.querySelector(".links");
const contactsAmount = contacts.length;
const visibleAmount = 2;
let shiftContacts = 0;

const toggleActiveLink = () => {
  document.querySelectorAll(".page-index").forEach((el, index) => {
    if (index !== shiftContacts / visibleAmount) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
};

const renderContacts = () => {
  nextAndPrev();
  toggleActiveLink();

  container.innerHTML = "";
  let index = shiftContacts;
  const check = visibleAmount + shiftContacts;

  while (index < check) {
    if (!contacts[index]) {
      return;
    }
    container.appendChild(contacts[index]);
    index++;
  }
};

const nextAndPrev = () => {
  if (shiftContacts <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (shiftContacts >= contactsAmount - visibleAmount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
};

const changePage = (e) => {
  const pageNumber = parseInt(e.target.textContent);

  if (e.target.textContent === nextBtn.textContent.trim()) {
    shiftContacts += visibleAmount;
  } else if (e.target.textContent === prevBtn.textContent.trim()) {
    shiftContacts -= visibleAmount;
  } else {
    shiftContacts = pageNumber * visibleAmount - visibleAmount;
  }

  renderContacts();
};

const renderLinks = (i) => {
  const pagesAmount =(contactsAmount % visibleAmount === 0)
      ? contactsAmount / visibleAmount
      : Math.floor(contactsAmount / visibleAmount) + 1;

  for (let i = 1; i <= pagesAmount; i++) {
    const pageLink = document.createElement("li");
    pageLink.className ="page-index relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200";
    pageLink.innerHTML = ` <a class="page-link" href="#">${i}</a>`;
    pagination.insertBefore(pageLink, nextBtn);
  }
};

renderLinks();
renderContacts();

document
  .querySelectorAll(".page-link")
  .forEach((el) => el.addEventListener("click", changePage));
