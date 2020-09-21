const pageButton = document.querySelector('.page-button');
const modalBody = document.querySelector('.main-modal');

pageButton.addEventListener('click', openModal);
document.addEventListener('click', closeModal);

function openModal() {
  modalBody.classList.remove('invisible');
}

function closeModal({target: clickedElement}) {
  if(checkConditions(clickedElement)){
    modalBody.classList.add('invisible');
  }
}

function checkConditions(clickedElement) {
  const isAuthorizedToModalClose = clickedElement.classList.contains('modal-close');
  const isMainModalSurroundings = clickedElement.classList.contains('main-modal');
  const isModalExitButton = clickedElement.closest('.modal-close');

  const conditions = [isAuthorizedToModalClose, isMainModalSurroundings, isModalExitButton];

  return conditions.some(condition => condition);
}
