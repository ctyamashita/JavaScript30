// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (audio) {
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
//   }
// };

// function removeTransition(e) {
//   if (e.propertyName === 'transform' || this.classList.contains('playing')) {
//     this.classList.remove('playing');
//   }
// };

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
};

const removeTransition = (e) => {
  if (e.propertyName === 'transform' || e.target.classList.contains('playing')) {
    e.target.classList.remove('playing');
  }
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
