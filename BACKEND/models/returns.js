const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    itemID: {
        type: String,
        required: true,
        trim: true
    }, 

    itemName: {
        type: String,
        required: true,
        trim: true
    },

    itemQuantity: {
        type: Number,
        required: true,
        trim: true
    }, 

    
    photo: {
        type: String
    },


});

const Image = mongoose.model('returns', ImageSchema);

module.exports = Image;