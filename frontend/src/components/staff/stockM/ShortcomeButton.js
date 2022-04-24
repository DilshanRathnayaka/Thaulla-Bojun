import React from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../../../social.css';

export default function Shortcomings(){
    let history = useHistory();
    const redirect = ( )=> {
        history.push("/shortcomingViews-stockM");
    }
    return(
        
        <div className="icon-bar1">
            <Button className="btn btn-danger" onClick = {redirect}>
                <span>S</span><br/>
                <span>H</span><br/>
                <span>O</span><br/>
                <span>R</span><br/>
                <span>T</span><br/>
                <span>C</span><br/>
                <span>O</span><br/>
                <span>M</span><br/>
                <span>I</span><br/>
                <span>N</span><br/>
                <span>g</span><br/>
                <span>S</span>
            </Button>
        </div>
    )
}