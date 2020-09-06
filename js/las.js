//import {Howl, Howler} from 'npm:howler';

//Howler.volume(0.5);

const win = new Audio('http://soundbible.com/mp3/Ta Da-SoundBible.com-1884170640.mp3');
win.volume = 0.01;

const images = {
  treasure: '💰',
  leafs: '🍃'
};

const myEntry = document.querySelector('.entry')
const myWinnerText = document.querySelector('#winner');

/*const sound = new Howl({
  src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3']
});

const myWinnerSong = (e) => {
  sound.play();
  setTimeout(() => {
    console.log("Song stopped.");
    sound.stop();
  }, 4000);
}; */

const myWinnerStatement = (e) => {
  myWinnerText.innerHTML = 'You found the treasure. Congratulations!';
};

const myTreasureFind = (e) => {
  if(e.target.classList.contains('treasure')){
    e.target.innerHTML = images.treasure;
    myWinnerStatement(e);
    win.play();
    //myWinnerSong(e);
  }
  else if(e.target.classList.contains('tree')) {
    e.target.innerHTML = images.leafs;
  }
};

myEntry.addEventListener('mouseover', myTreasureFind);
