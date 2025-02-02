import React from "react";
import RecipeCard from "./RecipeCard";

function Favorites({ favorites, toggleFavorite }) {
    return (
        <div className="favorites-page">
            <h2>My Favorite Recipes</h2>
            {favorites.length === 0 ? (
                <p>No favorite dishes yet. Add some!</p>
            ) : (
                <div className="recipe-list">
                    {favorites.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            toggleFavorite={toggleFavorite}
                            favorites={favorites}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favorites;