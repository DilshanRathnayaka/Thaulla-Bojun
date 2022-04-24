const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const ImageSchema = new Schema({
    scid: {
        type: String,
        required: true,
        trim: true
    },

    scitem: {
        type: String,
        required: true,
        trim: true
    }, 

    itemid: {
        type: String,
        required: true,
        trim: true
    },

    qty: {
        type: String,
        required: true,
        trim: true
    }, 

    reqdate: {
        type: Date,
        required: true,
        trim: true
    },


    
});

const Image = mongoose.model('shortcoming', ImageSchema);

module.exports = Image;