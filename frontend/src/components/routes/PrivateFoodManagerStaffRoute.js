import {Redirect , Route} from "react-router-dom";

const PrivateFoodManagerStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-foodM" />
                )
            }
        />
    )
}

export default PrivateFoodManagerStaffRoute;