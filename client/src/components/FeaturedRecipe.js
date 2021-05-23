import React from "react";
// import { Button, CardBody, Card } from 'reactstrap';
// import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function FeaturedRecipe (props){

    return (
        <div>
        <h1>Featured Recipe</h1>
        {/* <Button className="basicButton"  onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}>Ingredients & Method</Button>
    
                  {/* to geth the button open and close: */}
                  {/* <Collapse isOpen={data.on}> */}
                  {/* original version: */}
                  {/* <Collapse isOpen={data.toggle}> */}
    
                  {/* gives the nice suround around the method: */}
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
                   
                    <Button className="basicButton1"  onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}>Close</Button>
                    </div>
                    </CardBody>
                    </Card>
                  </Collapse>  */}
                  </div>
                 
    )
}

export default FeaturedRecipe;