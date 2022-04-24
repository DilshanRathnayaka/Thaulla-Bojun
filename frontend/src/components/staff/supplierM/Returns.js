import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Returns = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            itemID: '',
            itemName : '',
            itemQuantity : '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('itemID', newUser.itemID);
        formData.append('itemName', newUser.itemName);
        formData.append('itemQuantity', newUser.itemQuantity);
        formData.append('photo', newUser.photo);

        axios.post('http://localhost:8070/returns/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Return is uploaded successfully")
                setNewUser({itemNo :'' , itemName : '' , itemQuantity : '' ,  photo : ''})
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
                <Link className="nav-link" to = "/add-supplierM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Supplier</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/display-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Suppliers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/return-supplierM"><i class="fa fa-desktop" aria-hidden="true"></i> Returns</Link>
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
                <label for="itemNo" className="form-label">Item No</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter item code "
                    name="itemID"
                    value={newUser.itemID}
                    onChange={handleChange} required //pattern="[0-9][A-Z][a-z]"
                />
                <label for="itemName" className="form-label">Item Name</label>
                <input 
                    type="text"
                    placeholder="Enter item name"
                    className="form-control"
                    name="itemName"
                    value={newUser.itemName}
                    onChange={handleChange} required
                />
                <label for="itemQuantity" className="form-label">Item Quantity</label>
                <input 
                    type="Number"
                    placeholder="Enter item quantity "
                    className="form-control"
                    name="itemQuantity"
                    value={newUser.itemQuantity}
                    onChange={handleChange} required
                />  
                
            </div>
            
            <div className="jumbotron">
                <h1 className="display-4">Upload any evidence(snaps)</h1>
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
        <br/>
        
 
        <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        
    );
}

export default Returns;