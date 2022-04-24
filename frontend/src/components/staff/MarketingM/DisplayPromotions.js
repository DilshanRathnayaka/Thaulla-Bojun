import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default class DisplayPromotions extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;
     
    this.setState(prevState => {
    const filteredData = prevState.data.filter(element => {
    return element.foodItemName.toLowerCase().includes(query.toLowerCase());
    });

      return {
        query,
        filteredData
      };
    });
  };

   getData = () => {
    fetch(`http://localhost:8070/promotions`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
        element.foodItemName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.quantity.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.description.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.discountRate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.priorPrice.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.presentPrice.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.photo.toLowerCase().includes(query.toLowerCase()) >= 0
      )
      });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render(){
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
               <Link className="nav-link active" to = "/display-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i>Display Details</Link>
             </li>
           </ul>
           <form className="d-flex">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}
                 placeholder="Search for..."
                 value={this.state.query}
                 onChange={this.handleInputChange}/>
               <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
             </form>
         </div>
       </div>
     </nav>
       <div className="App">
         <h1>All Promotions</h1>
   
   
         {/* Display data from API */}
         <div className="students"  style={{width:"95%",marginLeft:"50px"}}>
           {this.state.filteredData.length ===0?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
           <center>Data is not found
           <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
          </div>
           ):(this.state.filteredData.map)(i => 
           
              <p>
                 <div className="student" style={{width:"95%",marginLeft:"50px"}}>
                   <h3 className="badge bg-success">Promotion</h3>
   
                   <div className="details">
                     <div>
                       <div style={{float:"right"}}>
                         <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                         className = "border border-danger rounded-circle"
                         />
                       </div>
                       <p >🥘<b style={{color:"red"}}>foodItemName   : </b>{i.foodItemName}</p>
                       <p >🍲<b style={{color:"green"}}>quantity  : </b>{i.quantity} </p>
                       <p >🍲<b style={{color:"purple"}}>description  : </b>{i.description} </p>
                       <p >➗<b style={{color:"blue"}}>discountRate: </b>{i.discountRate}</p>
                       <p >💲<b style={{color:"orange"}}>priorPrice: </b>{i.priorPrice}</p>
                       <p >💲<b style={{color:"orange"}}>presentPrice: </b>{i.presentPrice}</p>
                     </div>
                   
                     <a href="/edit-MarketingM"><button className="btn btn-secondary">Edit</button></a>
                     
       
                   </div>
                 </div>
             
          </p>
             )}
         </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       </div>
       </div>
      
       
     );
   }
 }