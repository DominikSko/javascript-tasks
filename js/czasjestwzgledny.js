const counter = document.querySelector('.counter');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const multiplier = document.querySelector('.multiplier');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');

let counterValue = 0;
let delay = 1000;
let intervalId;
let multiplierValue = 0;
let isRuning = true;

function startTime () {
  intervalId = setInterval (() => {
    counterValue++;
    counter.value = counterValue;
  }, delay);
  isRuning = true;
}

function stopTime () {
  clearInterval(intervalId);
  isRuning = false;
}

function setMultiplier () {
  increment.addEventListener('click', () => {
    multiplierValue >= -2 && multiplierValue <= 1 ? multiplierValue = 2 : multiplierValue ++;
    updateTime()
  })
  decrement.addEventListener('click', () => {
    multiplierValue >= -1 && multiplierValue <= 2 ? multiplierValue = -2 : multiplierValue--;
    updateTime()
  })
}

function updateDelay () {
  multiplierValue < 0 ? delay = 1000 * Math.abs(multiplierValue) : delay = Math.floor(1000 / multiplierValue);
}

function updateTime () {
  multiplier.value = multiplierValue;
  updateDelay()
  if (isRuning) {
    stopTime()
    startTime()
  }
}

setMultiplier();

startBtn.addEventListener('click', () => {
  if (isRuning === false) {
    startTime();
  }
});
stopBtn.addEventListener('click', stopTime);

startTime();
