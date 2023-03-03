const getCategoriesNumbers = () => {
  const numberEl = document.querySelectorAll('.item').length;
  console.log(`Number of categories: ${numberEl}`);
};

getCategoriesNumbers();

const itemElements = document.querySelectorAll('.item');
itemElements.forEach(item => {
  const titleEl = item.firstElementChild;
  const itemNumbersEl = item.lastElementChild;
  console.log(`Category: ${titleEl.textContent} 
    Elements: ${itemNumbersEl.children.length}`);
});
