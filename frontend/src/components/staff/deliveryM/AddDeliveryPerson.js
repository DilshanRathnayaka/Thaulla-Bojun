import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AddDeliveryPerson = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newDeliveryperson, setNewDeliveryperson] = useState(
        {
            name: '',
            age : '',
            workdate : '',
            birthdate: '',
            address: '',
            phonenumber: '',
            emailaddress: '',
            branchcode: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', newDeliveryperson.photo);
        formData.append('birthdate', newDeliveryperson.birthdate);
        formData.append('name', newDeliveryperson.name);
        formData.append('age', newDeliveryperson.age);
        formData.append('workdate', newDeliveryperson.workdate);
        formData.append('address', newDeliveryperson.address);
        formData.append('phonenumber', newDeliveryperson.phonenumber);
        formData.append('emailaddress', newDeliveryperson.emailaddress);
        formData.append('branchcode', newDeliveryperson.branchcode);

        axios.post('http://localhost:8070/deliveryperson/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Image is uploaded successfully")
                setNewDeliveryperson({name :'' , age : '' , workdate : '' , birthdate : '' , photo : '',address : '',phonenumber : '',emailaddress :'' ,branchcode : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                alert(err);
             });
    }

    const handleChange = (e) => {
      setNewDeliveryperson({...newDeliveryperson, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
      setNewDeliveryperson({...newDeliveryperson, photo: e.target.files[0]});
    }

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
                <Link className="nav-link active" to = "/add-deliveryM"><i class="fa fa-user-plus" aria-hidden="true"></i> Create Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i> Display Profiles</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to = "/assigndeliveries-deliveryM"><i class="fa fa-truck" aria-hidden="true"></i> Assign Deliveries</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link " to = "/vieworders-deliveryM"><i class="fa fa-list" aria-hidden="true"></i>  Order Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/viewbranches-deliveryM"><i class="fa fa-building" aria-hidden="true"></i>  View Branches</Link>
            </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
              <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
            </form>
          </div>
        </div>
      </nav>
        <div className="container" style={{width:"50%"}}><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="cmb-3">
                <label for="name" className="form-label">Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the name"
                    name="name"
                    value={newDeliveryperson.name}
                    onChange={handleChange} required
                />
                <label for="age" className="form-label">Age</label>
                <input 
                    type="text"
                    placeholder="Enter the age"
                    className="form-control"
                    name="age"
                    value={newDeliveryperson.age}
                    onChange={handleChange} required
                />
                <label for="address" className="form-label">Address</label>
                <input 
                    type="text"
                    placeholder="Enter the address"
                    className="form-control"
                    name="address"
                    value={newDeliveryperson.address}
                    onChange={handleChange} required
                />
                <label for="phonenumber" className="form-label">Phone Number</label>
                <input 
                    type="text"
                    placeholder="Enter Phone number"
                    className="form-control"
                    name="phonenumber"
                    value={newDeliveryperson.phonenumber}
                    onChange={handleChange} required pattern="[0-9]{10}" 
                />
                <label for="emailaddress" className="form-label">Email Address</label>
                <input 
                    type="text"
                    placeholder="Enter Email Address"
                    className="form-control"
                    name="emailaddress"
                    value={newDeliveryperson.emailaddress}
                    onChange={handleChange} pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                />
                <label for="branchcode" className="form-label">Branch Code</label>
                <input 
                    type="text"
                    placeholder="Enter Branch Code"
                    className="form-control"
                    name="branchcode"
                    value={newDeliveryperson.branchcode}
                    onChange={handleChange} required
                />
                 <label for="workdate" className="form-label">work date</label>
                 <input 
                type="text"
                name="workdate"
                value={newDeliveryperson.workdate}
                onChange={handleChange} required
            />
            </div>
            
            <div className="jumbotron">
                <h1 className="display-4">Upload a Photo of Delivery Person </h1>
                <p className="lead">
                Please choose a valid relavant photo 👩‍🎓
                </p>
                <hr className="my-4" />
            </div>
            <i class="fa fa-folder-open" aria-hidden="true"></i>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto} required
            />
            <label for="birthdate" className="form-label">Birthdate</label>

            <input 
                type="date"
                name="birthdate"
                value={newDeliveryperson.date}
                onChange={handleChange} required
            />

            
            <br/>
            <div>
                     {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Uploading...' : 'Upload'}
                     </button>
                    
            </div>
        </form>
        <br/>
        <a href="/add"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a>
        <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        
    );
}

export default AddDeliveryPerson;