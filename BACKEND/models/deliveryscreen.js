const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    city: {
        type: String,
        required: true,
        trim: true
    }, 

    address: {
        type: String,
        required: true,
        trim: true
    },

    contactNo: {
        type: String,
        required: true,
        trim: true
    }, 


    
});

const Delivery = mongoose.model('deliveryscreen', DeliverySchema);

module.exports = Delivery;