'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    
    brand: {
        type: String,
        required: true
        },

    
    unitPrice: {
        type: String,
        default: 0
    },

    productImage: { 
        type: String,
     //required: true
    }
    
},
{
    timestamps: true,
    autoIndex: true
});
const Product = mongoose.model('Product', itemSchema);
module.exports = Product;