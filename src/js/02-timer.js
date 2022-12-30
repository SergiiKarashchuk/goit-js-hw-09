import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const fp = flatpickr(input);

const btnStart = document.querySelector('.js-btnStart');
// btnStart.addEventListener('click', startTimer);
input.addEventListener('change', getDayX)


const startTime = Date.now();
console.log('startTime:', startTime);


setInterval(() => {
const currentTime = Date.now();
const ms = currentTime - startTime;
const timeComponents = convertMs(ms) 
console.log('timeComponents:', timeComponents);  
}, 1000);

function getDayX() {
    const selectedDate = Date.now(input.value);
    console.log('selectedDate:', selectedDate);
  };



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
  