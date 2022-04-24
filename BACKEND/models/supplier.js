const mongoose = require('mongoose');
const { isNumber } = require('util');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    supplierID: {
        type: String,
        required: true,
        trim: true
    }, 

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    }, 

    priorExperiance: {
        type: Number,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    itemsPurchased: {
        type: String,
        required: true,
        trim: true
    }
});

const Image = mongoose.model('supplier', ImageSchema);

module.exports = Image;