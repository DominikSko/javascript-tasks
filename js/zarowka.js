const bulb = document.querySelector('.bulb');
const checkLight = document.querySelector('#light-toggle');

checkLight.addEventListener('click', () => {
  bulb.classList.toggle('bulb--on');
});
