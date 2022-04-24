import React from 'react';

import '../../../styles.css';
import {Link} from "react-router-dom";



export default class DisplayChefs extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

    getData = () => {
      fetch("http://localhost:8070/chefs")
      .then(response => response.json())
      .then(data =>{
        const {query} = this.state;
        const filteredData = data.filter(element => {
          return(
            element.chefid.toLowerCase().includes(query.toLowerCase()) >=0 ||
            element.name.toLowerCase().includes(query.toLowerCase()) >=0 ||
            element.address.toLowerCase().includes(query.toLowerCase()) >=0 ||
            element.phone.toLowerCase().includes(query.toLowerCase()) >=0 ||
            element.email.toLowerCase().includes(query.toLowerCase()) >=0 ||
            element.experience.toLowerCase().includes(query.toLowerCase()) >=0 ||
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
           <a className="navbar-brand" href="#" style={{color:"red"}}><b>Food Management System</b></a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
               <li className="nav-item">
                 <Link className="nav-link " aria-current="page" to = "/staff-foodM"><i class="fa fa-fw fa-home"></i>Home</Link>
               </li>
     
               <li className="nav-item">
                 <Link className="nav-link" to = "/addSC-foodM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Shortcomings</Link>
               </li>
     
     
               <li className="nav-item">
                 <Link className="nav-link" to = "/add-foodM"><i class="fa fa-user-circle" aria-hidden="true"></i> Assign Chefs</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to = "/display-foodM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Chefs</Link>
               </li>
     
               <li className="nav-item">
                 <Link className="nav-link " to = "/view-foodM"><i class="fa fa-desktop" aria-hidden="true"></i> View Orders</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link " to = "/update-foodM"><i class="fa fa-desktop" aria-hidden="true"></i> Update New Food Arrivals</Link>
               </li>
             </ul>
             <form className="d-flex">
               <input className="form-control me-2" type="search"
                placeholder="Search" 
                onChange={this.handleInputChange} 
                value = {this.state.query} 
                aria-label="Search" 
                style={{width:"60%"}}/>
               <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
             </form>
           </div>
         </div>
       </nav>
         <div className="App">
           <h1>All Chefs</h1>
     
           
     
           {/* Display data from API */}
           <div className="students">
             { this.state.filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
                                   <center>Data is not found
                                   <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
                               </div>
                           ):(this.state.filteredData.map(i => 
                            
             
               
                 <p>
                   <div className="student"style={{width:"95%" }} >
                    
     
                     <div className="details">
                       <div>
                         <div style={{float:"right"}}>
                           <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                           className = "border border-danger rounded-circle"
                           />
                         </div>
                         <p >📋<b style={{color:"green"}}>Chef ID :</b>{i.chefid}</p>
                         <p >👨<b style={{color:"green"}}>Name   : </b>{i.name}</p>
                         <p >🏃<b style={{color:"green"}}>Address  : </b>{i.address} </p>
                         <p >👫<b style={{color:"green"}}>Contact: </b>{i.phone}</p>
                         <p >❤️<b style={{color:"green"}}>Email: </b>{i.email}</p>
                         <p >🛠<b style={{color:"green"}}>Experience:</b>{i.exp}</p>
                       </div>
                     
                       <a href="/edit-foodM"><button className="btn btn-secondary">Edit</button></a>
                       
         
                     </div>
                   </div>
                 </p>
               ))}
         </div>  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         </div>
        </div>
       );
    
                           }                     
  }