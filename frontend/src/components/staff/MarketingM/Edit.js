import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";




export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeMarketingFood_Item_Name = this.onChangeMarketingFood_Item_Name.bind(this);
    this.onChangeMarketingQuantity = this.onChangeMarketingQuantity.bind(this);
    this.onChangeMarketingDescription = this.onChangeMarketingDescription.bind(this);
    this.onChangeMarketingDiscount_Rate = this.onChangeMarketingDiscount_Rate.bind(this);
    this.onChangeMarketingPrior_Price = this.onChangeMarketingPrior_Price.bind(this);
    this.onChangeMarketingPresent_Price = this.onChangeMarketingPresent_Price.bind(this);
    this.onChangeMarketingPhoto = this.onChangeMarketingPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
      foodItemName: '',
      quantity: '',
      description: '',
      discountRate: '',
      priorPrice: '',
      presentPrice: '',
      photo:'',
      
    }
  }

  onChangeMarketingFood_Item_Name(e) {
    this.setState({ foodItemName: e.target.value })
  }

  onChangeMarketingQuantity(e) {
    this.setState({ quantity: e.target.value })
  }

  onChangeMarketingDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeMarketingDiscount_Rate(e) {
    this.setState({ discountRate: e.target.value })
  }

  onChangeMarketingPrior_Price(e) {
    this.setState({ priorPrice: e.target.value })
  }
  onChangeMarketingPresent_Price(e) {
    this.setState({ presentPrice: e.target.value })
  }
  
  onChangeMarketingPhoto(e) {
    this.setState({ photo: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
        formData.append('photo', this.state.photo);
        formData.append('foodItemName', this.state.foodItemName);
        formData.append('quantity', this.state.quantity);
        formData.append('description', this.state.description);
        formData.append('discountRate', this.state.discountRate);
        formData.append('priorPrice', this.state.priorPrice);
        formData.append('presentPrice', this.state.presentPrice);

    axios.put('http://localhost:8070/promotions/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Promotion successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to Customer List 
    this.props.history.push('/edit-MarketingM')
    
  }


  render() {
    const { Food_Item_Name , Quantity , Description , Discount_Rate, Prior_Price,Present_Price} = this.props.match.params;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{color:"red"}}><b>Marketing Management System</b></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                      <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to = "/staff-MarketingM"><i class="fa fa-fw fa-home"></i>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to = "/add-MarketingM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Promotions</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-MarketingM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Promotions</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Promotions</Link>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                      <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
                    </form>
                  </div>
                </div>
              </nav>
             
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Current Info 👁</h1>
                <table>

                    <td controlId="Food_Item_Name">
                    <label>Food_Item_Name</label>
                    <input type="text" value={Food_Item_Name} onChange={this.onChangeMarketingFood_Item_Name} required disabled/>
                    </td>

                    <td controlId="Quantity">
                    <label>Quantity</label>
                    <input type="text" value={Quantity} onChange={this.onChangeMarketingQuantity} required disabled/>
                    </td>

                    <td controlId="Description">
                    <label>Description</label>
                    <input type="text" value={Description} onChange={this.onChangeMarketingDescription} required disabled/>
                    </td>

                    <td controlId="Discount_Rate">
                    <label>Discount_Rate</label>
                    <input type="text" value={Discount_Rate} onChange={this.onChangeMarketingDiscount_Rate} required disabled/>
                    </td>

                    <td controlId="Prior_Price">
                    <label>Prior_Price</label>
                    <input type="text" value={Prior_Price} onChange={this.onChangeMarketingPrior_Price} required disabled/>
                    </td>

                    <td controlId="Present_Price">
                    <label>Present_Price</label>
                    <input type="text" value={Present_Price} onChange={this.onChangeMarketingPresent_Price} required disabled/>
                    </td>

                    
                   


                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="Food_Item_Name">
                    <Form.Label>Food_Item_Name</Form.Label>
                    <Form.Control type="text" value={this.state.foodItemName} onChange={this.onChangeMarketingFood_Item_Name} placeholder="✍🏻 Edit Food_Item_Name" required />
                    </Form.Group>

                    <Form.Group controlId="Quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeMarketingQuantity} placeholder="✍🏻 Edit Quantity" required/>
                    </Form.Group>

                    <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.onChangeMarketingDescription} placeholder="✍🏻 Edit Description" required/>
                    </Form.Group>

                    <Form.Group controlId="Discount_Rate">
                    <Form.Label>Discount_Rate</Form.Label>
                    <Form.Control type="text" value={this.state.discountRate} onChange={this.onChangeMarketingDiscount_Rate} placeholder="✍🏻 Edit Discount_Rate" required/>
                    </Form.Group>
                    

                    <Form.Group controlId="Prior_Price">
                    <Form.Label>Prior_Price</Form.Label>
                    <Form.Control type="text" value={this.state.priorPrice} onChange={this.onChangeMarketingPrior_Price} placeholder="✍🏻 Edit Prior_Price" required/>
                    </Form.Group>
                    
                    <Form.Group controlId="Present_Price">
                    <Form.Label>Present_Price</Form.Label>
                    <Form.Control type="text" value={this.state.presentPrice} onChange={this.onChangeMarketingPresent_Price} placeholder="✍🏻 Edit Present_Price" required/>
                    </Form.Group>
                    
                    <br/>

                    <Form.Group controlId="Photo">
                    <Form.Label>Photo</Form.Label>
                    <i class="fa fa-folder-open" aria-hidden="true"></i>
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={this.onChangeMarketingPhoto} required
                    />
                   
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Promotions
                    </Button>
                </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}