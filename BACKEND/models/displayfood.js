const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    foodname: {
        type: String,
        required: true,
        trim: true
    }, 

    status: {
        type: String,
        required: true,
        trim: true
    },
    
    

});

const Image = mongoose.model('Status', ImageSchema);

module.exports = Image;