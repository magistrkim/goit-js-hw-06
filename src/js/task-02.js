const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const makeIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.classList.add("item");
    itemRef.textContent = ingredient;

    return itemRef;
  });
};

const itemsArrayNew = makeIngredientsList(ingredients);
ingredientsList.append(...itemsArrayNew);
