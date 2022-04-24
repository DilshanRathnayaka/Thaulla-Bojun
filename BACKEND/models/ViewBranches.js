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
    }
    
});

const Image = mongoose.model('assignbranches', ImageSchema);

module.exports = Image;