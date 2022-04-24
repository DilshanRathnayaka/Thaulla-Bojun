import {Redirect , Route} from "react-router-dom";

const PrivateDeliveryStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-DeliveryM" />
                )
            }
        />
    )
}

export default PrivateDeliveryStaffRoute;