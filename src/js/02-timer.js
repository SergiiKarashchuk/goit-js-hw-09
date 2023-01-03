import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');


const refs = {
timeDays: document.querySelector('span[data-days]'),
timeHours: document.querySelector('span[data-hours]'),
timeMinutes: document.querySelector('span[data-minutes]'),
timeSeconds: document.querySelector('span[data-seconds]'),
}
let intervalId = null;
let backTime;

startBtn.disabled = false;
const currentDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
     if (selectedDates[0] - currentDate <= 0) {
      Notify.failure("Please choose a date in the future");
      startBtn.disabled = true;
    };
    if (selectedDates[0] - currentDate > 0) {
      Notify.success('You have selected date in the future');
      startBtn.disabled = false;
    };

  }
}

    const fp = flatpickr(input, options);

    startBtn.addEventListener('click', startTimer);

    function startTimer() {
intervalId = setInterval (() => {
  backTime = fp.selectedDates[0] - new Date();
  const dataUpdateTime = convertMs(backTime);
  updateFaseTimer(dataUpdateTime) 

  

console.log(backTime);

  if (backTime <= 900) {
    clearInterval(intervalId);
    alert("The time has come");
  }
}, 1000);
    }

    function updateFaseTimer({ days, hours, minutes, seconds }){
      refs.timeDays.textContent = days;
      refs.timeHours.textContent = hours;
      refs.timeMinutes.textContent = minutes;
      refs.timeSeconds.textContent = seconds; 
  }
