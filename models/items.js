const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // photo: {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // },
    description: {
        type: String,
        required:true
    },
    quantity: {
        type: Number,
        required:true
    },
    date: {
        type: Date,
        required:true
    },
    points:{
        type: Number,
        required: true
    },
    approved:{
        type: Boolean,
        default: false
    }
});

mongoose.model('item', ItemSchema);
module.exports = ItemSchema;