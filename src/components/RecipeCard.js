import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.usedIngredients.length} ingredients</p>
            <Link to={`/recipe/${recipe.id}`}>
                <button>View Recipe</button>
            </Link>
        </div>
    )
}

export default RecipeCard;