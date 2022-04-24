import React from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default class DisplaySuppliers extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

   handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.fullName.toLowerCase().includes(query.toLowerCase());
   });

    return {
      query,
      filteredData
    };
  });
};

 getData = () => {
  fetch('http://localhost:8070/suppliers')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return(

          element.supplierID.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.fullName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.priorExperiance.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.itemsPurchased.toLowerCase().includes(query.toLowerCase()) >= 0 
      
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
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Supplier Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-supplierM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-supplierM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/return-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Returns </Link>
          </li>
        </ul>

      {/*search*/}
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
      <h1>All Suppliers</h1>

     

         {/* Display data from API */}
         <div className="students"style={{width:"100%",marginLeft:"50px"}}>
           {this.state.filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
                                   <center>Data is not found
                                   <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
                               </div>
                           ):(this.state.filteredData.map(i => 
            <p>
                 <div className="student"style={{width:"95%" }} >
                  
   
                   <div className="details">
                     <div >
                       <div style={{float:"right"}}>
                         {/*change box size of details of suppliers*/}
                         <img src ={"images/" + i.photo} style={{width:"250px" , height:"200px"}}
                         className = "border border-danger rounded-circle"
                         />
                       </div>
                    <p >👨<b style={{color:"red"}}>Supplier ID   : </b>{i.supplierID}</p>
                    <p >👨<b style={{color:"red"}}>Full Name   : </b>{i.fullName}</p>
                    <p >🏃<b style={{color:"green"}}>Address  : </b>{i.address}</p>
                    <p >👫<b style={{color:"blue"}}>Prior Experiance: </b>{i.priorExperiance} years</p>
                    <p >❤️<b style={{color:"orange"}}>Items Purchased: </b>{i.itemsPurchased}</p>
                  </div>
                
                  <a href="/edit-supplierM"><button className="btn btn-secondary">Edit</button></a>
                  
    
                </div>
              </div>
              </p>
          
                           ))}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}

}