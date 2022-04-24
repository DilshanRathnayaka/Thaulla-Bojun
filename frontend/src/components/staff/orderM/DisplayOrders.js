import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayOrders() {
  const [displayOrders, setDisplayOrders] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/orderManager'
    );

    setDisplayOrders(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Order Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-orderM"><i className="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-orderM"><i className="fa fa-user-circle" aria-hidden="true"></i>Add Complaint</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-orderM"><i className="fa fa-desktop" aria-hidden="true"></i> Display Orders</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
          <button className="btn btn-outline-success" type="submit"><i className="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">
      <h1>All Orders</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i className="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Orders
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style={{width:"80%"}}>
        {displayOrders &&
          displayOrders.map((student, index) => {
            return (
              <div className="student" key={index}>
                <h3 className="badge bg-success">Order{index + 1}</h3>

                <div className="details">
                  <div>
                  
                    <p >❤️<b style={{color:"brown"}}>orderId  : </b>{student.orderId }</p>
                    <p >❤️<b style={{color:"brown"}}>Category : </b>{student.category}</p>
                    <p >❤️<b style={{color:"brown"}}>ItemNumber: </b>{student.itemNumber}</p>
                    <p >👨<b style={{color:"brown"}}>customer Name: </b>{student.customerName}</p>
                    <p >❤️<b style={{color:"brown"}}>Address: </b>{student.address}</p>
                    <p >❤️<b style={{color:"brown"}}>Contact Number: </b>{student.contactNumber}</p>
                    <p >❤️<b style={{color:"brown"}}>Price: </b>{student.price}</p>
                    <p >❤️<b style={{color:"brown"}}>Quantity: </b>{student.quantity}</p>
                    <p >❤️<b style={{color:"brown"}}>Payment States: </b>{student.paymentStates}</p>
                    <p >❤️<b style={{color:"brown"}}>Email: </b>{student.email}</p>
                  </div>
                 
   
    
                
                  <a href="/edit-orderM"><button className="btn btn-secondary">Edit</button></a>
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}