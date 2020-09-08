const modules = document.querySelectorAll('tbody tr');
const duration = document.querySelector('th a');

const changeOrder = () => {
  const sortedArray = [];

  modules.forEach(module => { sortedArray.push(module) });
  sortedArray.sort((a, b) => parseInt(a.querySelector('td:last-of-type').textContent.split(':').join('')) - parseInt(b.querySelector('td:last-of-type').textContent.split(':').join('')));

  return sortedArray;
};

const processModules = () => {
  const arrow = duration.firstElementChild;
  const innerHtmlArray = [];

  const sortedArray = arrow.classList.contains('fa-caret-up') ? changeOrder() : changeOrder().reverse();

  sortedArray.forEach(module => { innerHtmlArray.push(module.innerHTML) });

  modules.forEach((module, i) => {
    module.innerHTML = innerHtmlArray[i];
  });

  arrow.classList.toggle('fa-caret-down');
  arrow.classList.toggle('fa-caret-up');
};

const convertTime = () => {
  const time = document.querySelectorAll('td:last-child');
  const newTime = [];

  const hour = (time) => { return Math.floor(time / 3600) };
  const min = (time) => { return Math.floor((time % 3600) / 60) };
  const sec = (time) => { return Math.floor(time % 60) };

  time.forEach(el => {
    newTime.push(`${hour(el.innerHTML)}:${min(el.innerHTML)}:${sec(el.innerHTML)}`);
  });

  time.forEach((el, i) => { el.textContent = newTime[i] });
};

convertTime();
duration.addEventListener('click', processModules);
