const items = document.querySelectorAll('.item');
const dropAreas = document.querySelectorAll('.area');

items.forEach(item => {
  item.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  });
});

dropAreas.forEach(area => {
  area.addEventListener('drop', (ev) => {
    ev.preventDefault();
    ev.target.appendChild(document.querySelector('#' + ev.dataTransfer.getData('text')));
  });

  area.addEventListener('dragover', (ev) => { ev.preventDefault() });
});
