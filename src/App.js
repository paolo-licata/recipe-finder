import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Welcome from "./components/Welcome";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/Favorites";
import Layout from "./components/Layout";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

//Load favorites dishes from local storage when the app starts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];    
    if (savedFavorites.length > 0) {
      setFavorites(savedFavorites);
    }
  }, []);

  //Save favoites to Local Storage when saved array changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = () => {
    if (ingredients.trim() === "") {
      alert("Please enter some ingredients.");
      return;
    }
  
    //Call the API to fetch the recipes based on the ingredient searched
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=39865b07c21b43888a32e81080e595a3`)
    .then((response) => {
      setRecipes(response.data);
    })
    .catch( error => {
      console.log('Error fetching recipes:', error);
    });
  }

  const toggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id)); //Remove from favorite array
    } else {
      setFavorites([...favorites, recipe]); //Add to favorite array
    }
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* Home Page - Search and recipe list*/}
          <Route path="/home" element={
            <>
              <div className="search-bar">
                <input 
                  type="text"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="Enter the ingredients you have (e.g. chicken, beef, tomatoes)"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              <RecipeList 
                recipes={recipes} 
                toggleFavorite={toggleFavorite} 
                favorites={favorites}
              />
            </>
          } />

          {/* Recipe Detail Page */}
          <Route path="/recipe/:id" element={<RecipeDetail toggleFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/favorites" element={<Favorites toggleFavorite={toggleFavorite} favorites={favorites} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;