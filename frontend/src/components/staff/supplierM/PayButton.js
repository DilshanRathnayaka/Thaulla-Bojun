import React from "react";

import {useHistory} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import '../../../social.css';

export default function PromotionButton(){
    let history = useHistory();
    const redirect = ()=>{

        history.push("/displaySuppliers-supplierM");

    }

    return(
        <div className="icon-barN2">

            
            <Button className="btn btn-danger" onClick={"redirect"}>

                <span>P</span><br/>
                <span>A</span><br/>
                <span>Y</span><br/>
                <span>M</span><br/>
                <span>E</span><br/>
                <span>N</span><br/>
                <span>T</span><br/>
                <span>S</span>

            </Button>

        </div>

    )

}