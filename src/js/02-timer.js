import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

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
const timeDays = document.querySelector('[data-days]');
const timeHours = document.querySelector('[data-hours]');
const timeMinutes = document.querySelector('[data-minutes]');
const timeSeconds = document.querySelector('[data-seconds]');

const options = {
    timerId: null,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    selectedDates = Date.now(input.value);
      console.log(selectedDates[0]);
    },
  };

    const fp = flatpickr(input, options);
    const btnStart = document.querySelector('.js-btnStart');

// btnStart.addEventListener('click', startTimer);
    input.addEventListener('change', getDayX)

function getDayX() {
    timerId = setInterval(() => {
        let backTime = fp.selectedDates[0] - new Date();
        const { days, hours, minutes, seconds } = convertMs(backTime);
        // console.log('backTime:', backTime); 
        console.log('${days} : ${hours} : ${minutes} : ${seconds}'); 

// let currentTime = backTime;
//         let timeDay = currentTime.getDay();
//         let timeHours = currentTime.getHours();
//         let timeMinutes = currentTime.getMinutes();
//         let timeSeconds = currentTime.getSeconds();



        if (backTime <= 0) {
            clearInterval(timerId);
            console.log(`Interval with id ${timerId} has stopped!`);
          }
        }, 1000);
}

function updateFaseTimer({ days, hours, minutes, seconds }){
    timeDays.textContent = '${days}';
    timeHours.textContent = '${hours}';
    timeMinutes.textContent = '${minutes}';
    timeSeconds.textContent = '${seconds}'; 
}


  