import React from "react";
import '../../../social.css';
import './Campaigns.js';
import {Link} from "react-router-dom";


export default function SocialMedia(){
    return(
        <Link className="nav-link active" to = "/addcampaign-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i>
        <div className="icon-barR1">
            <button className="btn btn-danger" >
                <span>C</span><br/>
                <span>A</span><br/>
                <span>M</span><br/>
                <span>P</span><br/>
                <span>A</span><br/>
                <span>I</span><br/>
                <span>G</span><br/>
                <span>N</span><br/>
                <span>S</span><br/>
               
            </button>
        </div>
        </Link>
    )
}
