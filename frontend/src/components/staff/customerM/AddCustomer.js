import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Add.css";


const AddCustomer = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            name: '',
            age : '',
            gender : '',
            address: '',
            phone: '',
            email : '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('address', newUser.address);
        formData.append('phone', newUser.phone);
        formData.append('email', newUser.email);
        formData.append('name', newUser.name);
        formData.append('age', newUser.age);
        formData.append('gender', newUser.gender);

        axios.post('http://localhost:8070/users/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                setNewUser({name :'' , age : '' , gender : '' , address : '' , photo : '' , email:'', phone:''})
                toast("Success! Customer Added 😘")
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                toast("Error! Customer not Added Duplicate Key Found: Email must be unique")
             });
        
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    //dynamic search box
    const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    axios.get('http://localhost:8070/users').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].customer_name)
      }
      setMyOptions(myOptions)
    })
  }

  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
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
                <Link className="nav-link active" to = "/add-customerM" style={{color:"#00ff00"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
              </li>
              <li>
                <img src = "customer.gif" style={{width:"17%" , float:"right"}}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container" style={{width:"100%"}} className="bg3"><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"#171717" , padding:"10px 10px 10px 10px" , opacity:"0.8"}} className="polaroid">
            <div className="cmb-3">
                <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="name" className="form-label">Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange} required pattern="[A-Za-z]+" title="Name cannot contain any numbers or special characters"
                />
                <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="age" className="form-label">Age</label>
                <input 
                    type="text"
                    placeholder="Enter the age"
                    className="form-control"
                    name="age"
                    value={newUser.age}
                    onChange={handleChange} required pattern="[1-9]{1,3}" title="Age cannot contain any letters or special characters  and Age > 0"
                />
                <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="gender" className="form-label">Gender</label>
                <input 
                    type="text"
                    placeholder="Enter the gender"
                    className="form-control"
                    name="gender"
                    value={newUser.gender}
                    onChange={handleChange} required pattern="[A-Za-z]+" title="Gender cannot contain any numbers or special characters"
                />
                 <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="address" className="form-label">Address</label>
                <textarea
                    rows = "5" cols ="50"
                    placeholder="Enter the Address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required
                 />
                  <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="phone" className="form-label">Phone</label>
                 <input 
                    type="text"
                    placeholder="Enter the Phone"
                    className="form-control"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleChange} required pattern = "[0-9]{10}" title="Phone cannot contain any letters or special characters and cannot exceeded 10 digits"
                />
                 <label style={{fontSize:"30px" , color:"red"}}>*</label><label for="email" className="form-label">Email</label>
                <input 
                    type="email"
                    placeholder="Enter the Email"
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}" 
                />

            </div>

            
            <div className="jumbotron" style={{textAlign:"center"}}>
                <h1 className="display-4" style={{color:"white"}}>Upload a Photo of Customer</h1>
                <p className="lead" style={{color:"white"}}>
                <label style={{fontSize:"30px" , color:"red"}}>*</label>Please choose a valid relavant photo 👩‍🎓
                </p>
                <hr className="my-4" />
            </div>
            <div style={{textAlign:"center"}}>
              <i class="fa fa-folder-open" aria-hidden="true" style={{color:"white"}}></i>
              <input 
                  type="file" 
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto} required style={{color:"white" , backgroundColor:"black"}}
              />
            </div>

            <br/>
            <div style={{textAlign:"center"}}>
                     {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Uploading...' : 'Upload'}
                     </button>
                     <ToastContainer style={{marginTop:"50px"}}/>
                    
            </div>
        </form>
        <br/>
        <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        
    );
}

export default AddCustomer;