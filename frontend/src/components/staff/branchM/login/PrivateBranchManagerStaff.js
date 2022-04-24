import { useEffect } from "react";


const PrivateBranchManagerStaff = ({history})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history.push("/staff-branchM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history.push("/staff-login-branchM");
    }

    return(

            <div style={{backgroundColor:"white" , color : "white"}}>
                <img src="" style={{width:"60px"}}/>
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                   
            </div>

    )

}

export default PrivateBranchManagerStaff;