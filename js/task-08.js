const formEl = document.querySelector(".login-form");
const emailInputEl = formEl.elements.email;
const passwordInputEl = formEl.elements.password;

const handleFormInput = (event) => {
  const inputData = {
    email: emailInputEl.value,
    password: passwordInputEl.value,
  };
  event.preventDefault();
  if (emailInputEl.value !== "" && passwordInputEl.value !== "") {
    console.log(inputData);
    event.target.reset();
    return;
  }
  alert(`All fields are required to be filled`);
};

formEl.addEventListener("submit", handleFormInput);
