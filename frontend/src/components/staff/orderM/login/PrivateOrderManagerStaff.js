import { useEffect } from "react";


const PrivateOrderManagerStaff  = ({history})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history.push("/staff-orderM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history.push("/staff-login-orderM");
    }

    return(

            <div style={{backgroundColor:"green" , color : "white"}}>
                <img src="thaulla1.png" style={{width:"60px"}}/>
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i className="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                <marquee width="100%" direction="left" >
                <i className="fa fa-heartbeat" aria-hidden="true"></i> Welcome to the Order Managment System
                </marquee>
            </div>

    )

}

export default PrivateOrderManagerStaff;