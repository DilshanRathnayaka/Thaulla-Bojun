import {useState , useEffect} from "react";
import React from "react";
import "./chatBot.css";
import axios from "axios";


const ChatBot = ()=>{

    const [foodname , SetFoodname] = useState("");
    const [status , SetStatus] = useState("");

    const UpdateHandler = async (e)=>{
        e.preventDefault();

        

        try {
            const {data} = await axios.post("http://localhost:8070/updatefood/add" , {foodname , status});

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
            <form onSubmit={UpdateHandler} encType='multipart/form-data' class="form-container">
                <h1>Send Status</h1>

               
            
                <hr />
                <label for="foodname" className="form-label">Food Item Name</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="foodname" placeholder="Enter Food Item Name" required="required" 
                        value = {foodname}  onChange = {(e)=>SetFoodname(e.target.value)}
                        />
                    </div>
                </div>
                <label for="status" className="form-label">Status</label>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">                    
                        </div>
                        <input type="text" className="form-control" name="status" placeholder="Enter status" required="required" 
                        value = {status} onChange = {(e)=>SetStatus(e.target.value)}
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

export default ChatBot;