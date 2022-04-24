import {Redirect , Route} from "react-router-dom";

const PrivateBranchStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-branchM" />
                )
            }
        />
    )
}

export default PrivateBranchStaffRoute;