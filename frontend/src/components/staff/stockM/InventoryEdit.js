import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeStockIn = this.onChangeStockIn.bind(this);
    this.onChangeStockOut = this.onChangeStockOut.bind(this);
    this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      itemId: '',
      itemName: '',
      stock: '',
      stockIn: '',
      stockOut: '',
      unitPrice: '',
      date: '',
      photo:'',
      
    }
  }

  onChangeItemId(e) {
    this.setState({ itemId: e.target.value })
  }

  onChangeItemName(e) {
    this.setState({ itemName: e.target.value })
  }

  onChangeStock(e) {
    this.setState({ stock: e.target.value })
  }

  onChangeStockIn(e) {
    this.setState({ stockIn: e.target.value })
  }

  onChangeStockOut(e) {
    this.setState({ stockOut: e.target.value })
  }

  onChangeUnitPrice(e) {
    this.setState({ unitPrice: e.target.value })
  }

  onChangeDate(e) {
    this.setState({ date: e.target.value })
  }

  onChangePhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('photo', this.state.photo);
        formData.append('itemId', this.state.itemId);
        formData.append('itemName', this.state.itemName);
        formData.append('stock', this.state.stock);
        formData.append('stockIn', this.state.stockIn);
        formData.append('stockOut',this.state.stockOut);
        formData.append('unitPrice',this.state.unitPrice);
        formData.append('date',this.state.date);

    axios.put('http://localhost:8070/inventories/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Item successfully updated')
      }).catch((error) => {
        alert(error)
      })
      // Redirect to assistant List 
    this.props.history.push('/editInven-stockM')
    
  }


  render() {
    const { itemId , itemName , stock , stockIn , stockOut, unitPrice, date} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Stock Management System</b></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to = "/staff-stockM" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/addInven-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/displayInven-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
            </li>  
            <li className="nav-item">
                <Link className="nav-link active" to = "#" style={{color:"#008080"}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Inventory</Link>
            </li>
          </ul>
                  </div>
                </div>
              </nav>

              <div className="stockImage"><br/><br/>             
                <div className="form-wrapper container"style={{width:"100%", background:"#000000" , padding:"5px 5px 5px 5px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Current Info 👁</h1>
                <table>

                    <td controlId="itemID">
                    <label>Item Id</label>
                    <input type="text" value={itemId} onChange={this.onChangeItemId} required disabled/>
                    </td>

                    <td controlId="itemName">
                    <label>Item Name</label>
                    <input type="text" value={itemName} onChange={this.onChangeItemName} required disabled/>
                    </td>

                    <td controlId="stock">
                    <label>Stock</label>
                    <input type="text" value={stock} onChange={this.onChangeStock} required disabled/>
                    </td>

                    <td controlId="stockIn">
                    <label>Stock In</label>
                    <input type="text" value={stockIn} onChange={this.onChangeStockIn} required disabled/>
                    </td>

                    <td controlId="stockOut">
                    <label>stock Out</label>
                    <input type="text" value={stockOut} onChange={this.onChangeUnitPrice} required disabled/>
                    </td>

                    <td controlId="unitPrice">
                    <label>Unit Price</label>
                    <input type="text" value={unitPrice} onChange={this.onChangeStockOut} required disabled/>
                    </td>

                    <td controlId="date">
                    <label>Date</label>
                    <input type="text" value={date} onChange={this.onChangeDate} required disabled/>
                    </td>



                </table><br/>
                </div><br/>
                <div className="form-wrapper container" style={{width:"50%"  , background:"#000000" , padding:"5px 5px 10px 10px" , opacity:"0.8"}}><br/>
                <h1 style = {{color: "white"}}>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="itemId">
                    <Form.Label>Item Id</Form.Label>
                    <Form.Control type="text" value={this.state.itemId} onChange={this.onChangeItemId} placeholder="✍🏻 Edit Item Id" required pattern="[A-Za-z0-9]+" />
                    </Form.Group><br/>

                    <Form.Group controlId="itemName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" value={this.state.itemName} onChange={this.onChangeItemName} placeholder="✍🏻 Edit Item Name" required pattern="[A-Za-z]+"/>
                    </Form.Group><br/>

                    <Form.Group controlId="Stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" value={this.state.stock} onChange={this.onChangeStock} placeholder="✍🏻 Edit Stock" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="stockIn">
                    <Form.Label>Stock In </Form.Label>
                    <Form.Control type="text" value={this.state.stockIn} onChange={this.onChangeStockIn} placeholder="✍🏻 Edit Stock In" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="stockOut">
                    <Form.Label>stock Out</Form.Label>
                    <Form.Control type="text" value={this.state.stockOut} onChange={this.onChangeStockOut} placeholder="✍🏻 Edit Stock Out" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="unitPrice">
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control type="text" value={this.state.unitPrice} onChange={this.onChangeUnitPrice} placeholder="✍🏻 Edit Unit Price" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" value={this.state.date} onChange={this.onChangeDate} placeholder="✍🏻 Edit Date" required/>
                    </Form.Group><br/>

                    <Form.Group controlId="Photo">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangePhoto} required style={{color:"#000000"}}
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Item
                    </Button>
                </Form><br/>
                </div>
                <br/><br/>
              </div>
        </div>
       );
  }

}