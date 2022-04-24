import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Payments from "./PayButton";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {

    

    return (
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
    )

    }  

export default Payment;
    