import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./food.css";

const AddShortcomings = ()=>{

    const [scid , setScid] = useState("");
    const [scitem , setScitem] = useState("");
    const [itemid , setItemid] = useState("");
    const [qty , setQty] = useState("");
    const [reqdate , setReqdate] = useState("");


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/shortcomings/add" , {scid , scitem , itemid, qty, reqdate});

            alert('upload successfully')

        } catch (error) {
            
            alert('error')
        }
    }

    return(
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
                <Link className="nav-link active"  aria-current="page" to = "/staff-foodM"><i class="fa fa-calendar-minus-o"></i>Create Shortcomings</Link>
              </li>
              {/*assign chef tab */}
              <li className="nav-item">
                <Link className="nav-link " to = "/add-foodM"><i class="fa fa-user-circle" aria-hidden="true"></i> Assign Chefs</Link>
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
                <Link className="nav-link " aria-current="page" to = "/staff-foodM"><i class="fa fa-fw fa-home"></i>update new food arrivals </Link>
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
                <h2>Add Shortcomings</h2>
                
                
                <label for="scid" className="form-label">Shortcoming ID </label>
                <div className="form-group">
                    <div className="input-group">
                    <div className="input-group-prepend">                
                </div>
                        
                        <br></br>
                        <input type="text" className="form-control" name="scid" placeholder="Enter Shortcoming ID" required="required" 
                        value = {scid} onChange = {(e)=>setScid(e.target.value)}
                        />
                    </div>
                </div>
                <label for="scitem" className="form-label">Shortcoming Item </label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                       
                        </div>
                        
                        <input type="text" className="form-control" name="scitem" placeholder="Enter shortcoming item" required="required" 
                        value = {scitem} onChange = {(e)=>setScitem(e.target.value)}
                        />
                    </div>
                </div>
                <label for="itemid" className="form-label">Item ID </label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                
                        </div>
                        
                        <input type="text" className="form-control" name="itemid" placeholder="Enter Item ID" required="required" 
                        value = {itemid} onChange = {(e)=>setItemid(e.target.value)}
                        />
                    </div>
                </div>
                <label for="qty" className="form-label"> Quantity </label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                     
                        </div>
                        
                        <input type="text" className="form-control" name="qty" placeholder="Enter quantity" required="required" 
                        value = {qty} onChange = {(e)=>setQty(e.target.value)}
                        />
                    </div>
                </div>
                <label for="reqdate" className="form-label">Required Date</label> <br></br>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                                  
                        </div>
                        
                        <input type="date" className="form-control" name="reqdate" placeholder="Select Required Date" required="required" 
                        value = {reqdate} onChange = {(e)=>setReqdate(e.target.value)}
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

export default AddShortcomings;