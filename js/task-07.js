const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputFontSizeControlEl.value + 'px';

inputFontSizeControlEl.addEventListener('input', event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
});
