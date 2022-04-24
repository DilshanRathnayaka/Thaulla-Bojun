import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayInventoryt() {
  const [viewShortComings, setviewShortComings] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/viewShortComings'
    );

    setviewShortComings(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Stock Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to = "/staff-stockM" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/addInven-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/displayInven-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Shortcomings</Link>
            </li> 
          </ul>
      </div>
    </div>
  </nav>
    <div className="App stockImage2">
      <h1 style ={{marginRight: "300px", color:"white"}}>All Shortcomings</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white", marginRight: "300px"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true" ></i> Fetch Shortcomings
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style = {{width: "70%", marginLeft: "100px"}}>
        {viewShortComings &&
          viewShortComings.map((shortcoming, index) => {
            return (
              <div className="student" style={{background:"#DCDCDC"}} key={index}>
                <h3 className="badge bg-success">Item {index + 1}</h3>

                <div className="details">
                  <div>
                    <p ><b style={{color:"red"}}>Shortcoming Id   : </b>{shortcoming.scid}</p>
                    <p ><b style={{color:"green"}}>Shortcoming Name   : </b>{shortcoming.scitem}</p>
                    <p ><b style={{color:"blue"}}>Item Id   : </b>{shortcoming.itemid}</p>
                    <p ><b style={{color:"orange"}}>Quantity    : </b>{shortcoming.qty}</p>
                    <p ><b style={{color:"red"}}>Request Date   : </b>{shortcoming.reqdate}</p>
                   
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