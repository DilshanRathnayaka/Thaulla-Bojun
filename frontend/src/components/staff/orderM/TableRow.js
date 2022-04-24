import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/orderManager/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.orderId}</td>
                <td>{this.props.obj.category}</td>
                <td>{this.props.obj.itemNumber}</td>
                <td>{this.props.obj.customerName}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.contactNumber}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.quantity}</td>
                <td>{this.props.obj.paymentStates}</td>
                <td>{this.props.obj.email}</td>
                <td style={{width:"250px"}}>
                <Link className="edit-link" to={`/edit-OrderM/${this.props.obj._id}/${this.props.obj.orderId}/${this.props.obj.category}/${this.props.obj.itemNumber}/${this.props.obj.customerName}/${this.props.obj.address}/${this.props.obj.contactNumber}`}>
                        <Button size="sm" variant="success"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteStudent} variant="danger"><i className="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        <a href="/edit-orderM"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i className="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
            </tr>
        );
    }
}