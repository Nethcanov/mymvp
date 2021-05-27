import React from "react";
import { Container, Row, Col, Button,  Card } from 'reactstrap';
import {CardImg,  CardTitle } from 'reactstrap';
import "./AllRecipes.css";


function AllRecipes(props){

    let data = props.data;

    return (

        <div className="AllRecipes">   
            { data ? 
                <Container className="allRecipeCards">
                <Row className="card-rows" height= "280px">
                    {data.map(r => (
                        <Col lg="3" sm="4" xs="8.offset-xs-1" key={r.id}>
                            <Card className="recipe-card" > 
                                <CardTitle className="recipe-title" tag="h6">{r.name}</CardTitle> 
                                <CardImg className="image" img src={r.url} alt="Card image cap" alt={r.title}/>
                                <Button className="Button" onClick={(e) => props.getRecipeCb(r.id)}>Open Recipe</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                </Container>
            : <h1>You have no recipes!</h1>
            }
                 
        </div>
    )
}

export default AllRecipes;