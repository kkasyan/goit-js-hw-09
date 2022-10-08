const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', colorBackground);
btnStopEl.addEventListener('click', stopChangingColor);

let interval = null;

function colorBackground() {
  interval = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    btnStartEl.disabled = true;
  }, 1000);
}

function stopChangingColor() {
  clearInterval(interval);
  btnStartEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
