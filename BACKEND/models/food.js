const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    chefid: {
        type: String,
        required: true,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    }, 

    address: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    }, 

    email: {
        type: String,
        required: true,
        trim: true
    },

    exp: {
        type: String,
        required: true,
        trim: true
    },
    
    photo: {
        type: String
    },

    
});

const Image = mongoose.model('chef', ImageSchema);

module.exports = Image;