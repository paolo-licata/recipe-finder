import React from "react";
import { useNavigate } from "react-router-dom";
import "../Welcome.css";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome">
            <h2>Welcome to the Foodie-Lens!</h2>
            <p>Find delicious recipes using the ingredients you have at home.</p>
            <p>Simply enter the ingredients currently in your fridge and let <span>Foodie-Lens</span> find your next meal.</p>
            <p>Don't forget to save your favorite recipes!</p>
            <button onClick={() => navigate("/home")}>Get Started</button>
        </div>
    )
}

export default Welcome;