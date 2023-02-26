const inputSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeControlEl.addEventListener("input", () => {
  textEl.style.fontSize = inputSizeControlEl.value + "px";
});
