'use strict';

function addIngredient(recipe, ing, amount) {
  recipe[ing] = amount;
  return recipe;
}

function removeIngredient(recipe, ing) {
  delete recipe[ing];
  return recipe;
}

function updateIngredient(recipe, ing, amount) {
  recipe[ing] = amount;
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log(`this recipe calls for ${recipe[key]} of ${key}`);
  }
}
