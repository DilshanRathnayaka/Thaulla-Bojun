import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeBranchName = this.onChangeBranchName.bind(this);
    this.onChangeBranchCity = this.onChangeBranchCity.bind(this);
    this.onChangeBranchBranchID = this.onChangeBranchBranchID.bind(this);
    this.onChangeBranchAddress = this.onChangeBranchAddress.bind(this);
    this.onChangeBranchContactNo = this.onChangeBranchContactNo.bind(this);
    this.onChangeBranchEmail = this.onChangeBranchEmail.bind(this);
    this.onChangeBranchPhoto = this.onChangeBranchPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
            name: '',
            city : '',
            branchID : '',
            address: '',
            contactNo: '',
            email: '',
            photo: '',
      
    }
  }

  onChangeBranchName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeBranchCity(e) {
    this.setState({ city: e.target.value })
  }

  onChangeBranchBranchID(e) {
    this.setState({ branchID: e.target.value })
  }

  onChangeBranchAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeBranchContactNo(e) {
    this.setState({ contactNo: e.target.value })
  }

  onChangeBranchEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeBranchPhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('photo', this.state.photo);
        formData.append('city', this.state.city);
        formData.append('name', this.state.name);
        formData.append('branchID', this.state.branchID);
        formData.append('address', this.state.address);
        formData.append('contactNo', this.state.contactNo);
        formData.append('email', this.state.email);

    axios.put('http://localhost:8070/branches/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Branch successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Branch List 
    this.props.history.push('/edit-branchM')
    
  }


  render() {
    const { name , city , branchID , address , contactNo , email , photo} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
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
                        <Link className="nav-link " to = "/add-branchM" style={{color:"orange"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
                      </li>
                      <li className="nav-item">
                       <Link className="nav-link" to = "/assign-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#" style={{color:"orange"}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Branch</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
             
                <div className="bgM"><br/><br/>
                <div className="form-wrapper container" style={{width:"100%",background:"#000000",padding:"5px 5px 5px 5px",opacity:"0.8"}}><br/>
                <h1 style={{color:"white"}}>Current Info 👁</h1>
                <table>

                    <td controlId="Name">
                    <label>Branch Name</label>
                    <input type="text" value={name} onChange={this.onChangeBranchName} required disabled/>
                    </td>

                    <td controlId="city">
                    <label>City</label>
                    <input type="text" value={city} onChange={this.onChangeBranchCity} required disabled/>
                    </td>

                    <td controlId="branchID">
                    <label>BranchID</label>
                    <input type="text" value={branchID} onChange={this.onChangeBranchBranchID} required disabled/>
                    </td>

                    <td controlId="address">
                    <label>Address</label>
                    <input type="text" value={address} onChange={this.onChangeBranchAddress} required disabled/>
                    </td>

                    <td controlId="contactNo">
                    <label>Contact NO</label>
                    <input type="text" value={contactNo} onChange={this.onChangeBranchContactNo} required disabled/>
                    </td>

                    <td controlId="email">
                    <label>Email</label>
                    <input type="text" value={email} onChange={this.onChangeBranchEmail} required disabled/>
                    </td>



                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Name">
                    <Form.Label>Branch Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeBranchName} placeholder="✍🏻 Edit Branch Name" required />
                    </Form.Group>

                    <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" value={this.state.city} onChange={this.onChangeBranchCity} placeholder="✍🏻 Edit City" required/>
                    </Form.Group>

                    <Form.Group controlId="branchID">
                    <Form.Label>BranchID</Form.Label>
                    <Form.Control type="text" value={this.state.branchID} onChange={this.onChangeBranchBranchID} placeholder="✍🏻 Edit BranchID" required/>
                    </Form.Group>

                    <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeBranchAddress} placeholder="✍🏻 Edit Address" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="contactNo">
                    <Form.Label>ContactNO</Form.Label>
                    <Form.Control type="text" value={this.state.contactNo} onChange={this.onChangeBranchContactNo} placeholder="✍🏻 Edit ContactNo" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={this.state.email} onChange={this.onChangeBranchEmail} placeholder="✍🏻 Edit Email" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Email">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeBranchPhoto} required
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Branch
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
                </div>
        </div>
       );
  }

}