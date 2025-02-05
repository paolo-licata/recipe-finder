import React from "react";
import { Link, useLocation } from "react-router-dom";

// Separate Layout component to condituonally display the title and navbar
  //Using useLocation to get the current location and avoid displaying the title and navbar
  //when the user is on Welcome page
const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="App">
          {location.pathname !== "/welcome" && (
            <>
              <h1>What's for dinner?</h1>
              <nav>
                <Link to="/">Welcome</Link>
                <Link to="/home">Home</Link>
                <Link to="/favorites">Favorites</Link>
              </nav>
            </>
          )}
          {children}
        </div>
    )
}

export default Layout;