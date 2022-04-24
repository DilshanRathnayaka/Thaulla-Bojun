const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShortcomingViewSchema = new Schema({
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

const ShortcomingView = mongoose.model('shortcomings', ShortcomingViewSchema);

module.exports = ShortcomingView;