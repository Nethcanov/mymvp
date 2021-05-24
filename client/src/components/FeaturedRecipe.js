import React from "react";
import { Container, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function FeaturedRecipe (props) {

  let data = props.recipeData;

  return (
    <div className="FeaturedRecipe">
      <h1>Featured Recipe</h1>
      { data ? 
      <Container>

        {/* <Card>
          <CardBody>
          <div className = "tags-input">
          <ul>
          <h3>{data.ingredients}</h3>
          </ul>
          <ul>
            {data.ingredients}
          </ul>
          <ul>
            <h3>{data.method}</h3>
          </ul>
          <ul>
            {data.method}
          </ul>
                   
          <Button className="backButton1" style={{ marginBottom: '1rem' }}>Go Back to Recipes</Button>
          </div>
          </CardBody>
          </Card>
           */}

        
      </Container>
  : <h1>Choose a Recipe</h1>  
  }
    </div>
             
  )
}

export default FeaturedRecipe;