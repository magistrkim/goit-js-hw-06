function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundContainerEl = document.querySelector(".widget");
const colorValueEl = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");


const handleButtonChangeColorClick = () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  colorValueEl.textContent = hexColor;
};

changeColorButtonEl.addEventListener("click", handleButtonChangeColorClick);
