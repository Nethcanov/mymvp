import React from "react";
import { Link } from 'react-router-dom';
import { Container, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function FeaturedRecipe (props) {

  let chosen = props.recipeData;

  return (
    <div className="FeaturedRecipe">
      <h1>Featured Recipe</h1>
      { chosen ? 
      <Container>
        {/*says data.map is not a function*/} 
          {
            <Card>
            <CardBody key={chosen.id}>
              <CardTitle tag="h3">{chosen.title}</CardTitle>
              <CardSubtitle>{chosen.level}</CardSubtitle>
              <CardText>{chosen.prepTime}{chosen.CookTime}</CardText>
              <CardImg img src={chosen.image} />
            {/* <ul>
             <li>{chosen.ingredients}</li>
            </ul>
            <ol>
              <li>{chosen.method}</li>
            </ol> */}
            <Link to="/all-recipes" className="back-to-all-recipes" >Go Back to Recipes</Link>
            </CardBody>
            </Card>
          }
        
      </Container>
  : <h1>Choose a Recipe</h1>  
  }
    </div>
             
  )
}

export default FeaturedRecipe;