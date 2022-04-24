import {useEffect } from "react";
import "./NavBar.css";
import "./HomeScreen.css";
import Product from "./Product";
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
                
                <div className="homescreen">
                    <h2 className="homescreen__title">Latests Products</h2>

                    <div className="homescreen__products">
                     {loading ? (
                     <h2>Loading...</h2>
                     ): error ? (
                     <h2>{error}</h2>
                     ):(
                         products.map((product)=>(
                         <Product
                         key = {product._id}
                         productId = {product._id}
                         name ={product.name}
                         price = {product.price}
                         description = {product.description}
                         imageURL={product.imageURL}
                         />

                     ))
                     )}
                    </div>
                </div>
            </div>
    )

}

export default PrivateScreen;