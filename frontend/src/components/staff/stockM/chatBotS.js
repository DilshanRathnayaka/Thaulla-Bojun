import React, { useState } from 'react';
import axios from 'axios';
import "./chatBot.css";



const ChatBotS = ()=>{

    const [itemId , setitemId] = useState("");
    const [itemName , setitemName] = useState("");
    const [date , setdate] = useState("");
    const [quantity , setQuantity] = useState("");


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/request/add" , {itemId , itemName , date , quantity});

            alert('upload successfully')

        } catch (error) {
            
            alert('error')
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
        
            <button class="open-button " onClick={openForm}><i class="fa fa-android" aria-hidden="true"></i> Requests</button>
            <div className="bg"> 
            <div class="chat-popup open-button" id="myForm" style={{float:"right"}}>
            <form onSubmit={registerHandler} encType='multipart/form-data' class="form-container">
                <h1>Request Stock Item</h1>

                <label for="msg"><b>Message</b></label>
                <text placeholder="Type message.." name="msg" required></text>

                
             
               
                <label for="itemId" className="form-label">Item Id</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="itemId" placeholder="Enter Item Id" required="required" 
                        value = {itemId}  onChange = {(e)=>setitemId(e.target.value)}
                        />
                    </div>
                </div>
                <label for="itemName" className="form-label">Item Name</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="itemName" placeholder="Enter Item Name" required="required" 
                        value = {itemName} onChange = {(e)=>setitemName(e.target.value)}
                        />
                    </div>
                </div>
                <label for="date" className="form-label">Date</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="setdate" placeholder="Enter Date" required="required" 
                        value = {date} onChange = {(e)=>setdate(e.target.value)}
                        />
                    </div>
                </div>
                <label for="quantity" className="form-label">Quantity</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="setdate" placeholder="Enter Quantity" required="required" 
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

export default ChatBotS;