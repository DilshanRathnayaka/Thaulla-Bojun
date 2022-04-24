import {Redirect , Route} from "react-router-dom";

const PrivateOrderManagerStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-orderM" />
                )
            }
        />
    )
}

export default PrivateOrderManagerStaffRoute;