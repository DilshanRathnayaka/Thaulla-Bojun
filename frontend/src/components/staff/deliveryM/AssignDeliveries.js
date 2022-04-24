import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Delivery.css";

const AssignDeliveries = ()=>{

    const [name , setName] = useState("");
    const [orderid , setOredrid] = useState("");
    const [destination , setDestination] = useState("");
    const [deliveryid , setDeliveryid] = useState("");
    const [deliverydate , setDeliverydate] = useState("");


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/assigndeliveries/add" , {name , orderid , destination, deliveryid, deliverydate});

            alert('upload successfully')

        } catch (error) {
            
            alert('error')
        }
    }

    return(

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
          <Link className="nav-link " to = "/add-deliveryM"><i class="fa fa-user-plus" aria-hidden="true"></i> Create Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "/display-deliveryM"><i class="fa fa-users" aria-hidden="true"></i> Display Profiles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to = "/assigndeliveries-deliveryM"><i class="fa fa-truck" aria-hidden="true"></i> Assign Deliveries</Link>
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


       <div className="bg"> 
            <div className="signup-form" style={{opacity:"0.93"}}>
            <form onSubmit = {registerHandler}>
                <h2>Assign Deliveries</h2>
                
                
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                           {/* <span className="input-group-text">
                                <span className="fa fa-user"></span>
                        </span> */}
                          
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="Enter name" required="required" 
                        value = {name} onChange = {(e)=>setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {/*<span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                      </span>*/}
                      
                        </div>
                        <input type="text" className="form-control" name="orderid" placeholder="Enter order ID" required="required" 
                        value = {orderid} onChange = {(e)=>setOredrid(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {/*<span className="input-group-text">
                                <i className="fa fa-lock"></i>
                      </span> */}                   
                        </div>
                        <input type="text" className="form-control" name="destination" placeholder="Enter Destination" required="required" 
                        value = {destination} onChange = {(e)=>setDestination(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {/*<span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                      </span> */}                   
                        </div>
                        <input type="text" className="form-control" name="deliveryid" placeholder="ENter delivery id" required="required" 
                        value = {deliveryid} onChange = {(e)=>setDeliveryid(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {/*<span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                      </span> */}                   
                        </div>
                        <input type="text" className="form-control" name="reqdate" placeholder="Delivery date" required="required" 
                        value = {deliverydate} onChange = {(e)=>setDeliverydate(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Add</button>
                </div>
            </form>
            
            
        </div>
       </div></div>
    )
}

export default AssignDeliveries;