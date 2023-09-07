import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORE_KEY = 'feedback-form-state'

form.addEventListener('input', throttle(storeData, 500));
form.addEventListener('submit', submitData);
loadData();

function loadData() {
    if (localStorage.length !== 0) {
        email.value = JSON.parse(localStorage.getItem(STORE_KEY)).email;
        message.value = JSON.parse(localStorage.getItem(STORE_KEY)).message;
    }
}

function storeData() {
  localStorage.setItem(STORE_KEY, JSON.stringify({email: email.value, message: message.value}));
}

function submitData(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill all fields.');
  }

  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORE_KEY);
}