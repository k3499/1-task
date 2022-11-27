
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

      const timer = setInterval(() =>{
        if(seconds !== 0){
        seconds -= 1;
        let msec = seconds*SEC;
        const hours = Math.floor(msec / HOUR);
        msec -= hours * HOUR;
        const mins = Math.floor(msec / MIN);
        msec -= mins * MIN;
        const secs = Math.floor(msec / SEC);
        timerEl.innerText =`${hours}:${mins}:${secs}`;
        
        }else{
          clearInterval(timer)
        }
      }, 1000);
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/[^0-9]/, '');

    // Очистите input так, чтобы в значении
    // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
