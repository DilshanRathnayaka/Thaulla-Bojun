const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    campaignName: {
        type: String,
        required: true,
        trim: true
    }, 

    campaignType: {
        type: String,
        required: true,
        trim: true
    },

    estimatedCost: {
        type: Number,
        required: true,
        trim: true
    }, 

    timing: {
        type: String,
        required: true,
        trim: true
    },
    
});

const campaign = mongoose.model('campaign', campaignSchema);

module.exports = campaign;