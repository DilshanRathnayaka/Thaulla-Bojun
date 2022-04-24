import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";
import "./Add.css"


export default function DisplayComplaints() {
  const [complaints, setComplaints] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/complaints'
    );

    setComplaints(response.data);
   
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
            <Link className="nav-link " aria-current="page" to = "/staff-customerM" style={{color:"#00ff00"}}><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-customerM" style={{color:"#00ff00"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
          </li>
          <li>
                <img src = "customer.gif" style={{width:"17%" , float:"right"}}/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div className="App bg4">
      <h1 style={{color:"white"}}>All Complaints</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> See Complaints
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style={{width:"70%" , marginLeft:"50px"}}>  
        {complaints &&
          complaints.map((complaint, index) => {
            return (
              <div className="student" style={{backgroundColor:"#f4f4f4"}} key={index}>
                <h3 className="badge bg-success">Complaints {index + 1}</h3>

                <div className="details">
                  <div>
                    <p ><b style={{color:"red"}}>Complaint ID   : </b>{complaint.complaintId}</p>
                    <p ><b style={{color:"green"}}>Complaint Type  : </b>{complaint.complaintType}</p>
                    <p ><b style={{color:"blue"}}>Description: </b>{complaint.description}</p>
                    <p ><b style={{color:"red"}}>Customer Email: </b>{complaint.complaintEmail}</p>

                  
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