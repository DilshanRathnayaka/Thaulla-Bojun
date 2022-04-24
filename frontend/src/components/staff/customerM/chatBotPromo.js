import React from "react";
import {useState} from "react";
import axios from "axios";
import "./chatBot.css";

const ChatBot = ()=>{
    const [email , setEmail] = useState("");
    const [description , setDescription] = useState("");
    const [error , setError] = useState("");
    const [success , setSuccess] = useState("");

    const sendEmailHandler = async (e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/api/auth/sendCustomerPromotionEmail" , {email , description} , config);

            setSuccess(data.data);

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>{
                setError("");
            } , 5000); //5s
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
        
            <button className="open-button " onClick={openForm}><i className="fa fa-android" aria-hidden="true"></i> Chat</button>

            <div className="chat-popup open-button" id="myForm" >
            <form onSubmit={sendEmailHandler} className="form-container">
                {error && <span className="badge bg-warning">{error}</span>} 
                {success && <span className="badge bg-success">{success}</span>} 
                <h1>Send Email</h1>

                
                <textarea cols ="3" rows = "2" placeholder="Type message.." name="msg" required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}></textarea>
                <div className="cmb-3">
                <input type="text" className="form-control" placeholder="📧 Email" required="required" pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}" 
                    value = {email} onChange = {(e)=>setEmail(e.target.value)}
                    />
                </div><br/>
                <button type="submit" className="btn">Send</button>
                <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
            </form>
            </div>

        </div>
    )
}

export default ChatBot;