import React from "react";
import "./slaidshow.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'branch_home1.jpg',
    'branch_home2.jpg',
    'branch_home3.jpg'
  ];


export default function Home(){
    return(
        <div classNameName="bg4">
        <br/> <br/>
        <div>
         <Slide easing="ease">
           <div className="each-slide">
             <div style={{backgroundImage: `url(${slideImages[0]})`}}>
               <h1 style={{color:"white" , fontSize:"56px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>Welcome to our Branch Management System</h1>
             </div>
           </div>
           <div className="each-slide">
             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             <h1 style={{color:"white" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>“Have a Nice Day...” </h1>
             </div>
           </div>
           <div className="each-slide">
             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             <h1 style={{color:"white" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>“Eny time we redy to help for you”</h1>
             
             </div>
           </div>
         </Slide>
       </div>
         
     </div>      
    
       
       
    )
}