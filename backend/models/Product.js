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
        required: true,
    },
    icon: [{
        type: Number,
        required: true
    }]
});

module.exports = mongoose.model( 'Product', productSchema );