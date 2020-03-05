const kick = document.createElement('audio');
kick.src = '../../sounds/kick.mp3';
const snare = document.createElement('audio');
snare.src = '../../sounds/snare.mp3';
const crash = document.createElement('audio');
crash.src = '../../sounds/crash.mp3';

const buttons = document.querySelectorAll('button');

buttons.forEach(function(thing, i) {
  console.log('i', i);
  thing.addEventListener('click', function() {
    console.log('you click the button connected to', i);
    choseSound(i);
  });
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyJ') {
    choseSound(0);
  }
  if (event.code === 'KeyK') {
    choseSound(1);
  }
  if (event.code === 'KeyI') {
    choseSound(2);
  }
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function choseSound(sound) {
  switch (sound) {
    case 0:
      playSound(kick);
      break;
    case 1:
      playSound(snare);
      break;
    case 2:
      playSound(crash);
      break;
  }
}
