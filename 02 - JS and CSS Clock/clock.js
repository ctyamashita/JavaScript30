const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const displayTime = document.querySelector('.current-time');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const day = now.getDay();
  const month = now.getMonth();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  if (secondsDegrees === 90) { secondHand.style.transition = '0s' }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  secondHand.style.transition = 'all 0.05s'
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  displayTime.innerHTML = `<p>${now.toDateString()}</p><p>${now.toLocaleTimeString()}</p>`
};

setInterval(setDate, 1000);
