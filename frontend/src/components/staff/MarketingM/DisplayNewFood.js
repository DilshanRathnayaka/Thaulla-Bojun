import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayPromotions() {
  const [students, setStudents] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/status'
    
    );
  //   .then(data => {
  //   console.log(data)
  // });

    setStudents(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Marketing Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-MarketingM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Promotions</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to = "/addfood-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create New Food Item</Link>
               </li>
          <li className="nav-item">
            <Link className="nav-link active " to = "/display-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i>Display Details</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">
      <h1>All Confirmations</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Items
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style = {{width: "75%", marginLeft: "200px"}}>
        {students &&
          students.map((student, index) => {
            return (
              <div className="student" key={index}>
                <h3 className="badge bg-success">Food Item {index + 1}</h3>

                <div className="details">
                  <div>
                   
                    <p >🥘<b style={{color:"red"}}>foodItemName   : </b>{student.foodname}</p>
                    <p >🍲<b style={{color:"green"}}>Status  : </b>{student.status} </p>
                    
                  </div>
                
                  
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}