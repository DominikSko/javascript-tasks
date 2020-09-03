const directions = {
  top: '🔼',
  bottom: '🔽'
}

const direction = document.querySelector('.direction');
const elevator = document.querySelector('.elevator');

const floorLevel = (pixels) => {
  const highestFloor = 10;
  const sumFloors = parseInt((elevator.scrollTop + 76) / 150);
  return highestFloor - sumFloors;
};

elevator.addEventListener('wheel', (event) =>{
  if(event.wheelDelta > 0) {
    direction.textContent = `Kierunek: ${directions.top} Piętro: ${floorLevel(elevator.scrollTop)}`;
  }else if(event.wheelDelta < 0) {
    direction.textContent = `Kierunek: ${directions.bottom} Piętro: ${floorLevel(elevator.scrollTop)}`;
  }
});
