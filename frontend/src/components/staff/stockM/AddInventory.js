import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddInventory = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [inventory, setinventory] = useState(
        {
            itemId: '',
            itemName : '',
            stock : '',
            stockIn: '',
            stockOut : '',
            unitPrice: '',
            date: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', inventory.photo);
        formData.append('itemName', inventory.itemName);
        formData.append('stock', inventory.stock);
        formData.append('stockIn', inventory.stockIn);
        formData.append('stockOut', inventory.stockOut);
        formData.append('unitPrice', inventory.unitPrice);
        formData.append('date', inventory.date);
        formData.append('itemId', inventory.itemId);
        //formData.append('qualification', inventory.qualification);
        formData.append('addreass', inventory.addreass);

        axios.post('http://localhost:8070/inventories/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                toast("Success! Item Added");
                setinventory({itemId :'' , itemName : '' , stock : '', stockIn : '' , stockOut : '' , unitPrice : '' , date : '' , photo : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                toast("Error Item ID must be unique");
             });
    }

    const handleChange = (e) => {
        setinventory({...inventory, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setinventory({...inventory, photo: e.target.files[0]});
    }

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
              <Link className="nav-link" aria-current="page" to = "/staff-stockM" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to = "/addInven-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link " to = "/displayInven-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
            </li> 
          </ul>
          </div>
        </div>
      </nav>
        <div className="container" style={{width:"100%"}} className="stockImage" ><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"45%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"black" , padding:"10px 10px" , opacity:"0.8"}}>
            <div className="cmb-3">
                <label for="itemId" className="form-label">Item Id</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the item Id"
                    name="itemId"
                    value={inventory.itemId}
                    onChange={handleChange} required pattern="[A-Za-z0-9]+"
                /><br/>
                <label for="itemName" className="form-label">itemName</label>
                <input 
                    type="text"
                    placeholder="Enter the itemName"
                    className="form-control"
                    name="itemName"
                    value={inventory.itemName}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/>
                <label for="stock" className="form-label">Stock</label>
                <input 
                    type="text"
                    placeholder="Enter the stock"
                    className="form-control"
                    name="stock"
                    value={inventory.stock}
                    onChange={handleChange} required
                /><br/> 
                <label for="stockIn" className="form-label">Stock In</label>
                <input
                    type="text"
                    placeholder="Enter the stockIn"
                    className="form-control"
                    name="stockIn"
                    value={inventory.stockIn}
                    onChange={handleChange} required
                /><br/>
                <label for="stockOut" className="form-label">stock Out</label>  
                 <input 
                    type="text"
                    placeholder="Enter the stockOut"
                    className="form-control"
                    name="stockOut"
                    value={inventory.stockOut}
                    onChange={handleChange} required 
                /><br/>
                <label for="unitPrice" className="form-label">unit Price</label>  
                 <input 
                    type="text"
                    placeholder="Enter the unitPrice"
                    className="form-control"
                    name="unitPrice"
                    value={inventory.unitPrice}
                    onChange={handleChange} required 
                />   
            </div><br/>
            
            <div className="jumbotron">
                <h1 className="display-4" style={{color:"white"}}>Upload a Photo of Item</h1>
                <p className="lead" style={{color:"white"}}>
                Please choose a valid relavant photo 🍩
                </p>
                <hr className="my-4" />
            </div>
            <i class="fa fa-folder-open" aria-hidden="true"></i>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto} required style={{color:"#000000"}}
            />

            <input 
                type="date"
                name="date"
                value={inventory.date}
                onChange={handleChange} required style={{color:"#000000", marginLeft: "50px"}}
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
                     <ToastContainer style = {{marginTop:"50px"}}/>
                    
            </div>
            <br/>
            <a href="/add-stockM"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a><br/><br/>
        </form>
        <br/>
       
        <br/><br/>
        </div>
        </div>
        
    );
}

export default AddInventory;