// import { Button } from "bootstrap";
import React from "react";
import { Link } from 'react-router-dom';
import { Container, CardBody, Card, Row, Col } from 'reactstrap';
import { CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import { List } from 'reactstrap';
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
                <Row><CardTitle className="title" tag="h1">{chosen.title}</CardTitle></Row>
                <Row>
                  <Col lg="6" sm="4" xs="6" >
                    <CardSubtitle  className="level" tag="h3">{chosen.level}</CardSubtitle>
                    <CardText  className="ptime" tag="h4">{chosen.prepTime}</CardText>
                    <CardText  className="ctime" tag="h4">{chosen.cookTime}</CardText>
                    <List className="ingredients">
                      <ul>
                        {ingredients.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </List>
                  </Col>

                  <Col lg="6" sm="4" xs="6">
                    <CardImg className="food-image" img src={chosen.image} />
                  </Col>
                </Row>

                <List className="method">
                  <ol>
                    {method.map(m => <li key={m}>{m}</li>)}
                  </ol>
                </List>
                <Link to="/all-recipes" className="back-to-all-recipes" >Go Back to Recipes</Link>
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