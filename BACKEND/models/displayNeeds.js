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

    date: {
        type: String,
        required: true,
        trim: true
    }, 
  
    quantity: {
        type: String
    },

});

const Image = mongoose.model('supplier', ImageSchema);

module.exports = Image;