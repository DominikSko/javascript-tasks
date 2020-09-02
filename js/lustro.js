const text = document.querySelector('.text-input');
const mirror = document.querySelector('.mirror');

text.addEventListener('keyup', () => {
  mirror.textContent = text.value.split('').reverse().join('');
});
