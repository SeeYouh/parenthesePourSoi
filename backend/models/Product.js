const mongoose = require( 'mongoose' );

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false,
    },
    icon: [{
        type: Number,
        required: false
    }]
});

module.exports = mongoose.model( 'Product', productSchema );