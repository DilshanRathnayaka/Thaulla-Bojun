import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentWorkDate = this.onChangeStudentWorkDate.bind(this);
    this.onChangeStudentBirthdate = this.onChangeStudentBirthdate.bind(this);
    this.onChangeStudentAddress= this.onChangeStudentAddress.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentEmailaddress = this.onChangeStudentEmailaddress.bind(this);
    this.onChangeStudentBranchCode = this.onChangeStudentBranchCode.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      name: '',
      age: '',
      workdate: '',
      birthdate: '',
      address: '',
      phonenumber: '',
      emailaddress: '',
      branchcode: '',
      photo:'',
      
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeStudentWorkDate(e) {
    this.setState({ workdate: e.target.value })
  }

  onChangeStudentBirthdate(e) {
    this.setState({ birthdate: e.target.value })
  }

  onChangeStudentAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeStudentPhone(e) {
    this.setState({ phonenumber: e.target.value })
  }

  onChangeStudentEmailaddress(e) {
    this.setState({ emailaddress: e.target.value })
  }

  onChangeStudentBranchCode(e) {
    this.setState({ branchcode: e.target.value })
  }

  onChangeStudentPhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('photo', this.state.photo);
        formData.append('birthdate', this.state.birthdate);
        formData.append('name', this.state.name);
        formData.append('age', this.state.age);
        formData.append('workdate', this.state.workdate);
        formData.append('address', this.state.address);
        formData.append('phonenumber', this.state.phonenumber);
        formData.append('emailaddress', this.state.emailaddress);
        formData.append('branchcode', this.state.branchcode);

    axios.put('http://localhost:8070/deliveryperson/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Delivery Person successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Delivery List 
    this.props.history.push('/edit-deliveryM')
    
  }


  render() {
    const { name , age , workdate , birthdate , address , phonenumber ,emailaddress ,branchcode ,photo} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
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
                        <Link className="nav-link " to = "/add-deliveryM"><i class="fa fa-user-plus" aria-hidden="true"></i> Create Delivery Profile</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i> Display Delivery Profiles</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profiles</Link>
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

                    <td controlId="Name">
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.onChangeStudentName} required disabled/>
                    </td>

                    <td controlId="Age">
                    <label>Age</label>
                    <input type="text" value={age} onChange={this.onChangeStudentAge} required disabled/>
                    </td>

                    <td controlId="WorkDate">
                    <label>WorkDate</label>
                    <input type="text" value={workdate} onChange={this.onChangeStudentWorkDate} required disabled/>
                    </td>

                    <td controlId="Birthdate">
                    <label>Birthdate</label>
                    <input type="text" value={birthdate} onChange={this.onChangeStudentBirthdate} required disabled/>
                    </td>

                    <td controlId="Address">
                    <label>Address</label>
                    <input type="text" value={address} onChange={this.onChangeStudentAddress} required disabled/>
                    </td>

                    <td controlId="Phone">
                    <label>Phone</label>
                    <input type="text" value={phonenumber} onChange={this.onChangeStudentPhone} required disabled/>
                    </td>

                    <td controlId="Emailaddress">
                    <label>Emailaddress</label>
                    <input type="text" value={emailaddress} onChange={this.onChangeStudentEmailaddress} required disabled/>
                    </td>

                    <td controlId="BranchCode">
                    <label>BranchCode</label>
                    <input type="text" value={branchcode} onChange={this.onChangeStudentBranchCode} required disabled/>
                    </td>



                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} placeholder="✍🏻 Edit Name" required />
                    </Form.Group>

                    <Form.Group controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" value={this.state.age} onChange={this.onChangeStudentAge} placeholder="✍🏻 Edit Age" required/>
                    </Form.Group>

                    <Form.Group controlId="WorkDate">
                    <Form.Label>WorkDate</Form.Label>
                    <Form.Control type="text" value={this.state.workdate} onChange={this.onChangeStudentWorkDate} placeholder="✍🏻 Edit WorkDate" required/>
                    </Form.Group>

                    <Form.Group controlId="Birthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="text" value={this.state.birthdate} onChange={this.onChangeStudentBirthdate} placeholder="✍🏻 Edit Birthday" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeStudentAddress} placeholder="✍🏻 Edit Address" required />
                    </Form.Group><br/>

                    <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" value={this.state.phonenumber} onChange={this.onChangeStudentPhone} placeholder="✍🏻 Edit Phone" required />
                    </Form.Group><br/>

                    <Form.Group controlId="Emailaddress">
                    <Form.Label>Emailaddress</Form.Label>
                    <Form.Control type="text" value={this.state.emailaddress} onChange={this.onChangeStudentEmailaddress} placeholder="✍🏻 Edit Emailaddress" required />
                    </Form.Group><br/>

                    <Form.Group controlId="BranchCode">
                    <Form.Label>BranchCode</Form.Label>
                    <Form.Control type="text" value={this.state.branchcode} onChange={this.onChangeStudentBranchCode} placeholder="✍🏻 Edit BranchCode" required />
                    </Form.Group> 

                    <Form.Group controlId="Email">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeStudentPhoto} required
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Delivery Person
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}