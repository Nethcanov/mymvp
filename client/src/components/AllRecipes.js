import React from "react";
// import { Button, CardBody, Card } from 'reactstrap';
// import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function AllRecipes(props){

    let data = props.data;
    return (

        <div className="App">
            <h2>All Recipes Go Here On Cards</h2>
        {/* { */}
         {/* //map the data from defaultProject 
        //  data
        //  ? data.map(
        //     function(data){ */}
        {/* //         return (
        //         <div className="dataMap">  */}
                
                  {/* <ul key={data.toString()}></ul> */}
                  {/* <Card> */}
                  {/* show the title: */}
                  {/* <CardTitle tag="h5">{data.name}</CardTitle> */}
                  {/* show the image */}
                  {/* <CardImg  img src={data.url} alt="Card image cap" height= "600"/>
                  <CardBody> */}
                  {/* show the additional info: */}
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{data.prepTime},  {data.cookTime}</CardSubtitle> */}
                  {/* show the level: */}
                  {/* <CardText>{data.level}</CardText> */}
                  {/* to get the button working: */}
                  {/* </CardBody>
                   <Button className="Button">Open Recipe</Button>
                  </Card>
                   </div>)
                   }
                   ):""
                   } */}
        </div>
    )
}

export default AllRecipes;

// onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}