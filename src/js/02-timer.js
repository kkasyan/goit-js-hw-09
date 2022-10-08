import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const timerEl = document.querySelector('.timer');
const timerFieldsEl = timerEl.children;
const nf = timerFieldsEl.firstChild;
const numbersEl = document.querySelectorAll('.label');

timerEl.style.display = 'flex';
timerEl.style.fontSize = '20px';
timerEl.style.fontWeight = '500';
// numbersEl.style.paddingLeft = '10px';
// nf.style.display = 'flex';
// nf.style.flexDirection = 'column';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
      btnEl.addEventListener('click', startTimer);
    }
  },
};
const timer = {};
function startTimer(rootSelector, deadline) {
  const data = convertMs(ms);
  function getRefs(rootSelector) {
    const dayValueEl = document.querySelector('span[data-days]');
    const hourValueEl = document.querySelector('span[data-hours]');
    const minuteValueEl = document.querySelector('span[data-minutes]');
    const secondsValueEl = document.querySelector('span[data-seconds]');
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

flatpickr('#datetime-picker', options);
btnEl.disabled = true;

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
