import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

const refs = {
    timer: document.querySelector('.timer'),

    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),

    startBTN: document.querySelector('[data-start]'),

    input: document.querySelector("#datetime-picker"),

    divEls: document.querySelectorAll('div.field'),
    spanValues: document.querySelectorAll('span.value')
};


refs.startBTN.disabled = true;
refs.input.disabled = false;


refs.startBTN.addEventListener('click', handleSubmit)

const tost = (errorMessage) => {
    iziToast.error({
    title: 'Error',
    message: errorMessage,
});
} 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate < new Date()) {
            tost('Please choose a date in the future.')
        } else if (selectedDate > new Date()) {
            refs.startBTN.disabled = false;
        }
    console.log(selectedDates[0]);
  },
};

const picker = flatpickr(refs.input, options);

function handleSubmit() {
    const selectedDate = picker.selectedDates[0];
    refs.startBTN.disabled = true;
    refs.input.disabled = true;
    const endTime = selectedDate.getTime();
    updateTimer(endTime);
};

function addLeadingZero(value) {
    return value < 10 ? value.toString().padStart(2, "0"): value.toString();
}


function updateTimer(endTime) { 
    

    const intervalId = setInterval(() => {
       const currentTime = new Date().getTime(); 
       const timeLeft = endTime - currentTime;
       const { days, hours, minutes, seconds } = convertMs(timeLeft);

    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
    

    if (timeLeft < 0) {
        clearInterval(intervalId);
        refs.days.textContent = "00";
        refs.hours.textContent = "00";
        refs.minutes.textContent = "00";
        refs.seconds.textContent = "00";
        return
    }; 
    }, 1000);

    
};

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



refs.timer.style.display = 'flex';
refs.timer.style.gap = '15px';

refs.spanValues.forEach(spanValue => {
    spanValue.style.fontSize = '30px'
})

refs.divEls.forEach(divEl => {
    divEl.style.display = 'flex';
    divEl.style.flexDirection = 'column';
    divEl.style.alignItems = 'center';
});
