import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DefaultRecipes from './components/DefaultRecipes';
import './App.css';
import Home from "./components/Home";
import AllRecipes from "./components/AllRecipes";
import FeaturedRecipe from "./components/FeaturedRecipe";


function App () {

  const [recipes, setRecipes] = useState(DefaultRecipes); // get all data from DefaultProjects
 
  return (   
    <div className="App">
    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgb(153, 133, 36)' }}>
        {/* "Brand"/Logo */}
        <a className="navbar-brand" href="brand"><strong>Food!</strong></a>
       

        {/* Hamburger Icon */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {   /* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <Link className="nav-link" to="/all-recipes/">All Recipes</Link>
              <Link className="nav-link" to="/featured-recipe">Ingredients and Method</Link>
            </div>
        </div>
          
    </nav>

    <Switch>

      <Route path="/" exact >
        <Home />
      </Route>

      <Route path="/all-recipes" >
        <AllRecipes data={recipes}/>
        
      </Route>

      <Route path="/featured-recipe" >
        <FeaturedRecipe />
        
      </Route>
    
      </Switch>

      <footer className="footer text-center p-3 mt-3 bg-secondary text-light"  >
        Original Concept by Paulina Brozek Modified by Jacosta von Achten
      </footer>
    
    </div>
  )
            
}

export default App;

