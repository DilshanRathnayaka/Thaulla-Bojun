import {Redirect , Route} from "react-router-dom";

const PrivateAssistantStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-stockM" />
                )
            }
        />
    )
}

export default PrivateAssistantStaffRoute;