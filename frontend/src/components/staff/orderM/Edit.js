import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";



export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeorderOrderId = this.onChangeorderOrderId.bind(this);
    this.onChangeorderCategory = this.onChangeorderCategory.bind(this);
    this.onChangeorderItemNumber= this.onChangeorderItemNumber.bind(this);
    this.onChangeorderCustomerName= this.onChangeorderCustomerName.bind(this);
    this.onChangeorderAddress = this.onChangeorderAddress.bind(this);
    this.onChangeorderContactNumber = this.onChangeorderContactNumber.bind(this);
    this.onChangeorderDate = this.onChangeorderDate.bind(this);
    this.onChangeorderPrice = this.onChangeorderPrice.bind(this);
    this.onChangeorderQuantity = this.onChangeorderQuantity.bind(this);
    this.onChangeorderPaymentStates= this.onChangeorderPaymentStates.bind(this);
    this.onChangeorderEmail= this.onChangeorderEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      orderId: '',
      category: '',
      itemNumber: '',
      customerName: '',
      address:'',
      contactNumber:'',
      date:'',
      price:'',
      quantity:"",
      paymentStates:'',
      email:''
      
    }
  }

  onChangeorderOrderId (e) {
    this.setState({ orderId: e.target.value })
  }

  onChangeorderCategory(e) {
    this.setState({ category: e.target.value })
  }

  onChangeorderItemNumber(e) {
    this.setState({ itemNumber: e.target.value })
  }

  onChangeorderCustomerName(e) {
    this.setState({ customerName: e.target.value })
  }

  onChangeorderAddress(e) {
    this.setState({ address: e.target.value })
  }
  onChangeorderContactNumber(e) {
    this.setState({ contactNumber: e.target.value })
  }

  onChangeorderDate(e) {
    this.setState({ date: e.target.value })
  }

  onChangeorderPrice (e) {
    this.setState({price: e.target.value })
  }

  onChangeorderQuantity (e) {
    this.setState({  quantity: e.target.value })
  }

  onChangeorderPaymentStates(e) {
    this.setState({ paymentStates: e.target.value })
  }

  
  onChangeorderEmail(e) {
    this.setState({ email: e.target.value })
  }
  


  onSubmit(e) {
    e.preventDefault()
 
    
    const formData = new FormData();
        // formData.append('orderId', this.state.orderId);
        formData.append('category', this.state.category);
        formData.append('itemNumber', this.state.itemNumber);
        formData.append('customerName', this.state.customerName);
        formData.append('address', this.state.address);
        formData.append('contactNumber', this.state.contactNumber);
        formData.append('date', this.state.date);
        formData.append('price', this.state.price);
        formData.append('quantity', this.state.quantity);
        // formData.append('paymentStates', this.state.paymentStates);
        // formData.append('email', this.state.email);

    axios.put('http://localhost:8070/orderManager/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('order successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Customer List 
    this.props.history.push('/edit-orderM')
    
  }


  render() {
    const { orderId, category, itemNumber, customerName, address, contactNumber, date, price, quantity, paymentStates, email} = this.props.match.params;
    
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{color:"red"}}><b>Order Management System</b></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                      <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to = "/staff-orderM"><i className="fa fa-fw fa-home"></i>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to = "/add-orderM"><i className="fa fa-user-circle" aria-hidden="true"></i> Add Complaint</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-orderM"><i className="fa fa-desktop" aria-hidden="true"></i> Display Order</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Order</Link>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                      <button className="btn btn-outline-success" type="submit"><i className="fa fa-fw fa-search"></i>Search</button>
                    </form>
                  </div>
                </div>
              </nav>
             
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Current Info 👁</h1>
                <table>
              
                   

                    <td controlId="category">
                    <label>Category</label>
                    <input type="text" value={category} onChange={this.onChangeorderCategory} required disabled/>
                    </td>

                    <td controlId="itemNumberr">
                    <label>ItemNumber</label>
                    <input type="text" value={itemNumber} onChange={this.onChangeorderItemNumber} required disabled/>
                    </td>

                    <td controlId="customerName">
                    <label>CustomerName</label>
                    <input type="text" value={customerName} onChange={this.onChangeorderCustomerName} required disabled/>
                    </td>

                    <td controlId="address">
                    <label>Address</label>
                    <input type="text" value={address} onChange={this.onChangeorderAddress} required disabled/>
                    </td>
                    </table>
                    <br></br>
                    <table>
                    <td controlId="contactNumber">
                    <label>ContactNumber</label> <br></br>
                    <input type="text" value={contactNumber} onChange={this.onChangeorderContactNumber} required disabled/>
                    </td>



                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
                
                   

                    <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={this.state.category} onChange={this.onChangeorderCategory} placeholder="✍🏻 Edit category" required/>
                    </Form.Group>

                    <Form.Group controlId="itemNumber">
                    <Form.Label>Item Number</Form.Label>
                    <Form.Control type="text" value={this.state.itemNumber} onChange={this.onChangeorderItemNumber} placeholder="✍🏻 Edit Item Number" required/>
                    </Form.Group>

                    <Form.Group controlId="customerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" value={this.state.customerName} onChange={this.onChangeorderCustomerName} placeholder="✍🏻 Edit Customer Name" required/>
                    </Form.Group>

                    <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeorderAddress} placeholder="✍🏻 Edit Address" required/>
                    </Form.Group>

                    <Form.Group controlId="contactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" value={this.state.contactNumber} onChange={this.onChangeorderContactNumber} placeholder="✍🏻 Edit Contact Number" required/>
                    </Form.Group>

                    <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeorderQuantity} placeholder="✍🏻 Edit quantity" required/>
                    </Form.Group>

                    
                    <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={this.state.price} onChange={this.onChangeorderPrice} placeholder="✍🏻 Edit price" required/>
                    </Form.Group>
                    
                    
                    
                    <br/>

                   
                   
                  

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Order Details
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}