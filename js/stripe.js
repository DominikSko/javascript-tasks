import { glossier, charityWater, lyft, slack } from "./clients.js";

let backgroundImage = document.querySelector('img')
let logoOnImage = document.querySelector('.logo-container')
let aboutClient = document.querySelector('.introduction')
let imgFilter = document.querySelector('.filter')

let switchTabs = document.querySelector('.tabs').children
let prevButton = document.querySelector('.prev')
let nextButton = document.querySelector('.next')

let clients = [slack, glossier, charityWater, lyft]
let currentPos = 0;

nextButton.addEventListener('click', next)
prevButton.addEventListener('click', prev)

Array.from(switchTabs).forEach((button, idx) => {
  button.addEventListener('click', (e) => {
    e.target === button.firstElementChild ? currentPos = idx : null
    slide()
  })
})

function next() {
  currentPos === 3 ? currentPos = 0 : currentPos++
  slide('next')
}

function prev() {
  currentPos === 0 ? currentPos = 3 : currentPos--
  slide('prev')
}

function slide(event) {
  let animation;
  event === 'next' ? animation = 'next__anim'
    : event === 'prev' ? animation = 'prev__anim'
    : animation = 'anim'

    aboutClient.style.transition = 'height .5s ease-in-out'

    aboutClient.classList.add(animation)
    logoOnImage.classList.add(animation)

    imgFilter.style.transition = 'background .5s ease-in-out'
    imgFilter.style.background = clients[currentPos].bg_color

    setTimeout(() => {
      backgroundImage.src = clients[currentPos].img
    logoOnImage.innerHTML = clients[currentPos].logo
    aboutClient.innerHTML = clients[currentPos].text
    }, 300)

    setTimeout(() => {
      aboutClient.classList.remove(animation)
      logoOnImage.classList.remove(animation)
      }, 500)


}
