import React from "react";
import "./Add.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'cus1.jpg',
  'cus2.jpg',
  'cus3.jpg'
];


export default function Home(){
    return(
    <div classNameName="bg4">
       <br/> <br/>
       <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`}}>
              <h1 style={{color:"white" , fontSize:"56px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>Welcome to the Customer Management System</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <h1 style={{color:"white" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>“Every client you keep, is one less that you need to find” Nigel S anders</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <h1 style={{color:"white" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>“Research is not proof, it just improves the odds” David Soulsby</h1>
            
            </div>
          </div>
        </Slide>
      </div>
        
    </div>    
    
       
       
    )
}