import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)

    this.onChangeSupplierSupplierID = this.onChangeSupplierSupplierID.bind(this);
    this.onChangeSupplierFullName = this.onChangeSupplierFullName.bind(this);
    this.onChangeSupplierAddress = this.onChangeSupplierAddress.bind(this);
    this.onChangeSupplierPriorExperiance = this.onChangeSupplierPriorExperiance.bind(this);
    this.onChangeSupplierPhoto = this.onChangeSupplierPhoto.bind(this);
    this.onChangeSupplierItemsPurchased = this.onChangeSupplierItemsPurchased.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      supplierID: '',
      fullName: '',
      address: '',
      priorExperiance: '',
      photo: '',
      itemsPurchased:'',
      
    }
  }

  onChangeSupplierSupplierID(e) {
    this.setState({ supplierID: e.target.value })
  }

  onChangeSupplierFullName(e) {
    this.setState({ fullName: e.target.value })
  }

  onChangeSupplierAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeSupplierPriorExperiance(e) {
    this.setState({ priorExperiance: e.target.value })
  }

  onChangeSupplierPhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onChangeSupplierItemsPurchased(e) {
    this.setState({ itemsPurchased: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('photo', this.state.photo);
        formData.append('supplierID', this.state.supplierID);
        formData.append('fullName', this.state.fullName);
        formData.append('address', this.state.address);
        formData.append('priorExperiance', this.state.priorExperiance);
        formData.append('itemsPurchased', this.state.itemsPurchased);

    axios.put('http://localhost:8070/suppliers/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Supplier successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Customer List 
    this.props.history.push('/edit-supplierM')
    
  }


  render() {
    const { supplierID , fullName , address , priorExperiance ,  photo , itemsPurchased} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
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
                        <Link className="nav-link " to = "/add-supplierM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Supplier</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Suppliers</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profiles</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/return-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Returns</Link>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                      <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
                    </form>
                  </div>
                </div>
              </nav>
             
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Current Info 👁</h1>
                <table>

                    <td controlId="SupplierID">
                    <label>Supplier ID</label>
                    <input type="text" value={supplierID} onChange={this.onChangeSupplierSupplierID} required disabled/>
                    </td>

                    <td controlId="FullName">
                    <label>Full Name</label>
                    <input type="text" value={fullName} onChange={this.onChangeSupplierFullName} required disabled/>
                    </td>

                    <td controlId="Address">
                    <label>Address</label>
                    <input type="text" value={address} onChange={this.onChangeSupplierAddress} required disabled/>
                    </td>

                    <td controlId="PriorExperiance">
                    <label>Prior Experiance</label>
                    <input type="Number" value={priorExperiance} onChange={this.onChangeSupplierPriorExperiance} required disabled/>
                    </td>

                    <td controlId="ItemsPurchased">
                    <label>Items Purchased</label>
                    <input type="text" value={itemsPurchased} onChange={this.onChangeSupplierItemsPurchased} required disabled/>
                    </td>



                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="supplierID">
                    <Form.Label>Supplier ID</Form.Label>
                    <Form.Control type="text" value={this.state.supplierID} onChange={this.onChangeSupplierSupplierID} placeholder="✍🏻 Edit SupplierID" required />
                    </Form.Group>
               
                    <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={this.state.fullName} onChange={this.onChangeSupplierFullName} placeholder="✍🏻 Edit Name" required />
                    </Form.Group>

                    <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeSupplierAddress} placeholder="✍🏻 Edit Address" required/>
                    </Form.Group>

                    <Form.Group controlId="priorExperiance">
                    <Form.Label>Prior Experiance</Form.Label>
                    <Form.Control type="text" value={this.state.priorExperiance} onChange={this.onChangeSupplierPriorExperiance} placeholder="✍🏻 Edit Prior Experiance" required/>
                    </Form.Group>

                    <Form.Group controlId="itemsPurchased">
                    <Form.Label>Items Purchased</Form.Label>
                    <Form.Control type="text" value={this.state.itemsPurchased} onChange={this.onChangeSupplierItemsPurchased} placeholder="✍🏻 Edit Items Purchased" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Email">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeSupplierPhoto} required
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Supplier
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}