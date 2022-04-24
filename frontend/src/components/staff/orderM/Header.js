import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}><b>Order Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-orderM"><i className="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-orderM"><i className="fa fa-user-circle" aria-hidden="true"></i> Add Complaint</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-orderM"><i className="fa fa-desktop" aria-hidden="true"></i> Display Order</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
            <button className="btn btn-outline-success" type="submit"><i className="fa fa-fw fa-search"></i>Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}

export default Header;