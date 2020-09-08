const storage = localStorage;

const button3 = document.querySelector('.shurebutton');

function hideMonster() {
  if (storage.getItem("shure")) {
    const monster = document.querySelector('.monster');
    const notification = document.querySelector('.cookie');

    monster.style.display = 'none';
    notification.style.display = 'none';
  }
}

button3.addEventListener('click', () => {
  storage.setItem("shure", true);

  hideMonster();
});

hideMonster();
