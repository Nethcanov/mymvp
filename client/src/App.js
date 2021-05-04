import React, {useState} from "react";
import './App.css';

import DefaultProject from './DefaultProject';
import FeaturedProject from "./components/FeaturedProject";
import ThumbGrid from "./components/ThumbGrid";



///-------------
function App() {
  const [data, setData] = useState(DefaultProject);
  




















  ////////////////////////---------------------

  // fetch("./DefaultProject.js").then (
  //   function(res){
  //     return res.json()
  //   }).then(function(data){
  //     setData(data)
  //   }).catch(
  //     function(err){
  //       console.log(err, "error")
  //     }
  //   )

  //   return (
  //     <div className="App">
  //     {
  //       // use data State Variable For Get Data Use JavaScript Map Mathod
  //      data
  //      ? data.map(
  //         function(data){
  //                 return (<div className="card"> 

  //                 <h4> {data.id}</h4>
  //                 <h2> {data.url}</h2>
  //                 <h3> {data.prepTime}</h3>
  //                 <h3> {data.cookTime}</h3>
  //             </div>)
  //         }
  //       ):""
  //     }
  //     </div>
  //   )
  
  
  // const [featuredProject, setFeaturedProject] = useState(data[0])

  // const mysetFeaturedProject = (id) => {
  //   //find project with given id
  //   let data = data.find(p => p.id);
  //   //update state
  //   setFeaturedProject(data);
  //   console.log('mysetFeaturedProject', id)
  // }

  // return (
  //   <div className="App">
  //       <h1> Paulina's recipes</h1>
        
       
  //   </div>
  // );
}

export default App;
