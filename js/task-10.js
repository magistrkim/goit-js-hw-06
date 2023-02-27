function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const inputEl = document.querySelector("#controls input");
const createButtonEl = document.querySelector("#controls [data-create]");
const destroyButtonEl = document.querySelector("#controls [data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;
  let boxesAmount = "";
  for (let i = 0; i < amount; i += 1) {
    const bgColor = getRandomHexColor();
    const boxElement = `<div class="box__item" style="background-color: ${bgColor}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxesAmount += boxElement;
    boxSize += 10;
  }
  boxesContainerEl.insertAdjacentHTML("beforeend", boxesAmount);
}

const handleCreateButtonClick = () => {
  const amount = inputEl.value;
  createBoxes(amount);
};

const handleDestroyButtonClick = () => {
  boxesContainerEl.innerHTML = "";
  inputEl.value = "";
};

createButtonEl.addEventListener("click", handleCreateButtonClick);
destroyButtonEl.addEventListener("click", handleDestroyButtonClick);
