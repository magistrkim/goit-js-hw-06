function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};
const inputEl = document.querySelector("#controls input");
const createButtonEl = document.querySelector("#controls [data-create]");
const destroyButtonEl = document.querySelector("#controls [data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("box__item");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxesContainerEl.appendChild(boxEl);
    boxSize += 10;
  }
};

const handleCreateButtonClick = () => {
  const amount = inputEl.value;
  createBoxes(amount);
};

const handleDestroyButtonClick = () => {
  boxesContainerEl.innerHTML = '';
};

createButtonEl.addEventListener("click", handleCreateButtonClick);
destroyButtonEl.addEventListener("click", handleDestroyButtonClick);