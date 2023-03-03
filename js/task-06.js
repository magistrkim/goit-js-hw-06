const formInputEl = document.querySelector('#validation-input');

const dataLength = Number(formInputEl.getAttribute('data-length'));

const handleInputFormValidation = event => {
  if (event.target.value.trim().length === dataLength) {
    formInputEl.classList.add(`valid`);
    formInputEl.classList.remove(`invalid`);
  } else if (event.target.value.trim().length === 0) {
    formInputEl.classList.remove(`valid`);
    formInputEl.classList.remove(`invalid`);
  } else {
    formInputEl.classList.remove(`valid`);
    formInputEl.classList.add(`invalid`);
  }
};
formInputEl.addEventListener('blur', handleInputFormValidation);
