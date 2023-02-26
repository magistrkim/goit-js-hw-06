let counterValue = 0;
let step = 1;

const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

const handleDecrementButtonEl = () => {
  counterValue -= step;
  valueEl.textContent = counterValue;
};

const handleIncrementButtonEl = () => {
  counterValue += step;
  valueEl.textContent = counterValue;
};

counterEl.firstElementChild.addEventListener("click", handleDecrementButtonEl);
counterEl.lastElementChild.addEventListener("click", handleIncrementButtonEl);
