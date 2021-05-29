import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <Container className="headingContainer">
                <h1 className="heading" >Choose It</h1>
                <Link to="/all-recipes" className="home-link"  ><strong>Go To All Recipes</strong></Link>
                <h1 className="heading" >Make It</h1>
                <Link to="/featured-recipe" className="home-link"  ><strong>Ingredients & Method</strong></Link>
                <h1 className="heading" >Eat It</h1>
            </Container>
        </div>
    )
}

export default Home;
