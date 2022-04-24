import {Redirect , Route} from "react-router-dom";

const PrivateCustomerStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-supplierM" />
                )
            }
        />
    )
}

export default PrivateCustomerStaffRoute;