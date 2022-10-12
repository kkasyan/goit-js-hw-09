import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let positionNum = 0;
  let delayStepCount =
    Number(refs.inputDelay.value) - Number(refs.inputStep.value);

  for (let i = 0; i < Number(refs.inputAmount.value); i += 1) {
    positionNum += 1;
    delayStepCount += Number(refs.inputStep.value);

    createPromise(positionNum, delayStepCount)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
