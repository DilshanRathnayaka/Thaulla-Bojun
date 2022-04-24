import React, { useState } from 'react';
import "./chatBotB.css";
import axios from 'axios';
import "./branch.css";



const ChatBotB = ()=>{

    const [name , setName] = useState("");
    const [city , setCity] = useState("");
    const [branchID , setBranchID] = useState("");


    const registerHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/assignbranches/assign" , {name , city , branchID});

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
        
            <button class="open-button " onClick={openForm}><i class="fa fa-android" aria-hidden="true"></i>Assign</button>
            <div className="bg"> 
            <div class="chat-popup open-button" id="myForm" style={{float:"right"}}>
            <form onSubmit={registerHandler} encType='multipart/form-data' class="form-container">
                <h1>Assign Branch</h1>

                <label for="msg"><b>Message</b></label>
                <text placeholder="Type message.." name="msg" required></text>

                
             
                <hr />
                <label for="name" className="form-label">Branch Name</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="Enter Branch Name" required pattern = "[a-zA-Z'-'\s]*" 
                        value = {name}  onChange = {(e)=>setName(e.target.value)}
                        />
                    </div>
                </div>
                <label for="city" className="form-label">City</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="city" placeholder="Enter Name of City" required="required" 
                        value = {city} onChange = {(e)=>setCity(e.target.value)}
                        />
                    </div>
                </div>
                <label for="branchID" className="form-label">Branch ID</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="branchID" placeholder="Enter Branch ID" required="required" 
                        value = {branchID} onChange = {(e)=>setBranchID(e.target.value)}
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

export default ChatBotB;