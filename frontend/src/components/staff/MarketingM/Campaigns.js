import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Campaigns = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {

            campaignName: '',
            campaignType : '',
            estimatedCost : '',
            timing: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('campaignName', newUser.campaignName);
        formData.append('campaignType', newUser.campaignType);
        formData.append('estimatedCost', newUser.estimatedCost);
        formData.append('timing', newUser.timing);

        axios.post('http://localhost:8070/marketingcampaign/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Campaign is uploaded successfully")
                setNewUser({campaignName :'' , campaignType : '' , estimatedCost : '' , timing : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                alert(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
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
                <Link className="nav-link " to = "/add-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Promotion</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to = "/addfood-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create New Food Item</Link>
               </li>
              <li className="nav-item">

                <Link className="nav-link active" to = "/display-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Details</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
              <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
            </form>
           
          </div>
        </div>
      </nav>
      <div>
    
          <center><img src = "campaign img.jpg" style={{width:"50%" , height:"100%"}}/></center>

      </div>
    </div>
    
    )}
    export default Campaigns;