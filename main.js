const secondsHand = document.querySelector('#seconds-hand');
const minutesHand = document.querySelector('#minutes-hand');
const hoursHand = document.querySelector('#hours-hand');
const currentTime = document.querySelector('#current-time');
const currentDate = document.querySelector('#current-date');
const toggleIcon = document.querySelector('#toggle i');

// initial date
currentDate.textContent = `${new Date().toLocaleDateString()}`;

// set clock
setInterval(setClock, 1000);

// check prefered color scheme
const isPreferedColorSchemeDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;
if (!isPreferedColorSchemeDark) document.body.classList.add('light-mode');

// toggle light mode
toggleIcon.addEventListener('click', () =>
  document.body.classList.toggle('light-mode')
);

function setClock() {
  const date = new Date();

  const secondsHandDeg = (date.getSeconds() * 6) % 360;
  const minutesHandDeg = (date.getMinutes() * 6) % 360;
  const hoursHandDeg = (date.getHours() * 30) % 360;

  secondsHand.style.transform = `rotate(${secondsHandDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesHandDeg}deg)`;
  hoursHand.style.transform = `rotate(${hoursHandDeg}deg)`;

  currentTime.textContent = `${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }`;
}
