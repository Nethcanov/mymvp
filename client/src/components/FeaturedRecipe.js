import React from "react";
import { Link } from 'react-router-dom';
import { Container, CardBody, Card, Row, Col } from 'reactstrap';
import { CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
// import { ListGroup, ListGroupItem} from 'reactstrap';
import "./FeaturedRecipe.css";

function FeaturedRecipe (props) {

  let chosen = props.recipeData;
  let ingredients = chosen.ingredients;
  let method = chosen.method;

  return (
    <div className="FeaturedRecipe">
      { chosen && ingredients && method ? 
      <Container className="featuredRecipeCard">
          {
            <Card width="" height="">
            <CardBody key={chosen.id}>
              <Row>
              <Col lg="6" sm="4" xs="6" >
                <CardTitle tag="h2">{chosen.title}</CardTitle>
                <CardSubtitle tag="h3">{chosen.level}</CardSubtitle>
                <CardText tag="h3">{chosen.prepTime}{chosen.CookTime}</CardText>

                <div className="ingredients">
                <ul>
                  {ingredients.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>

              <Link to="/all-recipes" className="back-to-all-recipes" >Go Back to Recipes</Link>
              </Col>

              <Col lg="6" sm="4" xs="6">
                <CardImg className="food-image" img src={chosen.image} />
              </Col>
              </Row>

              <div className="method">
                <ol>
                  {method.map(m => <li key={m}>{m}</li>)}
                </ol>
              </div>
              
            </CardBody>
            
            
            
            
            </Card>
          }
        
      </Container>
  : <h1 style={{ color: 'rgb(153, 133, 36)' , marginTop: 50 +"px" }}>Please Go Back to All Recipes and Choose Something to Cook</h1> 
  
  }
    </div>
             
  )
}

export default FeaturedRecipe;