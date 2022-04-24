import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AddPromotions = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {

            foodItemName: '',
            quantity : '',
            description : '',
            discountRate: '',
            priorPrice: '',
            presentPrice : '',
            photo: '',

        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('foodItemName', newUser.foodItemName);
        formData.append('quantity', newUser.quantity);
        formData.append('description', newUser.description);
        formData.append('discountRate', newUser.discountRate);
        formData.append('priorPrice', newUser.priorPrice);
        formData.append('presentPrice', newUser.presentPrice);
        formData.append('photo', newUser.photo);

        axios.post('http://localhost:8070/promotions/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Promotion is uploaded successfully")
                setNewUser({foodItemName :'' , quantity : '' , description : '' , discountRate : '' , priorPrice : '' , presentPrice:'', photo:''})
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
          <a className="navbar-brand" href="#" style={{color:"red"}}><b>Marketing Management System</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to = "/staff-MarketingM"><i class="fa fa-fw fa-home"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/add-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Promotion</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to = "/addfood-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create New Food Item</Link>
               </li>
              <li className="nav-item">

                <Link className="nav-link" to = "/display-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Details</Link>
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
                <label for="foodItemName" className="form-label">Food Item Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the Food Item Name"
                    name="foodItemName"
                    value={newUser.foodItemName}
                    onChange={handleChange} required
                />
                <label for="quantity" className="form-label">Quantity</label>
                <input 
                    type="text"
                    placeholder="Enter the Quantity"
                    className="form-control"
                    name="quantity"
                    value={newUser.quantity}
                    onChange={handleChange} required 
                />
                <label for="description" className="form-label">Description</label>
                <input 
                    type="text"
                    placeholder="Enter the Description"
                    className="form-control"
                    name="description"
                    value={newUser.description}
                    onChange={handleChange} required
                />
                 <label for="discountRate" className="form-label">Discount Rate</label>
                <textarea
                    rows = "5" cols ="50"
                    placeholder="Enter the Discount Rate"
                    className="form-control"
                    name="discountRate"
                    value={newUser.discountRate}
                    onChange={handleChange} required
                 />
                  <label for="priorPrice" className="form-label">Prior Price</label>
                 <input 
                    type="text"
                    placeholder="Enter the Prior Price"
                    className="form-control"
                    name="priorPrice"
                    value={newUser.priorPrice}
                    onChange={handleChange} required 
                />
                 <label for="presentPrice" className="form-label">Present Price</label>
                <input 
                    type="text"
                    placeholder="Enter the Present Price"
                    className="form-control"
                    name="presentPrice"
                    value={newUser.presentPrice}
                    onChange={handleChange} required
                />

            </div>

            
            <div className="jumbotron">
                <h1 className="display-4">Upload a Photo of Promotion</h1>
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
        <a href="/add-customerM"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a>
        <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        
    );
}

export default AddPromotions;