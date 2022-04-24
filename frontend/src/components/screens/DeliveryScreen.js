import {useEffect , useState} from "react";
import axios from "axios";
import "./NavBar.css";
import "./HomeScreen.css";
import './styles.css';
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Actions
import {getProducts as listProducts} from "../../Redux/actions/productActions";

const PrivateScreen = ({history , click})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authToken")){  //push a user if he already logged in
            history.push("/login");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () =>{
        return cartItems.reduce((qty , item) => qty + Number(item.qty) , 0)
    }

    //Add Section
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [name , setName] = useState("");
    const [city , setCity] = useState("");
    const [address , setAddress] = useState("");
    const [contactNo , setContactNo] = useState("");

    
    const DelieverHandler = async (e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/deliveryscreen/add" , {name , city , address , contactNo} , config);
            setLoading(false)

        } catch (error) {
            alert(error)
            setIsError(true);
            setLoading(false)
        }
    }

    const notify = () => toast("Successfully Delivered 😘");


    return(
            <div>
                <nav className="navbar sticky-top">
                    {/*logo*/}
                    <div className="navbar__logo">
                        <h2>Thaulla Bojun</h2>
                    </div>

                    {/*links*/}
                    <ul className="navbar__links">
                        <li>
                            <Link to="/cart" className="cart__link">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                <span>
                                     Cart
                                     <span className="cartlogo__badge">{getCartCount()}</span>
                                </span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to="/" >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/promotions" >
                                Promotions
                            </Link>
                        </li>
                        <li>
                            <Link to="/profiles" >
                                Profiles
                            </Link>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                        </li>
                    </ul>

                    {/*hamburger menu*/}
                    <div className="hamburger__menu" >
                        <div style={{width:"30px"}}></div>
                        <div style={{width:"30px"}}></div>
                        <div style={{width:"30px"}}></div>
                    </div>

                </nav>
                <div className="container" style={{width:"50%"}}><br/><br/>
                    <form onSubmit={DelieverHandler} style={{background:"#171717" , padding:"10px 10px 10px 10px" , opacity:"0.9"}}>
                    <div className="cmb-3">
                        <label for="name" className="form-label">Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter the your name"
                            name="name"
                            value={name}
                            required onChange = {(e)=>setName(e.target.value)}
                        />
                        <label for="city" className="form-label">City</label>
                        <input 
                            type="text"
                            placeholder="Enter the City"
                            className="form-control"
                            name="city"
                            value={city}
                            required onChange = {(e)=>setCity(e.target.value)}
                        />
                        <label for="address" className="form-label">Address</label>
                        <input 
                            type="text"
                            placeholder="Enter the Address"
                            className="form-control"
                            name="address"
                            value={address}
                            required onChange = {(e)=>setAddress(e.target.value)}
                        />  
                        <label for="contactNo" className="form-label">Contact No</label>
                        <input 
                            type="text"
                            placeholder="Enter Contact No"
                            className="form-control"
                            name="contactNo"
                            value={contactNo}
                            required pattern="[0-9]{10}" onChange = {(e)=>setContactNo(e.target.value)}
                        />  
                    </div>
                    <br/>
                    <div>
                            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                            {/*decision*/}
                            <button
                                type="submit"
                                className="btn btn-primary mt-3"
                                disabled={loading}
                                onClick={notify}
                                ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Processing...' : ' Proceed to Deliver'}
                            </button>
                            <ToastContainer style={{marginTop:"50px"}}/>
                                
                    </div>
                </form>
                <br/>
                <br/><br/><br/><br/>
                </div>
        </div>
           
    )

}

export default PrivateScreen;