"use strict";
// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
    .then((res) => res.json())
    .then(({ recipes }) => {
    createRecipes(recipes);
})
    .catch(({ message }) => console.error(message));
function createRecipe(recipe) {
    const { id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags, userId, image, rating, reviewCount, mealType, } = recipe;
    const card = document.createElement('div');
    // console.log(ingredients);
    card.className = 'recipe';
    card.dataset.id = String(id);
    const caption = document.createElement('h3');
    caption.innerText = name;
    card.appendChild(caption);
    const recipeImage = document.createElement('img');
    recipeImage.className = 'recipe__image';
    recipeImage.src = image;
    recipeImage.alt = name;
    recipeImage.loading = 'lazy';
    card.appendChild(recipeImage);
    const ingredientList = document.createElement('ul');
    for (const item of ingredients) {
        const li = document.createElement('li');
        li.innerText = item;
        ingredientList.appendChild(li);
    }
    const propList = document.createElement('dl');
    propList.className = 'recipe__props';
    const dt = document.createElement('dt');
    dt.innerText = 'ingredients';
    propList.appendChild(dt);
    const dd = document.createElement('dd');
    dd.appendChild(ingredientList);
    propList.appendChild(dd);
    Object.entries({
        instructions,
        prepTimeMinutes,
        cookTimeMinutes,
        servings,
        difficulty,
        cuisine,
        caloriesPerServing,
        tags,
        userId,
        rating,
        reviewCount,
        mealType,
    }).forEach(([key, value]) => {
        const dt = document.createElement('dt');
        dt.innerText = key;
        propList.appendChild(dt);
        const dd = document.createElement('dd');
        dd.innerText = String(value);
        propList.appendChild(dd);
    });
    card.appendChild(propList);
    return card;
}
function createRecipes(recipes) {
    const section = document.getElementById('recipes');
    const recipeList = document.createElement('div');
    recipeList.className = 'recipes__list';
    for (const recipe of recipes) {
        recipeList.appendChild(createRecipe(recipe));
    }
    section.appendChild(recipeList);
}
