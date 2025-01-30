import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

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

  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <Routes>
          {/* Home Page - Search and recipe list*/}
          <Route path="/" element={
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
              <RecipeList recipes={recipes} />
            </>
          } />

          {/* Recipe Detail Page */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;