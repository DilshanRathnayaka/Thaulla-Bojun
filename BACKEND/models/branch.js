const { unique } = require('jquery');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
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

    branchID: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    address: {
        type: String,
        required: true,
        trim: true
    },
    contactNo: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

const Image = mongoose.model('branch', ImageSchema);

module.exports = Image;