import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./complaint.css";

const Addcomplaint = ()=>{

    const [complaintId, setComplaintId] = useState("");
    const [complaintType , setComplaintType] = useState("");
    const [description , setDescription] = useState("");
    const [complaintEmail , setComplaintEmail] = useState("");
 


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/ordercomplaint/add" , {complaintId, complaintType  , description, complaintEmail});

            alert('upload successfully')

        } catch (error) {
            
            alert(error)
        }
    }

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:"red"}}><b>Order Management System</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to = "/staff-orderM"><i className="fa fa-fw fa-home"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/add-orderM"><i className="fa fa-user-circle" aria-hidden="true"></i> Add Complaint</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/display-orderM"><i className="fa fa-desktop" aria-hidden="true"></i> Display Order</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
              <button className="btn btn-outline-success" type="submit"><i className="fa fa-fw fa-search"></i>Search</button>
            </form>
          </div>
        </div>
      </nav> 
       <div className="bg"> 
            <div className="signup-form" style={{opacity:"0.93"}}>
            <form onSubmit = {registerHandler}>
                <h2>Add Complaints</h2>
                
                
                <label for="complaintId" className="form-label">complaint ID </label>
                <div className="form-group">
                    <div className="input-group">
                    <div className="input-group-prepend">
                         {/*   <span className="input-group-text">
                                 <span className="fa fa-user"></span> 
                            </span>   */}                 
                        </div>
                        
                        <br></br>
                        <input type="text" className="form-control" name="complaintId" placeholder="Enter complaint Id" required="required" 
                        value = {complaintId} onChange = {(e)=>setComplaintId(e.target.value)}
                        />
                    </div>
                </div>
                <label for="complaintType " className="form-label">Complaint Type</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        {/*    <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                        </span>    */}                
                        </div>
                        
                        <input type="text" className="form-control" name="complaintType" placeholder="Enter Complaint Type" required="required" 
                        value = {complaintType} onChange = {(e)=>setComplaintType(e.target.value)}
                        />
                    </div>
                </div>
                <label for="description" className="form-label">Description </label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        {/*}    <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                    </span>      */}              
                        </div>
                        
                        <textarea rows="5" Cols="50" className="form-control" name="description" placeholder="Enter description" required="required" 
                        value = {description} onChange = {(e)=>setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <label for="customerEmail" className="form-label"> Customer Email </label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        {/*    <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                        </span> */}              
                        </div>
                        
                        <input type="text" className="form-control" name="customerEmail" placeholder="Enter Customer Email" required="required" 
                        value = {complaintEmail} onChange = {(e)=>setComplaintEmail(e.target.value)}
                        />
                    </div>
                </div>

                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Add</button>
                </div>
            </form>
            
        </div>
       </div>
       </div>
    )
}

export default Addcomplaint;