import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=39865b07c21b43888a32e81080e595a3`);
                setRecipe(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        }
     fetchRecipeDetails();
    }, [id]);

    if (loading) return <p>Loading recipe details...</p>
    if (!recipe) return <p>Recipe not found!</p>

    return (
        <div className="recipe-detail">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <h3>Ingredients:</h3>
            <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <div className="recipe-instructions">
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
            <Link to="/">
                <button>Back to Search</button>
            </Link>
            <Link to="/favorites">
                <button>Back to Favorites</button>
            </Link>
        </div>
    )
}

export default RecipeDetail;