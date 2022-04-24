import {useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./newfood.css";

const AddNewFoods  = ()=>{

    const [foodItemName , setfoodItemName] = useState("");
    const [quantity , setquantity] = useState("");
    const [price , setprice] = useState("");
    const [ingredience , setingredience] = useState("");
    const [procedure , setprocedure] = useState("");


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/marketingfood/add" , {foodItemName , quantity , price, ingredience, procedure});

            alert('New Food upload successfully')

        } catch (error) {
            
            alert(error)
        }
    }

    return(
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
              <Link className="nav-link" aria-current="page" to = "/staff-MarketingM"><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Promotions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to = "/addfood-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create New Food Item</Link>
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
    
       <div className="bg"> 
            <div className="signup-form" style={{opacity:"0.93"}}>
            <form onSubmit = {registerHandler}>
                <h2>Add New Food</h2>
                
                
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                               
                        </div>
                        <input type="text" className="form-control" name="foodItemName" placeholder="Enter New Food Item Name" required="required" 
                        value = {foodItemName} onChange = {(e)=>setfoodItemName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                                
                        </div>
                        <input type="text" className="form-control" name="quantity" placeholder="Enter Quantity" required="required" 
                        value = {quantity} onChange = {(e)=>setquantity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                           
                        </div>
                        <input type="text" className="form-control" name="price" placeholder="Enter Price" required="required" 
                        value = {price} onChange = {(e)=>setprice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        
                        <input type="text" className="form-control" name="ingredience" placeholder="Enter Ingredience" required="required" 
                        value = {ingredience} onChange = {(e)=>setingredience(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        
                        <input type="text" className="form-control" name="procedure" placeholder="Enter procedure" required="required" 
                        value = {procedure} onChange = {(e)=>setprocedure(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Upload</button>
                </div>
            </form>
            
        </div>
       </div>


       
       </div>
    )
}

export default AddNewFoods;