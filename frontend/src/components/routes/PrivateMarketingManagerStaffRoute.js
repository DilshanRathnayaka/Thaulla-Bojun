import {Redirect , Route} from "react-router-dom";

const PrivateMarketingManagerStaffRoute = ({component : Component , ...rest})=>{
    return(
        <Route 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authTokenStaff") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/staff-login-MarketingM" />
                )
            }
        />
    )
}

export default PrivateMarketingManagerStaffRoute;