
import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTeatareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTeatareaInput() {
    const formDate = {
        email: email.value,
        message: message.value,
      }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}

function populateTextarea() {
   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
   if (data) {
    email.value = data.email;
    message.value = data.message;
   }
}
populateTextarea();