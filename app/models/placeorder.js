'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./../models/Product');
const placeorderSchema = new Schema({
    quantity: {
        type: String,
        required: true,
        default: 1
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', 
            required: true ,    
        },
        productPrice: {
            type: Number,
            //require: true,
        },
        productDiscount: {
            type: Number
        }
    }],
    
    
    
});
const Placorder = mongoose.model('placeOrder', placeorderSchema);
module.exports = Placorder;