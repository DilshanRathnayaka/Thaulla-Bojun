import "./CartScreen.css";
import { Link } from "react-router-dom";
import React ,{useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

//Actions

import { addToCart , removeFromCart} from "../../Redux/actions/cartActions";


const CartScreen =({history})=>{
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

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id , qty)=>{
        dispatch(addToCart(id , qty))
    }

    const removeHandler = (id)=>{
        dispatch(removeFromCart(id))
    }
    
    const getCartCount = () =>{
        return cartItems.reduce((qty , item) => Number(item.qty) + qty , 0)
    }
    const getCartSubTotal = ()=>{
        return cartItems.reduce((price , item) => item.price * item.qty + price , 0)
    }

    //Payment


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
                <div className="cartscreen">
                    <div className="cartscreen__left">
                        <h2>Shoping Cart</h2>
                        {cartItems.length === 0 ? (
                            <div>
                                Your cart is empty <Link to ="/">Go Back</Link>
                            </div>
                        ):(
                            cartItems.map((item) => <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>)
                        )}
                        
                    </div>
                    <div className="cartscreen__right">
                        <p style={{marginLeft:"8px", marginTop:"8px"}}>Subtotal ({getCartCount()}) items</p>
                        <p style={{marginLeft:"8px", marginTop:"8px"}}>Rs.{getCartSubTotal().toFixed(2)}</p>
                        <div>
                            <Link to = "/delivery"><button>Proceed to Cash on Delivery</button></Link><br/><br/>
                            <h1><i class="fa fa-cc-stripe" aria-hidden="true"></i></h1>
                            <StripeCheckout
                                stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                                name="Thaulla Bojun"
                                image="thaulla.png"
                                billingAddress
                                shippingAddress
                            />
                        </div>
                    </div>
                   

                </div>
        </div>
       
    )
}

export default CartScreen;