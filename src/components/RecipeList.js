import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, toggleFavorite, favorites }) {
    return (
        <div className="recipe-list">
            {recipes.length === 0 ? (
                <p>No recipes found. Try another search!</p>
            ) : (
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} 
                    recipe={recipe}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites} 
                    />
                ))
            )
        }
        </div>
    )
}

export default RecipeList;