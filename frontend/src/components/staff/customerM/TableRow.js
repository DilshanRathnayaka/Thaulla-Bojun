import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class CustomerTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer() {
        axios.delete('http://localhost:8070/users/delete/' + this.props.obj._id)
            .then((res) => {
                toast("Success! Customer Deleted 😘")
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"gray"}}>{this.props.obj.name}</td>
                <td style={{color:"gray"}}>{this.props.obj.age}</td>
                <td style={{color:"gray"}}>{this.props.obj.gender}</td>
                <td style={{color:"gray"}}>{this.props.obj.address}</td>
                <td style={{color:"gray"}}>{this.props.obj.phone}</td>
                <td style={{color:"gray"}}>{this.props.obj.email}</td>
                <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td>
                <td style={{width:"250px"}}>
                    <Link className="edit-link" to={`/edit-customerM/${this.props.obj._id}/${this.props.obj.name}/${this.props.obj.age}/${this.props.obj.gender}/${this.props.obj.address}/${this.props.obj.phone}/${this.props.obj.email}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteCustomer} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        <a href="/edit-customerM"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
                <ToastContainer style={{marginTop:"50px"}}/>
            </tr>
        );
    }
}