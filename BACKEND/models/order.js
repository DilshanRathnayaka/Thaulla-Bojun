const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema= new Schema({
    complaintId: {
        type: String,
        required: true,
        trim: true
    }, 


    complaintType : {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    }, 
    

    complaintEmail: {
        type:String,
        required:true 
       
    
    }
});

const complaint = mongoose.model('Complaint', complaintSchema);

module.exports = complaint;