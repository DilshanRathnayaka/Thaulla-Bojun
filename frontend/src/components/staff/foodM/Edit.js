import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    this.onChangeChefId = this.onChangeChefId.bind(this);
    this.onChangeChefName = this.onChangeChefName.bind(this);
    this.onChangeChefAddress = this.onChangeChefAddress.bind(this);
    this.onChangeChefPhone = this.onChangeChefPhone.bind(this);
    this.onChangeChefEmail = this.onChangeChefEmail.bind(this);
    this.onChangeChefExp = this.onChangeChefExp.bind(this);
    this.onChangeChefPhoto = this.onChangeChefPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      chefid: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      exp: '',
      photo:'',
      
    }
  }

  onChangeChefId(e) {
    this.setState({ chefid: e.target.value })
  }

  onChangeChefName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeChefAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeChefPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeChefEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeChefExp(e) {
    this.setState({ exp: e.target.value })
  }

  onChangeChefPhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('chefid', this.state.chefid);
        formData.append('name', this.state.name);
        formData.append('address', this.state.address);
        formData.append('phone', this.state.phone);
        formData.append('email', this.state.email);
        formData.append('exp', this.state.exp);
        formData.append('photo', this.state.photo);
        
        

    axios.put('http://localhost:8070/chefs/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Chef successfully updated')
      }).catch((error) => {
        console.log(error)
        alert(error)
        
      })
      // Redirect to Customer List 
    this.props.history.push('/edit-foodM')
    
  }


  render() {
    const {chefid, name , address , phone , email, exp , photo} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
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
                        <Link className="nav-link " aria-current="page" to = "/staff-foodM"><i class="fa fa-fw fa-home"></i>Create Shortcomings</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to = "/add-foodM"><i class="fa fa-user-circle" aria-hidden="true"></i>Assign Chefs</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/foodM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Chefs</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "/edit-foodM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> View Orders</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "/edit-foodM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update New Food Arrivals</Link>
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

                    <td controlId="Id">
                    <label>Chef Id</label>
                    <input type="text" value={chefid} onChange={this.onChangeChefId} required disabled/>
                    </td>

                    <td controlId="Name">
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.onChangeChefName} required disabled/>
                    </td>

                    <td controlId="Address">
                    <label>Address</label>
                    <input type="text" value={address} onChange={this.onChangeChefAddress} required disabled/>
                    </td>

                    <td controlId="Phone">
                    <label>Phone</label>
                    <input type="text" value={phone} onChange={this.onChangeChefPhone} required disabled/>
                    </td>

                    <td controlId="Email">
                    <label>Email</label>
                    <input type="text" value={email} onChange={this.onChangeChefEmail} required disabled/>
                    </td>

                    <td controlId="Exp">
                    <label>Experience</label>
                    <input type="text" value={exp} onChange={this.onChangeChefExp} required disabled/>
                    </td>

                    



                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Id">
                    <Form.Label>Chef Id</Form.Label>
                    <Form.Control type="text" value={this.state.chefid} onChange={this.onChangeChefId} placeholder="✍🏻 Edit Id" required />
                    </Form.Group>

                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeChefName} placeholder="✍🏻 Edit Name" required />
                    </Form.Group>

                    <Form.Group controlId="Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeChefAddress} placeholder="✍🏻 Edit Address" required/>
                    </Form.Group>

                    <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" value={this.state.phone} onChange={this.onChangeChefPhone} placeholder="✍🏻 Edit Phone" required/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={this.state.email} onChange={this.onChangeChefEmail} placeholder="✍🏻 Edit Email" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Exp">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control type="text" value={this.state.exp} onChange={this.onChangeChefExp} placeholder="✍🏻 Edit Experience" required/>
                    </Form.Group><br/>


                    <Form.Group controlId="Photo">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeChefPhoto} required
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Chef
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}