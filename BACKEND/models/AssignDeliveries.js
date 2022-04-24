const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    orderid: {
        type: String,
        required: true,
        trim: true
    },

    destination: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    deliveryid: {
        type: String,
        required: true,
        trim: true
    },
    deliverydate: {
        type: String,
        required: true,
        trim: true
    }, 
     
});

const Image = mongoose.model('assigndeliveries', ImageSchema);

module.exports = Image;