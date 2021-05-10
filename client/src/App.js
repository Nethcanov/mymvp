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
  const getRecipe =(id) => {
    console.log("this is the id:" +id)
    setData(data.map(item => item.id === id ? item.on===false ?{...item, on : true } : {...item, on : false } : item ))
  }

  const printButtonLabel = (event) => {
    console.log(event.target.name);
    //do some stuff here
  };

  return (   
    <div className="App">

    {
     //map the data from defaultProject 
     data
     ? data.map(
        function(data){
            return (
            <div className="dataMap"> 
              {/* <ul key={data.toString()}></ul> */}
              {/* get the template from the web */}
              <Card>
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
              <Button color="primary" onClick={() => getRecipe(data.id)} style={{ marginBottom: '1rem' }}>Method</Button>

              {/* original button: */}
              {/* <Button 
              color="primary" 
              onClick={toggle} 
              style={{ marginBottom: '1rem' }}
              >
              Method
              </Button> */}

              {/* to geth the button open and close: */}
              <Collapse isOpen={data.on}>
              {/* original version: */}
              {/* <Collapse isOpen={data.toggle}> */}
              {/* gives the nice surorund around the method: */}
                <Card>
                <CardBody>
                {data.method}
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

