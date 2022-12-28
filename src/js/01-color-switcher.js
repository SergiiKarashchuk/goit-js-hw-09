const btnStartEl = document.querySelector('.js-btnStart');
const btnStopEl = document.querySelector('.js-btnStop');

btnStartEl.addEventListener('click', onStartClick);
function onStartClick() {
    timerId = setInterval(() => {
        btnStartEl.disabled = true;
        document.body.style.background = getRandomHexColor();
    console.log(document.body.style.background);
      }, 1000);
}

btnStopEl.addEventListener('click', onStopClick);
function onStopClick() {
    clearInterval(timerId);
    btnStartEl.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }