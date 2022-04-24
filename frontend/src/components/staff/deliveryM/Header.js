import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}><b>Delivery Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-deliveryM"><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-deliveryM"><i class="fa fa-user-plus" aria-hidden="true"></i> Create Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i> Display  Profiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/vieworders-deliveryM"><i class="fa fa-list" aria-hidden="true"></i>  Order Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/viewbranches-deliveryM"><i class="fa fa-building" aria-hidden="true"></i>  View Branches</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link  " to = "/assigndeliveries-deliveryM"><i class="fa fa-truck" aria-hidden="true"></i> Assign Deliveries</Link>
            </li>
             
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
            <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}

export default Header;