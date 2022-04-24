const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema= new Schema({
    orderId: {
        type: String,
        required: true,
        trim: true
    }, 


    category: {
        type: String,
        required: true,
        trim: true
    },

    itemNumber: {
        type: String,
        required: true,
        trim: true
    }, 

    customerName: {
        type: String,
        required: true,
        trim: true
    }, 

    address: {
        type: String,
        required: true,
        trim: true
    }, 
    
    contactNumber: {
        type: String,
        required: true,
        trim: true
    }, 

    date: {
        type: String,
        required: true,
        trim: true
    },
    

    price: {
        type: String,
        required: true,
        trim: true
    },
    
    paymentStates: {
        type: String,
        required: true,
        trim: true
    },
    
    quantity: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

const order = mongoose.model('Order', orderSchema);

module.exports = order;