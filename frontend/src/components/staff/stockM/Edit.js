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
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onChangeStudentBirthdate = this.onChangeStudentBirthdate.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      name: '',
      age: '',
      gender: '',
      birthdate: '',
      phone: '',
      address: '',
      email: '',
      photo:'',
      
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value })
  }

  onChangeStudentBirthdate(e) {
    this.setState({ birthdate: e.target.value })
  }

  onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeStudentAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
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
        formData.append('gender', this.state.gender);
        formData.append('phone',this.state.phone);
        formData.append('address',this.state.address);
        formData.append('email',this.state.email);

    axios.put('http://localhost:8070/stocks/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Assistant successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to assistant List 
    this.props.history.push('/edit-stockM')
    
  }


  render() {
    const { name , age , gender , birthdate , address, phone, email, photo} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Stock Management System</b></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                      <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to = "/staff-stockM" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to = "/add-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#" style={{color:"#008080"}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Assistant</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/addInven-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to = "/displayInven-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
                    </li> 
                    </ul>
                  </div>
                </div>
              </nav>
             
              <div className="stockImage"><br/><br/>
                <div className="form-wrapper container" style={{width:"100%", background:"#000000" , padding:"5px 5px 5px 5px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Current Info 👁</h1>
                <table >

                    <td controlId="Name">
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.onChangeStudentName} required disabled/>
                    </td>

                    <td controlId="Age">
                    <label>Age</label>
                    <input type="text" value={age} onChange={this.onChangeStudentAge} required disabled/>
                    </td>

                    <td controlId="Gender">
                    <label>Gender</label>
                    <input type="text" value={gender} onChange={this.onChangeStudentGender} required disabled/>
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
                    <input type="text" value={phone} onChange={this.onChangeStudentPhone} required disabled/>
                    </td>

                    <td controlId="Email">
                    <label>Email</label>
                    <input type="text" value={email} onChange={this.onChangeStudentEmail} required disabled/>
                    </td>



                </table><br/>
                </div><br/>
                <div className="form-wrapper container" style={{width:"50%"  , background:"#000000" , padding:"5px 5px 10px 10px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} placeholder="✍🏻 Edit Name" required pattern="[A-Za-z]+"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" value={this.state.age} onChange={this.onChangeStudentAge} placeholder="✍🏻 Edit Age" required pattern="[0-9]{1,3}"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" value={this.state.gender} onChange={this.onChangeStudentGender} placeholder="✍🏻 Edit Gender" required pattern="[A-Za-z]+"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Birthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="text" value={this.state.birthdate} onChange={this.onChangeStudentBirthdate} placeholder="✍🏻 Edit Birthday" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange={this.onChangeStudentAddress} placeholder="✍🏻 Edit Address" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" value={this.state.phone} onChange={this.onChangeStudentPhone} placeholder="✍🏻 Edit Phone" required pattern = "[0-9]{10}"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={this.state.email} onChange={this.onChangeStudentEmail} placeholder="✍🏻 Edit Email" required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Photo">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeStudentPhoto} required style={{color:"#000000"}}
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Assistant
                    </Button>
                </Form><br/>
                </div><br/><br/>
                </div>
        </div>
       );
  }

}