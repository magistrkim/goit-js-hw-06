function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundContainerEl = document.querySelector(".widget");
const valueEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");


const handleButtonChangeColorClick = () => {
  backgroundContainerEl.style.backgroundColor = getRandomHexColor();
  valueEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener("click", handleButtonChangeColorClick);
