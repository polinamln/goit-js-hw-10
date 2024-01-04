import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const stateInputs = document.querySelectorAll('input[name="state"]');
const inputDelay = document.querySelector('input[name="delay"]');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    cratePromise(event)
};

function cratePromise(event) {
    event.preventDefault();


    const delay = parseInt(inputDelay.value);
    const state = [...stateInputs].find(input => input.checked).value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay)
            } else if (state === 'rejected') {
                reject(delay)
            }

        }, delay);
    });

    promise.then(delay => {
        iziToast.success({
            position: 'topRight',
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
});
    }).catch((delay) => {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
});
    })
    

    form.reset()

};


form.style.width = '300px';
