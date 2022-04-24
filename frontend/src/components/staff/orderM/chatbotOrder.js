import React, { useState } from 'react';
import axios from 'axios';
import "./chatbotOrder.css";



const ChatbotOrder = ()=>{

    const [orderId , setOrderId] = useState("");
    const [category , setCategory] = useState("");
    const [itemNumber , setItemNumber] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address , setAddress] = useState("");
    const [contactNumber , setContactNumber] = useState("");
    const [date , setDate] = useState("");
    const [price , setPrice] = useState("");
    const [quantity , setQuantity] = useState("");

    



    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/orderchat/display" , {orderId, category, itemNumber, customerName, address, contactNumber, date, price, quantity});

            alert('upload successfully')

        } catch (error) {
            
            alert(error)
        }
    }
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

      
    return(
        <div>
        
            <button class="open-button " onClick={openForm}><i class="fa fa-android" aria-hidden="true"></i>Submit</button>
            <div className="bg"> 
            <div class="chat-popup open-button" id="myForm" style={{float:"right"}}>
            <form onSubmit={registerHandler} encType='multipart/form-data' class="form-container" style={{height:"20%"}}>
                <h1>Submit Orders</h1>

                <text placeholder="Type message.." name="msg" required></text>

                
             
                <hr />
        
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" orderId="orderId" placeholder="Enter Order ID" required="required" 
                        value = {orderId}  onChange = {(e)=>setOrderId(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="category" placeholder="Enter Category" required="required" 
                        value = {category} onChange = {(e)=>setCategory(e.target.value)}
                        />
                    </div>
                </div>
      
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="itemNumber" placeholder="Enter Item Number" required="required" 
                        value = {itemNumber} onChange = {(e)=>setItemNumber(e.target.value)}
                        />
                    </div>
                </div>
           
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="customerName" placeholder="Enter Customer Name" required="required" 
                        value = {customerName} onChange = {(e)=>setCustomerName(e.target.value)}
                        />
                    </div>
                </div>
             
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="address" placeholder="Enter Address" required="required" 
                        value = {address} onChange = {(e)=>setAddress(e.target.value)}
                        />
                    </div>
                </div>
              
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="contactNumber" placeholder="Enter Contact Number" required="required" 
                        value = {contactNumber} onChange = {(e)=>setContactNumber(e.target.value)}
                        />
                    </div>
                </div>
             
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="date " placeholder="Enter Date" required="required" 
                        value = {date } onChange = {(e)=>setDate(e.target.value)}
                        />
                    </div>
                </div>
           
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="price" placeholder="Enter Price" required="required" 
                        value = {price} onChange = {(e)=>setPrice(e.target.value)}
                        />
                    </div>
                </div>
              
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="quantity" placeholder="Enter Quantity" required="required" 
                        value = {quantity} onChange = {(e)=>setQuantity(e.target.value)}
                        />
                    </div>
                </div>
                <br></br>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Send</button>
                </div>
            
            
       
      
                <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
            </form>
            </div>

        </div>
        </div>
    )
}

export default ChatbotOrder;