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
    axios.get('http://localhost:8070/orderManager')
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
            <a className="navbar-brand" href="#" style={{color:"red"}}><b>Order Managment System</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to = "/staff-orderM"><i className="fa fa-fw fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to = "/add-orderM"><i className="fa fa-user-circle" aria-hidden="true"></i>Add Complaint</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to = "/display-orderM"><i className="fa fa-desktop" aria-hidden="true"></i> Display Orders</Link>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                <button className="btn btn-outline-success" type="submit"><i className="fa fa-fw fa-search"></i>Search</button>
                </form>
            </div>
            </div>
        </nav><br/>
        <div className="table-wrapper container">
            <Table striped bordered hover style={{width:"50%"}} >
                <thead>
                    <tr>
                        <th>orderId</th>
                        <th>category,</th>
                        <th>itemNumber</th>
                        <th>customerName</th>
                        <th>address</th>
                        <th>contactNumber</th>
                        <th>date</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>paymentStates</th> 
                        <th>email</th>
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