import React from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default class DisplayDeliveryPerson extends React.Component {
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
  fetch('http://localhost:8070/deliveryperson')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return(
          element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.age.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.workdate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.birthdate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.phonenumber.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.emailaddress.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.branchcode.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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


/*export default function DisplayDeliveryPerson() {
  const [students, setStudents] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/deliveryperson'//
    );

    setStudents(response.data);
   
  };*/

  render(){
  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
            <Link className="nav-link active " to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i> Display  Profiles</Link>
          </li>

          <li className="nav-item">
              <Link className="nav-link " to = "/vieworders-deliveryM"><i class="fa fa-list" aria-hidden="true"></i>  Order Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/viewbranchdetails-deliveryM"><i class="fa fa-building" aria-hidden="true"></i>  View Branches</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link " to = "/assigndeliveries-deliveryM"><i class="fa fa-truck" aria-hidden="true"></i> Assign Deliveries</Link>
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
      <h1>All Delivery Persons</h1>

       

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
                         <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                         className = "border border-danger rounded-circle"
                         />
                       </div>
                    <p >👨<b style={{color:"red"}}>Name   : </b>{i.name}</p>
                    <p >🏃<b style={{color:"green"}}>Age  : </b>{i.age} years old</p>
                    <p >📅<b style={{color:"blue"}}>Work Date: </b>{i.workdate}</p>
                    <p >❤️<b style={{color:"orange"}}>DOB: </b>{i.birthdate}</p>
                    <p >🏠<b style={{color:"red"}}>Address   : </b>{i.address}</p>
                    <p >📱<b style={{color:"green"}}>Phone   : </b>{i.phonenumber}</p>
                    <p >📧<b style={{color:"blue"}}>Email   : </b>{i.emailaddress}</p>
                    <p >✨<b style={{color:"orange"}}>BranchCode   : </b>{i.branchcode}</p>
                  </div>
                
                  <a href="/edit-deliveryM"><button className="btn btn-secondary">Edit</button></a>
                  
    
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