import React from "react";
import '../../../social.css';
import {Link}from "react-router-dom"

export default function SocialMedia(){
    return(
        <Link to="displayNeeds-supplierM">
        <div className="icon-barN1">
            <button className="btn btn-danger" >
                <span>R</span><br/>
                <span>E</span><br/>
                <span>Q</span><br/>
                <span>U</span><br/>
                <span>I</span><br/>
                <span>R</span><br/>
                <span>E</span><br/>
                <span>M</span><br/>
                <span>E</span><br/>
                <span>N</span><br/>
                <span>T</span><br/>
                <span>S</span><br/>
            </button>
        </div></Link>


    )
}