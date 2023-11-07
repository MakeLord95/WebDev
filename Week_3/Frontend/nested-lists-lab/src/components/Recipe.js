import React from "react";

export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </div>
  );
}
