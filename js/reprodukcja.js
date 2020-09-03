
const PIXEL_COLOR = '#e44d4d';

const originalCanvas = document.querySelectorAll('.original-canvas .pixel');
const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel')

originalCanvas.forEach((element, index) => {
  if(element.classList.contains('pixel-dot')) {
    fakeCanvas[index].classList.add('pixel-dot');
  }
})
