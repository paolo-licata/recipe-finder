import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, toggleFavorite, favorites = [] }) {

    const isFavorite = favorites.some((fav) => fav.id === recipe.id);

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.usedIngredients.length} ingredients</p>
            <Link to={`/recipe/${recipe.id}`}>
                <button className="view-btn">View Recipe</button>
            </Link>
            <button onClick={() => toggleFavorite(recipe)} className="fav-btn">
                {isFavorite ? "❤️" : "🤍"}
            </button>
        </div>
    )
}

export default RecipeCard;