import React from "react";
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../../../social.css';

export default function PromotionButton(){
    let history = useHistory();
    const redirect = ()=>{
        history.push("/promotion-customerM");
    }
    return(
        
        <div className="icon-barS">
            
            <Button className="btn btn-danger" onClick={redirect}>
                <span>P</span><br/>
                <span>R</span><br/>
                <span>O</span><br/>
                <span>M</span><br/>
                <span>O</span><br/>
                <span>T</span><br/>
                <span>I</span><br/>
                <span>O</span><br/>
                <span>N</span><br/>
                <span>S</span>
            </Button>
        </div>
    )
}