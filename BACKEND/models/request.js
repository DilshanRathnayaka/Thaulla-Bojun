const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    itemId: {
        type: Number,
        required: true,
        trim: true
    },

    itemName: {
        type: String,
        required: true,
        trim: true
    }, 

    date: {
        type: String,
        required: true,
        trim: true
    },

    quantity: {
        type: String,
        required: true,
        trim: true
    }, 


    
});

const Request = mongoose.model('request', RequestSchema);

module.exports = Request;