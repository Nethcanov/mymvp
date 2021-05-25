import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DefaultRecipes from './components/DefaultRecipes';
import './App.css';
import Home from "./components/Home";
import AllRecipes from "./components/AllRecipes";
import FeaturedRecipe from "./components/FeaturedRecipe";


function App () {

  const [ recipes, setRecipes ] = useState(DefaultRecipes); 
  const [ chosenRecipe, setChosenRecipe ] = useState([]);

  const addFeaturedRecipe = (id) => {
    // find recipe with given id
    if(recipes !== null){
      // alert("Recipe Clicked On");// to test - works
      let recipe = recipes.filter(fr => (fr.id === id));
      let newRecipe = {
        id: recipe[0].id + "x",
        title: recipe[0].name,
        prepTime: recipe[0].prepTime,
        cookTime: recipe[0].cookTime,
        level: recipe[0].level,
        ingredients: recipe[0].ingredients,
        method: recipe[0].method,
        image: recipe[0].url
      }
      setChosenRecipe(newRecipe);
    }
  } 
 
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
            <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-link" to="/all-recipes/">All Recipes</Link>
            <Link className="nav-link" to="/featured-recipe">Ingredients and Method</Link>
            </div>
        </div>
          
    </nav>

    {/* <div className="background"></div> */}


    <Switch>

      <Route path="/" exact >
        <Home />
      </Route>
    
      <Route path="/all-recipes" >
        {recipes && <AllRecipes data={recipes} getRecipeCb={(recipe) => addFeaturedRecipe(recipe)}/>}
      </Route>

      <Route path="/featured-recipe" >
        {chosenRecipe && <FeaturedRecipe recipeData={chosenRecipe}/>}
      </Route>
    
      </Switch>

      <footer className="footer text-center p-3 mt-3 text-light" style={{ backgroundColor: 'rgb(168, 162, 163)' }} >
        Original Concept by Paulina Brozek Modified by Jacosta von Achten
      </footer>
    
    </div>
  )
            
}

export default App;

