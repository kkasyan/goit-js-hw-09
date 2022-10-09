import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix, { Notify } from 'notiflix';

const btnEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const timerFieldsEl = timerEl.children;
const date = new Date();
const dayValueEl = document.querySelector('span[data-days]');
const hourValueEl = document.querySelector('span[data-hours]');
const minuteValueEl = document.querySelector('span[data-minutes]');
const secondsValueEl = document.querySelector('span[data-seconds]');

btnEl.disabled = true;

const timer = {
  intervalId: null,
  isActive: false,

  refs: {},
  startTimer() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const timeLeft = Date.parse(selectDate.selectedDates[0]) - Date.now();

      const data = this.convertMs(timeLeft);
      dayValueEl.textContent = this.addLeadingZero(data.days);
      hourValueEl.textContent = this.addLeadingZero(data.hours);
      minuteValueEl.textContent = this.addLeadingZero(data.minutes);
      secondsValueEl.textContent = this.addLeadingZero(data.seconds);

      if (timeLeft <= 1000) {
        // window.alert('The time is up');
        btnEl.disabled = false;
        window.location.reload();
        clearInterval(this.intervalId);
      }
    }, 1000);
  },
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};

timerEl.style.display = 'flex';
timerEl.style.fontSize = '20px';
timerEl.style.fontWeight = '600';
dayValueEl.style.fontWeight = '600';
dayValueEl.style.fontSize = '40px';
hourValueEl.style.fontWeight = '600';
hourValueEl.style.fontSize = '40px';
minuteValueEl.style.fontWeight = '600';
minuteValueEl.style.fontSize = '40px';
secondsValueEl.style.fontWeight = '600';
secondsValueEl.style.fontSize = '40px';
for (const fields of timerFieldsEl) {
  fields.style.padding = '10px';
  fields.style.paddingTop = '30px';
  fields.style.display = 'flex';
  fields.style.flexDirection = 'column';
  fields.style.textAlign = 'center';
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= date) {
      Notiflix.Notify.warning('Please choose a date in the future');
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
    }
  },
};

function onStart() {
  timer.startTimer();
  btnEl.disabled = true;
}

const selectDate = flatpickr('#datetime-picker', options);
btnEl.addEventListener('click', onStart);
