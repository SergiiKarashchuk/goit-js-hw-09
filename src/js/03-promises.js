import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', startGame);

function startGame(evt) {
  evt.preventDefault();


  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);


for (let position = 0; position <= amount; position += 1) {
createPromise(position, delay)
.then(({ position, delay }) => {
    setTimeout (() =>{
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }, delay);
})
.catch(({position, delay}) => {
  setTimeout (() =>{
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }, delay);
});
delay += step;
}
evt.target.reset();
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = {position, delay};

  return new Promise((res, rej) => {
      if (shouldResolve) {
        res(promise)
      } else {
        rej(promise)
      }
    });
  }
