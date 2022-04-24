const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodItemName: {
        type: String,
        required: true,
        trim: true
    }, 

    quantity: {
        type: Number,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        trim: true
    }, 

    ingredience: {
        type: String,
        required: true,
        trim: true
    },
    
    procedure: {
        type: String,
        required: true,
        trim: true
    },
    
});

const food = mongoose.model('newfood', foodSchema);

module.exports = food;