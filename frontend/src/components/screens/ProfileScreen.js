import {useEffect , useState} from "react";
import axios from "axios";
import "./NavBar.css";
import "./HomeScreen.css";
import './styles.css';
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";

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

    const getProducts = useSelector(state => state.getProducts);
    const {products , loading , error} = getProducts;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () =>{
        return cartItems.reduce((qty , item) => qty + Number(item.qty) , 0)
    }

    //Promotions
    const [customers, setCustomers] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
        'http://localhost:8070/users'
        );

        setCustomers(response.data);
    
    };

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
                <div className="App">
                    <h1>All Customers</h1>

                    {/* Fetch data from API */}
                    <div>
                    <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
                    <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Customers
                    </button>
                    <br />
                    </div>

                    {/* Display data from API */}
                    <div className="students" style={{marginLeft:"50px"}}>
                    {customers &&
                        customers.map((customer, index) => {
                        return (
                            <div className="student" key={index}>
                            <h3 className="badge bg-success">Customer {index + 1}</h3>

                            <div className="details">
                                <div>
                                <div style={{float:"right"}}>
                                    <img src ={"images/" + customer.photo} style={{width:"200px" , height:"200px"}}
                                    className = "border border-danger rounded-circle"
                                    />
                                </div>
                                <p >👨<b style={{color:"red"}}>Name   : </b>{customer.name}</p>
                                <p >🏃<b style={{color:"green"}}>Age  : </b>{customer.age} years old</p>
                                <p >👫<b style={{color:"blue"}}>Gender: </b>{customer.gender}</p>
                                <p >🏕<b style={{color:"red"}}>Address: </b>{customer.address}</p>
                                <p >📱<b style={{color:"green"}}>Phone: </b>{customer.phone}</p>
                                <p >💌<b style={{color:"blue"}}>Email: </b>{customer.email}</p>
                                
                                </div>
                            
                                
                                

                            </div>
                            </div>
                        );
                        })}
                        </div><br/><br/>
                    </div>
                
                
                
            </div>
    )

}

export default PrivateScreen;