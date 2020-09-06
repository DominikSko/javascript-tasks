const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.keyboard__button');

let key = '';

display.textContent = 'Wprowadź kod';

buttons.forEach(button => {
  if (button.dataset.value == 99) {
    button.addEventListener('click', () => {
      display.textContent = key;
    });
  } else if (button.dataset.value == -99) {
    button.addEventListener('click', () => {
      key = '';
      display.textContent = 'Wyczyszczono kod';
    });
  } else {
    button.addEventListener('click', () => {
      display.textContent = '.....';
      key += button.dataset.value;
    });
  }
});
