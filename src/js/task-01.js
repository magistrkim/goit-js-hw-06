
const getCategoriesNumbers = () => {
  const numberRef = document.querySelectorAll(".item").length;
  console.log(`Number of categories: ${numberRef}`);
};
getCategoriesNumbers();

const titleRef = document.querySelectorAll(".item h2");
const itemNumbersRef = document.querySelectorAll(".item ul");
titleRef.forEach(function (value, index) {
  console.log(`Category: ${value.textContent} 
    Elements: ${itemNumbersRef[index].children.length}`);
});
