import React from "react";
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../../../social.css';

export default function StatusnButton(){

    let history = useHistory();

    const redirect = ()=>{

        history.push("/displayfood-MarketingM");

    }

    return(

        

        <div className="icon-barR2">

            

            <Button className="btn btn-danger" onClick={redirect}>

                <span>F</span><br/>

                <span>O</span><br/>

                <span>O</span><br/>

                <span>D</span><br/>

                <span> </span><br/>

                <span>S</span><br/>

                <span>T</span><br/>

                <span>A</span><br/>

                <span>T</span><br/>

                <span>U</span><br/>

                <span>S</span>

            </Button>

        </div>

    )

}