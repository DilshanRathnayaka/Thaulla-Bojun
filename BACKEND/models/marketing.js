const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
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

    description: {
        type: String,
        required: true,
        trim: true
    }, 

    discountRate: {
        type: String,
        required: true,
        trim: true
    },
    
    priorPrice: {
        type: String,
        required: true,
        trim: true
    },

    presentPrice:{
        type:String,
        required:true , 
       
    },

    photo: {
        type: String
    },

});

const Promotion = mongoose.model('promotion', promotionSchema);

module.exports = Promotion;