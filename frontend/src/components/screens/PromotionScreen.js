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
    const [promotions, setPromotions] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
        'http://localhost:8070/promotions'
        );

        setPromotions(response.data);
    
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
                    <h1>All Promotions</h1>

                    {/* Fetch data from API */}
                    <div>
                        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
                        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Promotions
                        </button>
                        <br />
                    </div>

                    {/* Display data from API */}
                    <div className="students" style={{marginLeft:"50px"}}>
                        {promotions &&
                        promotions.map((promotion, index) => {
                            return (
                            <div className="student" key={index}>
                                <h3 className="badge bg-success">Promotion {index + 1}</h3>

                                <div className="details">
                                <div>
                                    <div style={{float:"right"}}>
                                    <img src ={"images/" + promotion.photo} style={{width:"200px" , height:"200px"}}
                                    className = "border border-danger rounded-circle"
                                    />
                                    </div>
                                    <p >🥘<b style={{color:"red"}}>Food Item Name   : </b>{promotion.foodItemName}</p>
                                    <p >🍲<b style={{color:"green"}}>Quantity  : </b>{promotion.quantity} </p>
                                    <p >🍲<b style={{color:"purple"}}>Description  : </b>{promotion.description} </p>
                                    <p >➗<b style={{color:"blue"}}>Discount Rate: </b>{promotion.discountRate}</p>
                                    <p >💲<b style={{color:"orange"}}> Prior Price: </b>Rs.{promotion.priorPrice}.00</p>
                                    <p >💲<b style={{color:"orange"}}> Present Price: </b>Rs.{promotion.presentPrice}.00</p>
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