import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import {Link} from "react-router-dom";


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/deliveryperson')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }


  render() {
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
                    <Link className="nav-link " aria-current="page" to = "/staff-deliveryM"><i class="fa fa-fw fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to = "/add-deliveryM"><i class="fa fa-user-plus" aria-hidden="true"></i> Create Delivery Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i>Display Delivery Profiles</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to = "/display-deliveryM"><i class="fa fa-truck" aria-hidden="true"></i>Assign Deliveries</Link>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
                </form>
            </div>
            </div>
        </nav>
        <Link to = "/generatedelivery-pdf">
        <div>
              <button className="info__button" type="primary" style={{float:"right"}}><i class="fa fa-cogs" aria-hidden="true"></i> Generate Report</button> 
          </div>
        </Link>
        <div className="bg4"></div>
        <br/>
        <div className="table-wrapper container">
            <Table striped bordered hoverstyle={{background:"#171717" , padding:"10px 10px 10px 10px" , opacity:"0.9"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>WorkDate</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>BranchCode</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>
    </div>
    );
  }
}