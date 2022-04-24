import React from "react";
import { Link } from "react-router-dom";
import "./CustomerScreen.css";
import "./Customer.css";

export default class DisplayCustomers extends React.Component {
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
    fetch(`http://localhost:8070/users`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
            element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.age.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.gender.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.phone.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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

  render() {
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
              <Link className="nav-link active" to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
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
      <div className="bg4">
        <div className = "homescreen">
          <h2 className="homescreen__title" style={{color:"white"}}>All Customer Profiles</h2>
          <div className="homescreen__products">{this.state.filteredData.length === 0 ? (
                            <div className="alert alert-danger" style={{marginLeft:"50px"}}>
                                <center>Data is not found
                                <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        ): (this.state.filteredData.map(i => 
            <p>
              <div className="product">
                <img src={"images/"+i.photo} border="0'"/>
                <div className="product__info">
                    <p >👨<b style={{color:"red"}}>Name   : </b>{i.name}</p>
                    <p >🏃<b style={{color:"green"}}>Age  : </b>{i.age} years old</p>
                    <p >👫<b style={{color:"blue"}}>Gender: </b>{i.gender}</p>
                    <p >🏕<b style={{color:"red"}}>Address: </b>{i.address}</p>
                    <p >📱<b style={{color:"green"}}>Phone: </b>{i.phone}</p>
                    <p >💌<b style={{color:"blue"}}>Email: </b><span style={{fontSize:"12px"}}>{i.email}</span></p>

                    <Link to = {`/edit-customerM`} className="info__button" style={{width:"100%"}}>View</Link>
                </div>
                
              </div>

            </p>))}
          </div>
        </div>
      </div>
     </div>
    );
  }
}