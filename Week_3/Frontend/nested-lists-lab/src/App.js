import { recipesData } from "./recipesData.js";
import Recipe from "./components/Recipe";

export default function RecipeList() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipesData.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
