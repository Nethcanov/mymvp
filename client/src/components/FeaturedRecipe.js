import React from "react";
import { Link } from 'react-router-dom';
import { Container, CardBody, Card, Row, Col, CardImg, CardText, CardSubtitle, CardHeader, List } from 'reactstrap';
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
                <CardHeader className="title" tag="h1">{chosen.title}</CardHeader>
                <Row>

                  <Col className="image-col" lg="6" sm="12" xs="12">
                    <CardImg className="food-image" img src={chosen.image} />
                  </Col>

                  <Col className="ing-level-time-info" lg="6" sm="12" xs="12" >

                    <CardSubtitle  className="level" tag="h3">{chosen.level}</CardSubtitle>
                    <CardText  className="ptime" tag="h4">{chosen.prepTime}</CardText>
                    <CardText  className="ctime" tag="h4">{chosen.cookTime}</CardText>

                    <List className="ingredients">
                      <CardSubtitle tag="h3"><strong>Ingredients:</strong></CardSubtitle>
                      <ul className="ing-list">
                        {ingredients.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </List>

                  </Col>
                </Row>

                <List className="method">

                <CardSubtitle tag="h3"><strong>Method:</strong></CardSubtitle>
                  <ol className="mth-list">
                    {method.map(m => <li key={m}>{m}</li>)}
                  </ol>

                </List>

                <Link to="/all-recipes" className="  back-to-all-recipes  " ><strong>Go Back to Recipes</strong></Link>
              </CardBody>
            </Card>
          }
        </Container>
        : 
        <div>
          <Link to="/all-recipes" className="choose-a-recipe"  ><strong>  Go Back and Choose a Recipe  </strong></Link>
        </div>
      }
    </div>
             
  )
}

export default FeaturedRecipe;