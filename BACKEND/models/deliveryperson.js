const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    age: {
        type: Number,
        required: true,
        trim: true
    },

    workdate: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    birthdate: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    }, 
    phonenumber: {
        type: String,
        required: true,
        trim: true
    }, 
    emailaddress: {
        type: String,
        required: true,
        trim: true
    },
    branchcode: {
        type: String,
        required: true,
        trim: true
    },  
});

const Image = mongoose.model('deliveryperson', ImageSchema);

module.exports = Image;