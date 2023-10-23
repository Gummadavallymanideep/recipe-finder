// RecipeList.js
import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <div>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Instructions: {recipe.instructions}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
