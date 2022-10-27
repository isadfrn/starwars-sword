const swordOnAudioUrl = 'https://www.myinstants.com/media/sounds/lightsaber_02.mp3';
const swordOnAudio = new Audio(swordOnAudioUrl);
const swordBody = document.querySelector('.sword__body');

function playSwordAudio(audio) {
  audio.play();
}

function powerOn() {
  if (swordBody.classList.contains('on')) {
    swordBody.classList.remove('on');
  } else {
    swordBody.classList.add('on');
    playSwordAudio(swordOnAudio);
  }
}
