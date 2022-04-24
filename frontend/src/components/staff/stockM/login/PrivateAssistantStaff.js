import { useEffect } from "react";


const PrivateAssistantStaff = ({history})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history.push("/staff-stockM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history.push("/staff-login-stockM");
    }

    return(

            <div >
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                
            </div>

    )

}

export default PrivateAssistantStaff;