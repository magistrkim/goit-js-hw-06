function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};
const inputEl = document.querySelector("#controls input");
const createButtonEl = document.querySelector("#controls [data-create]");
const destroyButtonEl = document.querySelector("#controls [data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

// не вистачило мені сили і терпіння на цю задачу.. )))
// але зроблю її для себе 100%
// 