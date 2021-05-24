import React from "react";
import { Button,  Card } from 'reactstrap';
import {CardImg,  CardTitle } from 'reactstrap';
// onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }} 
function AllRecipes(props){

    let data = props.data;
    
    return (

        <div className="AllRecipes">
            {/* <h1>Click on a Jamie Oliver recipe to view the ingredients and cooking instructions</h1> */}
      
            { data ? 
                <div className="row">
                    {data.map(r => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={r.id.toString()}>
                            <Card> 
                            <CardTitle tag="h5">{r.name}</CardTitle> 

                                <CardImg img src={r.url} alt="Card image cap" height= "200"/>

                            <Button className="Button">Open Recipe</Button>
                            </Card>
                        </div>
                    ))}

                </div>
            : <h1>You have no recipes!</h1>
            }
                 
        </div>
    )
}

export default AllRecipes;