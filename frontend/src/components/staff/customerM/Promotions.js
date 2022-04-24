import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";
import "./Add.css"


export default function DisplayPromotions() {
  const [promotions, setPromotions] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/promotionView'
    );

    setPromotions(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Customer Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to = "/staff-customerM" style={{color:"#00ff00"}}><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-customerM" style={{color:"#00ff00"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
          </li>
          <li>
                <img src = "customer.gif" style={{width:"17%" , float:"right"}}/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div className="App bg4">
      <h1 style={{color:"white"}}>All Promotions</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> See Promotions
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style={{width:"70%" , marginLeft:"50px "}}>
        {promotions &&
          promotions.map((promotion, index) => {
            return (
              <div className="student" key={index} style={{backgroundColor:"#f4f4f4"}}>
                <h3 className="badge bg-success">Promotion {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      <img src ={"images/" + promotion.photo} style={{width:"200px" , height:"200px"}}
                      className = "border border-danger rounded-circle"
                      />
                    </div>
                    <p ><b style={{color:"red"}}>Food Item Name   : </b>{promotion.foodItemName}</p>
                    <p ><b style={{color:"green"}}>Quantity  : </b>{promotion.quantity}</p>
                    <p ><b style={{color:"blue"}}>Description: </b>{promotion.description}</p>
                    <p ><b style={{color:"red"}}>Discount Rate: </b>{promotion.discountRate}</p>
                    <p ><b style={{color:"green"}}>Prior Price: </b>{promotion.priorPrice}</p>
                    <p ><b style={{color:"blue"}}>Present price: </b>{promotion.presentPrice}</p>
                  
                  </div>
                
            
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}