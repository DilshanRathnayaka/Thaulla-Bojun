import React from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default class DisplayBranches extends React.Component {
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
  fetch('http://localhost:8070/branches')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return(
          element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.city.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.branchID.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.contactNo.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
       <div className="container-fluid">
         <a className="navbar-brand" href="#" style={{color:"red"}}><b>Branch Management System</b></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
             <li className="nav-item">
               <Link className="nav-link " aria-current="page" to = "/staff-branchM" style={{color:"orange"}}><i class="fa fa-fw fa-home"></i>Home</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to = "/add-branchM" style={{color:"orange"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to = "/display-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
             </li>
             <li className="nav-item">
                   <Link className="nav-link" to = "/assign-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
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
       <div className="App bgM">
         <h1 style={{marginRight:"350px"}}>All Branches</h1>
   
         {/* Display data from API */}
         <div className="students"style={{width:"100%",marginLeft:"45px"}}>
           {this.state.filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"50px",width:"20%"}}>
                                   <center>Data is not found
                                     <br/><br/>
                                   <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/>
                               </div>
                           ):(this.state.filteredData.map(i => 
            <p>
                 <div className="student" style={{width:"480px"}}>
                  
   
                   <div className="details">
                     <div >
                       <div style={{float:"right"}}>
                         <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px",marginLeft:"auto",marginRight:"auto", display:"block"}}
                         className = "border border-danger rounded-circle"
                         />
                       </div>
                       <h2 ><center><b style={{color:"red"}}> </b>{i.name}</center></h2>
                       <p ><b style={{color:"blue"}}>City: </b>{i.city}</p>
                       <p ><b style={{color:"green"}}>ID  : </b>{i.branchID} </p>
                       <p ><b style={{color:"blue"}}>Address: </b>{i.address}</p>
                       <p ><b style={{color:"orange"}}>Contact: </b>{i.contactNo}</p>
                       <p ><b style={{color:"red"}}>Email   : </b>{i.email}</p>
                     </div>
                   
                     <a href="/edit-branchM"><button className="btn btn-secondary">View</button></a>
                     
       
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