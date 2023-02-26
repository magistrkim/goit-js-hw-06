const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");


formInputEl.addEventListener("focus", (event) => {
  event.target.style.outline = "3px solid teal";
});

formInputEl.addEventListener("blur", (event) => {
  event.target.style.outline = "none";
});

formInputEl.addEventListener("input", (event) => {
  event.target.value.trim() === ""
    ? (userNameOutputEl.textContent = `Anonymous`)
    : (userNameOutputEl.textContent = event.target.value);
});
