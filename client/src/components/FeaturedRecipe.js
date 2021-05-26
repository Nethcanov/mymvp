import React from "react";
import { Link } from 'react-router-dom';
import { Container, CardBody, Card, Row, Col } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function FeaturedRecipe (props) {

  let chosen = props.recipeData;
  let ingredients = chosen.ingredients;
  let method = chosen.method;

  return (
    <div className="FeaturedRecipe">
      <h1>Featured Recipe</h1>
      { chosen ? 
      <Container className="featuredRecipeCard" width="40rem" height="68rem">
          {
            <Card width="40rem" height="68rem">
            <CardBody key={chosen.id}>
              <Row>
              <Col>
                <CardTitle tag="h3">{chosen.title}</CardTitle>
                <CardSubtitle>{chosen.level}</CardSubtitle>
                <CardText>{chosen.prepTime}{chosen.CookTime}</CardText>
                <div className="ingredients">
                {/* {ingredients.map(i => ( */}
                <ul>
                  {ingredients.map(i => <li key={i}>{i}</li>)}
                </ul>
                
            {/* ))} */}
              </div>
              </Col>
              <Col>
                <CardImg img src={chosen.image} />
              </Col>
              </Row>
              
            
              <div className="method">
                <ol>
                  {method.map(m => <li key={m}>{m}</li>)}
                </ol>
              </div>
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