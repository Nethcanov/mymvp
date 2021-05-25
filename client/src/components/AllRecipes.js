import React from "react";
import { Container, Row, Col, Button,  Card } from 'reactstrap';
import {CardImg,  CardTitle, CardText } from 'reactstrap';
// onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }} 
function AllRecipes(props){

    let data = props.data;
    
    return (

        <div className="AllRecipes">
            {/* <h1>Click on a Jamie Oliver recipe to view the ingredients and cooking instructions</h1> */}
      
            { data ? 
                <Container>
                <Row>
                    {data.map(r => (
                        <Col lg="3" sm="4" xs="6" key={r.id}>
                            <Card width="16rem" height="28rem"> 
                                <CardTitle tag="h6">{r.name}</CardTitle> 

                                <CardImg img src={r.url} alt="Card image cap" height= "200" width="200" alt={r.title}/>
                                <Button className="Button" onClick={(e) => props.getRecipeCb(r.id)} >Open Recipe</Button>
                            
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