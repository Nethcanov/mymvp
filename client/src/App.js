import DefaultProject from './DefaultProject';
import './App.css';
import React, { useState } from 'react';
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';


const Example = () => {

  // const [isOpen, setIsOpen] = useState(false); // for toggle option (to open button)
  const [data, setData] = useState(DefaultProject); // to use data form another folder 
 
  //to get the button to open the data saved, first option:
  // const toggle = () => setIsOpen(!isOpen); //for toggle option (to open button)
   
  // to fetch the data from default project
fetch("./DefaultProject.js").then (
  function(res){
    return res.json()
  }).then(function(data){
    setData(data)
  }).catch(
    function(err){
      console.log(err, "error")
    }
  )

  //worked with Thaina:
  //change the togle of the specific item;
  //it will store the updated item, 
  const getRecipe =(id) => {
    console.log("this is the id:" +id)
    setData(data.map(item => item.id === id ? item.on===false ?{...item, on : true } : {...item, on : false } : item ))
  }

  // const getRecipe =(id) => {
  //   let newRecipe =[...setData];
  //   let ix = newRecipe.map;
  //   if(item => item.id === id){
  //     return item.on ===false
  //   } else ({...item, on : true} ){
  //     return
  //   }
  // }


  //trying:
  const getMethod = (method) => {
    console.log("this is method", +method)
    setData(method.map(method))
  }

  return (   
    <div className="App">

    {
     //map the data from defaultProject 
     data
     ? data.map(
        function(data){
            return (
            <div className="dataMap"> 
            {/* <h1>Check out this amazing recipe!</h1> */}
              {/* <ul key={data.toString()}></ul> */}
              {/* get the template from the web */}
              <Card>
              <h1>Check out this delicious recipe!</h1>
              {/* <h1>Check out this amazing recipe!</h1> */}
              {/* show the image */}
              <CardImg  img src={data.url} alt="Card image cap" height= "600"/>
              <CardBody>
              {/* show the title: */}
              <CardTitle tag="h5">{data.name}</CardTitle>
              {/* show the additional info: */}
              <CardSubtitle tag="h6" className="mb-2 text-muted">{data.prepTime},  {data.cookTime}</CardSubtitle>
              {/* show the level: */}
              <CardText>{data.level}</CardText>
              {/* to get the button working: */}

              <Button className="basicButton"  onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}>Ingredients & Method</Button>

              {/* to geth the button open and close: */}
              <Collapse isOpen={data.on}>
              {/* original version: */}
              {/* <Collapse isOpen={data.toggle}> */}

              {/* gives the nice suround around the method: */}
                <Card>
                <CardBody>
                {/* work on the display here, more tags: 
                list of the individual numbers
                use an array- each number separetly and map the array
                1. 
                2. 
                */}
                <div className = "tags-input">
                <ul>
                <h3>{data.ingredients}</h3>
                </ul><ul>
                  {data.ingredients1}
                </ul><ul>
                  {data.ingredients2}
                </ul><ul>
                  {data.ingredients3}
                </ul><ul>
                  {data.ingredients4}
                </ul><ul>
                  {data.ingredients5}
                </ul><ul>
                  {data.ingredients6}
                </ul><ul>
                  {data.ingredients7}
                </ul><ul>
                  {data.ingredients8}
                </ul><ul>
                  {data.ingredients9}
                </ul><ul>
                  {data.ingredients10}
                </ul><ul>
                  {data.ingredients11}
                </ul><ul>
                  {data.ingredients12}
                </ul><ul>
                  {data.ingredients13}
                </ul><ul>
                  {data.ingredients14}
                </ul><ul>
                  {data.ingredients15}</ul>
                <ul>
                <h3>{data.method}</h3>
                </ul><ul>
                  {data.method1}
                </ul><ul>
                  {data.method2}
                </ul><ul>
                  {data.method3}
                </ul><ul>
                  {data.method4}
                </ul><ul>
                  {data.method5}
                </ul><ul>
                  {data.method6}
                </ul><ul>
                  {data.method7}
                </ul><ul>
                  {data.method8}
                </ul><ul>
                  {data.method9}
                </ul><ul>
                  {data.method10}
                </ul>
                <Button className="basicButton1"  onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}>Close</Button>
                </div>
                </CardBody>
                </Card>
              </Collapse>
              </CardBody>
              </Card>
               </div>)
               }
               ):""
               }
    </div>
  )
            
}

export default Example;



              {/* original button: */}
              {/* <Button 
              color="primary" 
              onClick={toggle} 
              style={{ marginBottom: '1rem' }}
              >
              Method
              </Button> */}


//put style with the tag for the method.

