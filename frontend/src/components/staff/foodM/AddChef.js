import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AddChef = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            chefid: '',
            name: '',
            address : '',
            phone : '',
            email: '',
            exp: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('chefid', newUser.chefid);
        formData.append('name', newUser.name);
        formData.append('address', newUser.address);
        formData.append('phone', newUser.phone);
        formData.append('exp', newUser.exp);
        formData.append('photo', newUser.photo);
        formData.append('email', newUser.email);

        axios.post('http://localhost:8070/chefs/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("data is uploaded successfully")
                setNewUser({chefid : '', name :'' , address : '' , phone : '' , email : '', exp : '' , photo : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                alert(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

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
              {/* shortcoming tab */}
              <li className="nav-item">
                <Link className="nav-link "  aria-current="page" to = "/staff-foodM"><i class="fa fa-calendar-minus-o"></i>Create Shortcomings</Link>
              </li>
              {/*assign chef tab */}
              <li className="nav-item">
                <Link className="nav-link active" to = "/add-foodM"><i class="fa fa-user-circle" aria-hidden="true"></i> Assign Chefs</Link>
              </li>

              {/*  */}
              <li className="nav-item">
                <Link className="nav-link" to = "/display-foodM"><i class="fa fa-list-alt" aria-hidden="true"></i>Display Chefs</Link>
              </li>

              {/* View orders tab */}
              <li className="nav-item">
                <Link className="nav-link" to = "/view-foodM"><i class="fa fa-list-alt" aria-hidden="true"></i>View Orders</Link>
              </li>

              {/*update new food arrivals */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to = "/update-foodM"><i class="fa fa-fw fa-home"></i>update new food arrivals </Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
              <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
            </form>
          </div>
        </div>
      </nav>
      
     
        <div className="container" style={{width:"25%"  }} ><br/><br/>
        
            <form onSubmit={handleSubmit} encType='multipart/form-data' >
            <h3>Add Chef Details</h3>
            <div className="cmb-3" >
              <label for="chefid" className="form-label">Chef ID</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter Chef ID :"
                    name="chefid"
                    value={newUser.chefid}
                    onChange={handleChange} required
                />

                <label for="name" className="form-label">Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter Chef Name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange} required
                />
                <label for="address" className="form-label">Address</label>
                <input 
                    type="textarea"
                    placeholder="Enter Address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required
                />
                <label for="phone" className="form-label">Contact No</label>
                <input 
                    type="text"
                    placeholder="Ex : xxxxxxxxxx"
                    className="form-control"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleChange} required pattern= "[0-9]{10}"
                />  

                <label for="email" className="form-label">Email :</label>
                <input 
                    type="text"
                    placeholder=" "
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                />  

                <label for="exp" className="form-label">Experience :</label>
                <textarea
                    row= "8"
                    column = "10"
                    placeholder="Enter Experience"
                    className="form-control"
                    name="exp"
                    value={newUser.exp}
                    onChange={handleChange} required
                />  

            </div>
           
            <div className="jumbotron">
                <h1 className="display-4">Upload a Photo of Chef</h1>
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
        </div>
        

        <br/>
        

        <br></br><br></br>
        
        
        
        
        <br/><br/><br/><br/><br/><br/>
        
        </div>
        
        
        
    );

    
}

export default AddChef;